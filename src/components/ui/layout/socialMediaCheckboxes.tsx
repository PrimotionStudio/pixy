import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";

type SocialMediaAccount = {
    name: string;
    icon: IconType; // React icon type
    color: string;  // Hex color code
};

const socialMediaAccounts: SocialMediaAccount[] = [
    { name: "Facebook", icon: FaFacebook, color: "#1877F2" },
    { name: "Twitter", icon: FaTwitter, color: "#1DA1F2" },
    { name: "Instagram", icon: FaInstagram, color: "#E1306C" },
    { name: "LinkedIn", icon: FaLinkedin, color: "#0077B5" },
    { name: "YouTube", icon: FaYoutube, color: "#FF0000" },
];

export default function SocialMediaCheckboxes() {
    const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

    const toggleSelection = (name: string) => {
        setSelectedAccounts((prev) =>
            prev.includes(name)
                ? prev.filter((account) => account !== name)
                : [...prev, name]
        );
    };

    return (
        <div className="flex gap-4">
            {socialMediaAccounts.map((account) => {
                const isSelected = selectedAccounts.includes(account.name);
                const Icon = account.icon;

                return (
                    <div
                        key={account.name}
                        onClick={() => toggleSelection(account.name)}
                        className={`relative w-16 h-16 flex items-center justify-center rounded-full cursor-pointer transition-transform transform ${isSelected ? "scale-110" : "scale-100"
                            }`}
                        style={{
                            border: `2px solid ${isSelected ? account.color : "#D1D5DB"}`,
                            backgroundColor: isSelected ? "#FFFFFF" : "#F3F4F6",
                        }}
                    >
                        <Icon
                            size={32}
                            className={`transition-colors ${isSelected ? "text-[brandColor]" : "text-gray-400"
                                }`}
                            style={{
                                color: isSelected ? account.color : "#9CA3AF",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
