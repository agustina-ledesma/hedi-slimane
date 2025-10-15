"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";
import { housesMap } from "@/utils/housesMap";

import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["THE ICON", "FASHION GALLERY", "BOOKS"];

 /*  const links = [
    {
      title: "Yves Saint Laurent",
      link: "yves-saint-laurent",
    },
    {
      title: "Dior Homme",
      link: "dior",
    },
    {
      title: "Saint Laurent",
      link: "saint-laurent",
    },
    {
      title: "Celine",
      link: "celine",
    },
  ]; */

  return (
    <>
      <nav className="w-full relative z-40 border-b-1 border-black text-sm">
        {/* ===== MOBILE HEADER: toggle (left) + centered logo ===== */}
        <div className="sm:hidden relative w-full h-14 flex items-center">
          {/* Toggle (left) */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="ml-3 z-30 p-2 rounded-md inline-flex items-center justify-center"
          >
            {/* simple hamburger / X icons */}
            {!open ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Centered logo (mobile only). Absolute so it's visually centered across the viewport */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-6">
            <Link href="/" className="text-md">
              HEDI SLIMANE
            </Link>
          </div>
        </div>

        {/* ===== MOBILE MENU (dropdown under header) ===== */}
        {open && (
          <nav className="sm:hidden bg-white border-t flex justify-start shadow-md w-full z-20">
            <ul className="flex flex-col p-4 gap-2 text-left w-full">
              <li>
                <Link href="/" className="block py-2 px-3">
                  THE ICON
                </Link>
              </li>

              {/* Dropdown dentro del flujo */}
              <li className="w-full">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center justify-between uppercase bg-transparent px-3 py-2 w-full text-left"
                >
                  <span>FASHION GALLERY</span>
                  <IconChevronDown
                    stroke={2}
                    size={16}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenú dentro del flujo */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1 mt-1 pl-4">
                    <li>
                      <Link
                        href="/fashion"
                        className="block py-2 px-3 uppercase"
                        onClick={() => setIsOpen(false)}
                      >
                        ALL HOUSES
                      </Link>
                    </li>
                    {housesMap.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/fashion/collection/${item.slug}`}
                          className="block py-2 px-3 uppercase"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/#books" className="block py-2 px-3">
                  BOOKS
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* ===== DESKTOP: two halves that span full width =====
          - hidden on mobile, shown from sm (>=640px)
          - we use grid-cols-2 so each half is exactly 50% of the navbar width
      */}
        <div className="hidden sm:grid grid-cols-2 w-full">
          {/* LEFT half */}
          <div className="col-span-1">
            <div className="h-14 flex items-center pl-6">
              {/* left-aligned brand */}
              <Link href="/" className="">
                HEDI SLIMANE
              </Link>
            </div>
          </div>

          {/* RIGHT half */}
          <div className="col-span-1 w-full pe-2">
            <div className="h-14 flex items-center justify-end">
              <div className="flex justify-center md:mx-6 items-center gap-0 lg:gap-6">
                <Link href="/" className="text-black">
                  THE ICON
                </Link>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="bg-transparent"
                      endContent={<IconChevronDown stroke={2} size={16} />}
                    >
                      FASHION GALLERY
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Actions">
                    <>
                      <DropdownItem key="all houses" textValue="all houses">
                        <Link href="/fashion" className="uppercase">
                          ALL HOUSES
                        </Link>
                      </DropdownItem>
                      {housesMap.map((item, index) => (
                        <DropdownItem key={index} textValue={item.name}>
                          <Link
                            href={`/fashion/collection/${item.slug}`}
                            className="uppercase"
                          >
                            {item.name}
                          </Link>
                        </DropdownItem>
                      ))}
                    </>
                  </DropdownMenu>
                </Dropdown>
                <Link href="/#books" className="text-black">
                  BOOKS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
