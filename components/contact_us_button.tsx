import React from 'react'
import { sidebarLinks } from "@/constants";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Contact_us_button = () => {
    const link = sidebarLinks[sidebarLinks.length - 1];
  return (
    <Link
        href={link.route}
        key={link.label}
        >
        <p className="text-sm text-center font-bold md:text-xs whitespace-nowrap bg-primary/70 rounded-lg   px-6 py-3 border-none shadow-sm hover:bg-primary focus:ring-4 ring-primary focus:outline-2 outline-transparent active:bg-primary/90 max-w-[200px]">
            {link.label}
        </p>
    </Link>
  )
}

export default Contact_us_button