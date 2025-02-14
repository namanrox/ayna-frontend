import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Logout from "./logout";
import useLocalStorage from "@/hooks/localStorageHook";

export default function Navbar() {
    const [user, setUser, clearUser] = useLocalStorage('user', '');
    return (
        <div className="flex flex-row justify-between items-center w-full bg-[#1D96AD] px- py-2">
            <Logout />
            <span className="text-white font-semibold mr-1">@{user.username}</span>
        </div>
    );
}
