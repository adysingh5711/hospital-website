"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export default function NavDock() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link py-1 text-sm font-semibold font-sans transition-all duration-200 ${
              active
                ? "text-brand-teal active"
                : "text-brand-dark/80 hover:text-brand-teal"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
