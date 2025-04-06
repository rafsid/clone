"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    {
      title: "Use Cases",
      items: [
        { name: "Language Models", href: "/use-cases/language-models" },
        { name: "Image, Video, 3D", href: "/use-cases/image-video-3d" },
        { name: "Audio Processing", href: "/use-cases/audio" },
        { name: "Fine-Tuning", href: "/use-cases/fine-tuning" },
        { name: "Batch Processing", href: "/use-cases/job-queues" },
        { name: "Sandboxed Code", href: "/use-cases/sandboxes" },
        { name: "Computational Bio", href: "/use-cases/comp-bio" },
      ],
    },
    { title: "Pricing", href: "/pricing" },
    { title: "Customers", href: "/customers" },
    { title: "Blog", href: "/blog" },
    { title: "Docs", href: "/docs" },
    { title: "Company", href: "/company" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="flex h-8 w-8 relative">
                  <div className="w-full h-full rounded bg-primary/30 absolute animate-pulse" />
                  <div className="w-full h-full rounded bg-primary/80 absolute" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
                </div>
                <span className="ml-2 text-xl font-semibold text-foreground">Modal</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                if (link.items) {
                  return (
                    <DropdownMenu key={link.title}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="inline-flex items-center text-sm font-medium transition-colors"
                        >
                          {link.title}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-card border-border">
                        {link.items.map((item) => (
                          <DropdownMenuItem
                            key={item.name}
                            className="text-foreground hover:text-primary"
                            asChild
                          >
                            <Link href={item.href}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <Link
                    key={link.title}
                    href={link.href as string}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary">
                Log In
              </Link>
            </div>
            <Button asChild size="sm" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/signup">Sign Up</Link>
            </Button>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-card border-border">
                <div className="flex flex-col h-full py-6 px-4">
                  <div className="flex items-center mb-6">
                    <div className="flex h-8 w-8 relative">
                      <div className="w-full h-full rounded bg-primary/30 absolute animate-pulse" />
                      <div
                        className="w-full h-full rounded bg-primary/80 absolute"
                        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
                      />
                    </div>
                    <span className="ml-2 text-xl font-semibold text-foreground">Modal</span>
                  </div>

                  <nav className="flex-1 space-y-6">
                    {/* Render accordion for dropdown menu items */}
                    <div className="space-y-1">
                      {navLinks.map((link) => {
                        if (link.items) {
                          return (
                            <div key={link.title} className="border-b border-border pb-2">
                              <div className="font-medium mb-2">{link.title}</div>
                              <ul className="pl-4 space-y-2">
                                {link.items.map((item) => (
                                  <li key={item.name}>
                                    <SheetClose asChild>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                      >
                                        {item.name}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }

                        return (
                          <div key={link.title} className="border-b border-border pb-2">
                            <SheetClose asChild>
                              <Link
                                href={link.href as string}
                                className="text-sm font-medium hover:text-primary"
                              >
                                {link.title}
                              </Link>
                            </SheetClose>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4 mt-auto space-y-3">
                      <SheetClose asChild>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/login">Log In</Link>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button asChild className="w-full">
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
