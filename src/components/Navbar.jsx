"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4 py-5 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <div className="flex h-16 items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">Game</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {/* Menu Items */}
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/jobs"
                  className="text-xs font-medium text-gray-300 hover:text-white transition"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/companies"
                  className="text-xs font-medium text-gray-300 hover:text-white transition"
                >
                  Company
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-xs font-medium text-gray-300 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Separator */}
            <div className="h-5 w-px bg-white/20" />

            {/* Sign In */}
            {user ? (
              <>
                Hi, {user.name} !
                <Button onClick={handleSignOut} varient="ghost">
                  SignOut
                </Button>
              </>
            ) : (
              <Link href="/auth/signin" className="text-center text-violet-400">
                Sign In
              </Link>
            )}

            {/* CTA */}
            <Link
              href="/auth/signup"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 lg:hidden cursor-pointer"
          >
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-white/10 lg:hidden">
            <div className="flex flex-col px-5 py-4">
              <Link
                href="/jobs"
                className="py-3 text-sm text-gray-300 hover:text-white"
              >
                Browse Jobs
              </Link>

              <Link
                href="/companies"
                className="py-3 text-sm text-gray-300 hover:text-white"
              >
                Company
              </Link>

              <Link
                href="/pricing"
                className="py-3 text-sm text-gray-300 hover:text-white"
              >
                Pricing
              </Link>

              <div className="mt-4 flex flex-col gap-3">
                {user ? (
                  <>
                    Hi, {user.name} !
                    <Button onClick={handleSignOut} varient="ghost">
                      SignOut
                    </Button>
                  </>
                ) : (
                  <Link
                    href="/auth/signin"
                    className="text-center text-violet-400"
                  >
                    Sign In
                  </Link>
                )}

                <Link
                  href="/auth/signup"
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 py-3 text-center text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
