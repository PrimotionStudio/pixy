"use client";

import Link from 'next/link';
import { ArrowRight, Clock, PenTool, Zap } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Pixy</div>
          <div className="space-x-4">
            <Link href={'/#features'}>
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href={'/#howitworks'}>
              <Button variant="ghost">How It Works</Button>
            </Link>
            <Link href={'/#testimonial'}>
              <Button variant="ghost">Testimonials</Button>
            </Link>
            <Link href={'/login'}>
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionize Your Social Media Strategy</h1>
        <p className="text-xl mb-8 text-gray-600">AI-powered content creation and optimal scheduling for maximum engagement</p>
        <Link href={'/register'}>
          <Button size="lg" className="text-lg px-8">
            Get Started<ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section
        id='features'
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pixy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <PenTool className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Content Creation</h3>
              <p className="text-gray-600">Generate engaging posts tailored to your brand voice and audience preferences.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimal Scheduling</h3>
              <p className="text-gray-600">Our AI determines the best times to post for maximum engagement and reach.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Posting</h3>
              <p className="text-gray-600">Set it and forget it. We'll handle posting your content at the perfect moments.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id='/#howitworks'
        className="container mx-auto px-4 py-16 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="flex-1 mb-4 md:mb-0 md:mr-8">
              <h3 className="text-xl font-semibold mb-2">1. Connect Your Accounts</h3>
              <p className="text-gray-600">Link your social media profiles to Pixy with just a few clicks.</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">1</div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center mb-20">
            <div className="flex-1 mb-4 md:mb-0 md:ml-8">
              <h3 className="text-xl font-semibold mb-2">2. Generate Content</h3>
              <p className="text-gray-600">Use our AI to create engaging posts or import your own content.</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">2</div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0 md:mr-8">
              <h3 className="text-xl font-semibold mb-2">3. Schedule and Automate</h3>
              <p className="text-gray-600">Let our AI determine the best posting times and schedule your content.</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">3</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        id='/#testimonial'
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg italic mb-4 text-gray-500">"Pixy has completely transformed our social media strategy. We've seen a 200% increase in engagement since we started using it!"</p>
          <div className="flex items-center">
            <Avatar className="mx-4">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600">Marketing Manager, Tech Innovators Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Social Media?</h2>
        <p className="text-xl mb-8 text-gray-600">Join thousands of businesses already using Pixy</p>
        <Link href={'/register'}>
          <Button size="lg" className="text-lg px-8">
            Start For Free
          </Button>
        </Link>
      </section>
      <Separator />;
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Pixy</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 Pixy. All rights reserved. A Product of The Primotion Studio
          </div>
        </div>
      </footer>
      <Toaster />
    </div >
  );
}