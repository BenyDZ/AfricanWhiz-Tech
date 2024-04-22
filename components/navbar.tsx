"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar_mobile from "./navbar_mobile";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if(window.scrollY >=20){
      setHeader(true)
    }
    else{
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return() => {
      window.addEventListener('scroll', scrollHeader)
    }
  })
  return (
    <nav className={header ? "fixed top-0 z-50 bg-white shadow-md w-full px-10 pt-3 lg:px-32":"w-full px-10 pt-3 lg:px-32 bg-white"}>
      <div className="flex flex-row justify-between border-b-2 pb-1 border-primary ">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/logo.png"
            alt="AfricanWhiz-Tech logo"
            width={32}
            height={32}
            className="max-sm:size-15"
          />
        </Link>
        <div className="flex flex-row items-center">
          <div className="flex flex-row gap-2 md:gap-0.5 w-full">
            {sidebarLinks.map((link) => {
              const isAcive =
                pathname === link.route ||
                pathname.startsWith("${link.route}/");
              if (link == sidebarLinks[sidebarLinks.length - 1]) {
                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "p-3 whitespace-nowrap hidden md:block bg-primary/70 rounded-lg px-8 border-none shadow-sm hover:bg-primary focus:ring-4 ring-primary focus:outline-2 outline-transparent active:bg-primary/90 font-bold"
                    )}
                  >
                    <p className="text-sm font-bold hidden md:block md:text-xs">
                      {link.label}
                    </p>
                  </Link>
                );
              } else {
                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "p-3 hover:text-primary whitespace-nowrap hidden md:block",
                      {
                        "text-primary": isAcive,
                      }
                    )}
                  >
                    <p className="text-sm font-normal hidden md:block md:text-xs">
                      {link.label}
                    </p>
                  </Link>
                );
              }
            })}
          </div>
          <Navbar_mobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
