import Bell from "@/public/icons/bell";
import Magnify from "@/public/icons/magnify";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full p-6 flex justify-end items-center border-b border-gray-200">
      <div className="flex gap-x-[12px] items-center">
        <span className="border border-gray-200 flex items-center px-2">
          <Magnify className={`size-4 pointer`} />
          <input
            type="search"
            name=""
            id=""
            className="p-2 focus:outline-none w-[300px]"
          />
        </span>
        <span id="notification">
          <Bell className={`size-6 pointer`} />
        </span>
        <span id="profile" className=" rounded-full bg-gray-200 py-2 px-3">
          <Image
            src={"/favicon.ico"}
            alt="Profile"
            width={20}
            height={25}
            className=""
          />
        </span>
      </div>
    </header>
  );
}
