interface imageInfo {
  url: string;
  title: string;
  imageId: number;
  linkTo: string | null;
}

interface imageInfoProps {
  imageInfoList: imageInfo[];
}

export type { imageInfo, imageInfoProps };
