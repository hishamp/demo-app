"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [{ href: "/calculate", label: "Calculations" }];

const adminLinks: NavLink[] = [{ href: "/users", label: "users" }];

const NavLinks = ({ isAdmin }: { isAdmin: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {links.map((item) => (
        <Link
          className={cn(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            pathname === item.href && "bg-sky-100 text-blue-600"
          )}
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
      {isAdmin &&
        adminLinks.map((item) => (
          <Link
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              pathname.startsWith(item.href) && "bg-sky-100 text-blue-600"
            )}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
    </>
  );
};

export default NavLinks;
