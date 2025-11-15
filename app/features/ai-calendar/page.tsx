'use client';

import React from 'react';
import { Calendar, Clock, Zap, CheckCircle } from 'lucide-react';

export default function AICalendarPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4" />
            AI Calendar Assistant
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            Smart Meeting Scheduling
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let AI handle your calendar coordination. Schedule meetings automatically based on availability and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Clock className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Auto-Scheduling</h3>
            <p className="text-gray-300">AI finds the best meeting times across all participants' calendars.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Instant Booking</h3>
            <p className="text-gray-300">Prospects can book time with you instantly without back-and-forth emails.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <CheckCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Smart Reminders</h3>
            <p className="text-gray-300">Automatic reminders and rescheduling when conflicts arise.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Simplify Your Scheduling</h2>
          <p className="text-gray-300 mb-8">Start using AI Calendar Assistant today</p>
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
