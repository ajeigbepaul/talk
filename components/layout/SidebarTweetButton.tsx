import { useRouter } from "next/router";
import {FaFeather} from "react-icons/fa"
const SidebarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center cursor-pointer transition hover:bg-opacity-10 bg-orange-400">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden rounded-full px-4 py-2 lg:block cursor-pointer transition hover:bg-opacity-90 bg-orange-400">
        <p className="hidden lg:block text-center font-semibold text-white text-xl">
          Talk!!!
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
