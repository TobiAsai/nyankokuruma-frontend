'use client'

import { useState } from "react";
import { menuProps } from "@/types/menuInfo";
import Link from "next/link"

const Nav = ({ menuInfo }: menuProps) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="hover:bg-[#e0d09c] h-20 flex items-center px-4" onMouseEnter={() => setIsMenuVisible(true)} onMouseLeave={() => setIsMenuVisible(false)}>
      <Link href={menuInfo.url} className="mr-10 hover:bg-[#e0d09c]">
        {menuInfo.mainInfo}
      </Link>
      <ul className={`bg-white shadow-md rounded-md overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${isMenuVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
                      lg:absolute lg:top-20 z-100`}>
        {menuInfo.haveSecondary && isMenuVisible &&
          menuInfo.secondaryNav.map(({ info, url, infoId }) => {
            return (
                <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-40" key={infoId}>
                  <Link href={url}>{info}</Link>
                </li> 
            );
          })}
      </ul>
    </div>
  );
};

export default Nav;
