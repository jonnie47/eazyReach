import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img
                                src="/EazyReach.png"
                                alt="EazyReach"
                                className="size-28 w-auto"
                            />
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {/* <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Demo
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a> */}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        {/* <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button> */}
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {
                                window.open("https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj", "_blank");
                            }}
                        >
                            Get Started
                        </Button>


                    </div>
                </div>
            </div>
        </header>
    );
};
