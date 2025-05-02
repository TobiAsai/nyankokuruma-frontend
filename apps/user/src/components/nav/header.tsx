'use client'

import Logo from "./components/logo";
import Search from "./components/search";
import Nav from "./components/nav";
import { menuInfo } from "@/types/menuInfo";

const Header = () => {
  const navList: menuInfo[] = [
    {
      mainInfo: "🐈全部商品",
      url: "/",
      mainInfoId: Math.random(),
      haveSecondary: false,
      secondaryNav: [],
    },
    {
      mainInfo: "🐈貓車周年慶",
      url: "/",
      mainInfoId: Math.random(),
      haveSecondary: true,
      secondaryNav: [
        { info: "🐈貓車折扣", infoId: Math.random(), url: "/" },
        { info: "🐈貓車新品", infoId: Math.random(), url: "/" },
        { info: "🐈貓車特色", infoId: Math.random(), url: "/" },
      ],
    },
    {
      mainInfo: "🐈吉伊卡哇",
      mainInfoId: Math.random(),
      url: "/",
      haveSecondary: true,
      secondaryNav: [
        { info: "🐈最新到貨", infoId: Math.random(), url: "/" },
        { info: "🐈人氣推薦", infoId: Math.random(), url: "/" },
      ],
    },
    {
      mainInfo: "🐈貓車福箱",
      mainInfoId: Math.random(),
      url: "/",
      haveSecondary: true,
      secondaryNav: [{ info: "🐈福箱專區", infoId: Math.random(), url: "/" }],
    },
    {
      mainInfo: "🐈個人中心",
      mainInfoId: Math.random(),
      url: "/",
      haveSecondary: true,
      secondaryNav: [
        { info: "🐈帳號登入", infoId: Math.random(), url: "/" },
        { info: "🐈帳號註冊", infoId: Math.random(), url: "/" },
      ],
    },
  ];

  return (
    <>
      <header
        className=" 
      bg-[#e4dab8] 
      text-base font-sans 
      font-semibold 
      flex flex-col items-center 
      rounded-t-2xl 
      w-full h-full px-10 
      lg:flex-row lg:justify-between lg:h-full"
      >
        <Logo />
        <Search />
        <ul className=" flex flex-col lg:flex-row ">
          {navList.map((nav, index) => {
            return <Nav key={index} menuInfo={nav} />;
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;
