'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils.ts";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active,setActive] = useState <string | null>(null)
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    <Menu setActive={setActive}>
     <Link href={'/'}>
     <MenuItem active={active} setActive={setActive} item="Home">
     
     </MenuItem>
     </Link>

     <Link href={'/courses'}>
     <MenuItem active={active} setActive={setActive} item="All Courses">
     <div className="flex flex-col space-y-4 text-sm">
     <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
          </div>
     </MenuItem>
     </Link>

     <Link href={'/contact'}>
     <MenuItem active={active} setActive={setActive} item="Contact Us">
     
     </MenuItem>
     </Link>
    </Menu>
    </div>
  )
}

export default Navbar;