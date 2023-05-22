import React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";
interface SidebarItemsProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItems: React.FC<SidebarItemsProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="lg:hidden w-14 h-14 rounded-full relative items-center justify-center p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
        <Icon size={20} color="white" />
      </div>
      <div className="hidden lg:flex relative items-center rounded-full hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer py-4 gap-4">
        <Icon size={16} color="white"/>
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItems;
