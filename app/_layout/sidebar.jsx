"use client";

import ArrowDown from "@/public/icons/arrowDown";
import BarIcon from "@/public/icons/bar";
import BlockIcon from "@/public/icons/block";
import Blueprint from "@/public/icons/bluePrint";
import Cms from "@/public/icons/cms";
import Cogs from "@/public/icons/cogs";
import FormsIcon from "@/public/icons/forms";
import Global from "@/public/icons/global";
import Globe from "@/public/icons/globe";
import Home from "@/public/icons/home";
import PageIcon from "@/public/icons/page";
import Sheet from "@/public/icons/sheet";
import TagIcon from "@/public/icons/tag";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    {
      name: "Cms",
      icon: <Cms className="size-5" />,
      submenu: [
        {
          name: "Blocks",
          icon: <BlockIcon className="size-4" />,
          link: "/blocks",
        },
        {
          name: "Blueprints",
          icon: <Blueprint className="size-4" />,
          link: "/blueprints",
        },
        {
          name: "Content",
          icon: <Sheet className="size-4" />,
          link: "/content",
        },
        {
          name: "Forms",
          icon: <FormsIcon className="size-4" />,
          link: "/forms",
        },
        {
          name: "Menus",
          icon: <BarIcon className="size-4" />,
          link: "/menus",
        },
        {
          name: "Pages",
          icon: <PageIcon className="size-4" />,
          link: "/pages",
        },
        {
          name: "Sites",
          icon: <Globe className="size-4" />,
          link: "/sites",
        },
        {
          name: "Taxonomies",
          icon: <TagIcon className="size-4" />,
          link: "/taxonomies",
        },
        {
          name: "Globals",
          icon: <Global className="size-4" />,
          link: "/globals",
        },
      ],
    },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <section
      className="absolute top-0 bottom-0 w-[350px] border-r border-gray-200 shadow-lg"
      id="sidebar"
    >
      <div className="flex items-center gap-4 p-6">
        <span id="logo">
          <Image
            src={"/favicon.ico"}
            alt="Rapid Edit Logo"
            width={32}
            height={35}
            className="object-cover"
          />
        </span>
        <h1 className="tracking-widest">
          <strong>Rapid Edit</strong>
        </h1>
      </div>
      <div className="flex flex-col">
        {/* Static Main Menu Items */}
        <Link
          href="/"
          className="flex items-center gap-4 px-6 py-6 hover:bg-gray-100 text-sm justify-between"
        >
          <div className="flex items-center gap-4">
            <Home className="size-5" />
            <span>Dashboard</span>
          </div>
        </Link>

        <div>
          <Link
            href="#"
            className="flex items-center gap-4 px-6 py-6 hover:bg-gray-100 text-sm justify-between pointer"
            onClick={() => toggleSubmenu(0)}
          >
            <div className="flex items-center gap-4">
              <Cms className="size-5" />
              <span>Cms</span>
            </div>
            <span>
              <ArrowDown
                className={`size-4 transition-transform duration-300 ease-in-out ${
                  activeSubmenu === 0 ? "rotate-0" : "rotate-180"
                }`}
              />
            </span>
          </Link>

          {/* Submenu Items for Cms */}
          {activeSubmenu === 0 && (
            <div className="ml-8">
              {menuItems[0].submenu.map((submenuItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={submenuItem.link || "#"}
                  className="flex items-center gap-4 px-6 py-2 hover:bg-gray-100 text-sm"
                >
                  <div>{submenuItem.icon}</div>
                  <span>{submenuItem.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/settings"
          className="flex items-center gap-4 px-6 py-6 hover:bg-gray-100 text-sm justify-between"
        >
          <div className="flex items-center gap-4">
            <Cogs className="size-4" />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
