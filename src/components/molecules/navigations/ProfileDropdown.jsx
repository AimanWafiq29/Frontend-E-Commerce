import React from "react";
import IconButton from "../../atoms/buttons/IconButton";
import ProfileIcon from "../../../assets/profile_icon.png";

const ProfileDropdown = () => {
  return (
    <div className="group relative">
      <IconButton icon={ProfileIcon} alt="Profile" />
      <div className="group-hover:block hidden absolute right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <p className="cursor-pointer hover:text-black">Orders</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
