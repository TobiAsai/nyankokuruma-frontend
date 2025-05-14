interface imageInfo {
  url: string;
  title: string;
  imageId: number;
  linkTo?: string;
}

interface imageInfoProps {
  imageInfoList: imageInfo[];
}

export type { imageInfo, imageInfoProps };
