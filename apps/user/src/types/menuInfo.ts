interface secondaryMenu {
  info: string;
  infoId: number;
  url: string;
}

interface menuInfo {
  mainInfo: string;
  mainInfoId: number;
  url: string;
  haveSecondary: boolean;
  secondaryNav: secondaryMenu[];
}

interface menuProps {
  menuInfo: menuInfo;
}

export type { menuInfo, menuProps, secondaryMenu };
