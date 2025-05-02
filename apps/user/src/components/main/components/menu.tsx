'use client'

import { useState } from "react";
import { menuProps } from "@/types/menuInfo";

const Menu = ({ menuInfo }: menuProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <li
      className="relative h-full bg-[#f4f4f4] font-extrabold text-base overflow-hidden"
      onMouseEnter={() => setIsMenuVisible(true)}
      onMouseLeave={() => setIsMenuVisible(false)}
    >
      <div className="h-15 border-b flex items-center">{menuInfo.mainInfo}</div>
      <ul className={`bg-white shadow-md rounded-md overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${isMenuVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
        {menuInfo.haveSecondary &&
          isMenuVisible &&
          menuInfo.secondaryNav.map(({ info, url, infoId }) => {
            return (
              <li
                className="px-3 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-200 transition-all duration-300 ease-in-out last:border-b-0 hover:bg-gray-50 hover:pl-5 hover:text-blue-600"
                key={infoId}
              >
                <a href={url}>{info}</a>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default Menu;
