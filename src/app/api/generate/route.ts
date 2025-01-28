import axios from 'axios';

export default async function getAIPostContent(account: string, selectedAccount: string, date: Date | undefined) {
    try {
        const text = `Write only one captivating social media post (text only) ${selectedAccount !== "" ? `for ${selectedAccount}` : ""}
                ${date ? ` to be posted on ${date.toString()}` : ``} that is engaging, concise, and audience-appropriate.
                The post should: 
                Randomly focus on one of these topics or theme [productivity, self-improvement, tech tips, product launch, motivation]. 
                Include a clear call-to-action or key takeaway (or don't - optional). 
                Use a friendly, professional tone with in either one of these categories [humor, inspiration, factual insight]. 
                ${selectedAccount !== "" && selectedAccount === "Twitter" ? `Be limited to 280 characters for Twitter].` : ``} 
                ${selectedAccount !== "" && selectedAccount === "Instagram" ? `Be limited to 150 characters for Instagram].` : ``} 
                Avoid jargon and be universally understandable. 
                Incorporate a trending hashtag: [#hashtag].
                Try your best to not repeat similar posts`;
        const aiSession = await axios.get(`/api/aiSession?account=${account as string}`);
        const aiSessionData = aiSession.data.aiSession;
        await axios.post('/api/aiSession', {
            account,
            role: "user",
            text,
            socialMediaAccount: selectedAccount,
        });
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCE0YPTfkA7YfqmJLhsF3ww64LlynOMDSo`,
            {
                contents: [
                    aiSessionData.map((item: any) => ({
                        role: item.role,
                        parts: [{
                            text: item.text
                        }]
                    })).concat({
                        role: "user",
                        parts: [{
                            text
                        }]
                    })
                ]
            }
        );
        await axios.post('/api/aiSession', {
            account,
            role: "model",
            text: response.data.candidates[0].content.parts[0].text,
            socialMediaAccount: selectedAccount,
        });

        return response.data.candidates[0].content.parts[0].text;
    } catch (error: any) {
        console.error("Something went wrong:", error);
        throw new Error("Something went wrong");
    }
};