'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  return (
    <header className="border-b border-slate-700 bg-slate-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Daeya Logo" width={24} height={24} className="h-5 w-auto" />
            <span className="text-xl font-bold text-white">Daeya Portfolio</span>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <nav className="flex gap-6">
              <Link href="/" className="text-slate-300 transition-colors hover:text-white">
                Home
              </Link>
              {/* <Link href="/about" className="text-slate-300 transition-colors hover:text-white">
                About
              </Link> */}
              <Link href="/guide" className="text-slate-300 transition-colors hover:text-white">
                Guide
              </Link>
              <Link href="/example" className="text-slate-300 transition-colors hover:text-white">
                Example
              </Link>
              {/* <Link
                href="/code/template"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Code
              </Link> */}
              {/* <Link href="/portfolio" className="text-slate-300 transition-colors hover:text-white">
                Portfolio
              </Link> */}
            </nav>

            {/* Dark모드 토글 버튼 */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-slate-600 bg-slate-700 transition-colors hover:bg-slate-600"
            >
              {!mounted ? (
                <div className="h-5 w-5" />
              ) : theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
