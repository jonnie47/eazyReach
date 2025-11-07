'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/EazyReach.png"
                                alt="EazyReach"
                                className="size-28 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link
                            href="/features"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Features
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/director-phone"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Director Phone
                        </Link>
                        <Link
                            href="/unlimited-email"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Unlimited Email
                        </Link>
                        <Link
                            href="/partners"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Partners
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/blogs"
                            target="_blank"
                            rel="noopener noreferrer"


                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            Blogs
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
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
