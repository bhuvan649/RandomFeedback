'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';
import {ModeToggle} from '@/components/ThemeToggler'
function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md dark:border-border/20">
  <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
    {/* Left side (Logo) */}
    <a
      href="#"
      className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
    >
      Random Feedback
    </a>

    {/* Right side (User actions + ModeToggle) */}
    <div className="flex items-center gap-4">
      {session ? (
        <>
          <span className="hidden sm:inline text-sm md:text-base text-muted-foreground">
            Welcome, {user.username || user.email}
          </span>
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-xl bg-transparent text-foreground border border-border shadow-sm hover:bg-transparent hover:text-foreground transition cursor-pointer"
          >
            Logout
          </Button>

        </>
      ) : (
        <Link href="/sign-in">
          <Button className="rounded-xl bg-transparent text-foreground border border-border shadow-sm hover:bg-transparent hover:text-foreground transition cursor-pointer">
            Login
          </Button>
        </Link>
      )}

      {/* ModeToggle */}
      <ModeToggle  />
    </div>
  </div>
</nav>

  );
}

export default Navbar;