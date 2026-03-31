'use client';

import React, { useEffect, useState } from 'react';
import { Chrome, CheckCircle, Loader2, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

const EXTENSION_ID = 'fffgeopnkmehonbljgdgejmpfnfbgooi';
const CHROME_STORE_URL = `https://chromewebstore.google.com/detail/eazyreach/${EXTENSION_ID}`;
const STUDIO_URL = 'https://studio.eazyreach.app';

type Status = 'detecting' | 'installed' | 'not-installed';

export default function GetStartedPage() {
  const [status, setStatus] = useState<Status>('detecting');
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    detectExtension();
  }, []);

  // Auto-redirect countdown when installed
  useEffect(() => {
    if (status !== 'installed') return;
    if (countdown === 0) {
      window.location.href = STUDIO_URL;
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [status, countdown]);

  const detectExtension = () => {
    // Method 1: DOM attribute injected by the extension content script.
    // In your extension's content script, add this one line:
    //   document.documentElement.setAttribute('data-eazyreach', 'true');
    // Make sure the content script runs on https://eazyreach.app/* in manifest.json.
    if (document.documentElement.hasAttribute('data-eazyreach')) {
      setStatus('installed');
      return;
    }

    // Method 2: Give the content script up to 800ms to inject the attribute
    // (covers cases where the script runs slightly after page load).
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (document.documentElement.hasAttribute('data-eazyreach')) {
        clearInterval(poll);
        setStatus('installed');
        return;
      }
      if (attempts >= 8) {
        // ~800ms elapsed, no attribute found — extension not installed
        clearInterval(poll);
        setStatus('not-installed');
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Link href="/" className="mb-12 flex items-center gap-2 text-accent font-bold text-2xl tracking-tight">
        EazyReach
      </Link>

      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-10 text-center shadow-2xl">

        {/* ── DETECTING ── */}
        {status === 'detecting' && (
          <div className="flex flex-col items-center gap-6">
            <Loader2 className="w-14 h-14 text-accent animate-spin" />
            <div>
              <h1 className="text-2xl font-bold text-gray-100 mb-2">Checking your setup…</h1>
              <p className="text-gray-400 text-sm">Looking for the EazyReach extension</p>
            </div>
          </div>
        )}

        {/* ── NOT INSTALLED ── */}
        {status === 'not-installed' && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Chrome className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-100 mb-2">You&apos;re one click away</h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                Install the EazyReach Chrome extension to start finding B2B contacts and automating outreach.
              </p>
            </div>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-black rounded-xl font-bold text-base hover:bg-accent/90 transition-all"
            >
              <Chrome className="w-5 h-5" />
              Get Extension
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-gray-600 text-xs">Free · No credit card required</p>
          </div>
        )}

        {/* ── INSTALLED ── */}
        {status === 'installed' && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-100 mb-2">You&apos;re all set!</h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                EazyReach is installed. Redirecting you to Studio in{' '}
                <span className="text-accent font-semibold">{countdown}s</span>…
              </p>
            </div>
            <a
              href={STUDIO_URL}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-black rounded-xl font-bold text-base hover:bg-accent/90 transition-all"
            >
              <Zap className="w-5 h-5" />
              Open Studio
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>

      <p className="mt-8 text-gray-600 text-xs">
        Works best in Google Chrome or Chromium-based browsers.
      </p>
    </div>
  );
}
