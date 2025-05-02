import Link from "next/link";
import { imageInfoProps, imageInfo } from "@/types/imageInfo";

const BrandsImage = ({ imageInfoList }: imageInfoProps) => {
  return (
    <div>
      <ul className=" flex flex-row justify-center">
        {imageInfoList.map((info: imageInfo) => {
          return (
            <li
              className="transition-transform duration-300 hover:scale-105 hover:drop-shadow-md"
              key={info.imageId}
            >
              <Link href={info.linkTo!!}>
                <img className=" w-xs h-xs" src={info.url} alt={info.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandsImage;
