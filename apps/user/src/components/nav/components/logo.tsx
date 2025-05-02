import Link from "next/link";

const Logo = () => {
  return (
    <div className="hover:bg-[#e0d09c] h-20 flex items-center">
      <Link href="/">
        <img src="https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/VueHomework/images/nyankokuruma-icon.png" />
      </Link>
    </div>
  );
};

export default Logo;
