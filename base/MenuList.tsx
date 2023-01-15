import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { RiDashboardFill, RiSendPlaneFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { Routes } from "./routes-constants";

export interface MenuListInterface {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.dashboard,
    name: "Dashboard",
    icon: <RiDashboardFill className="text-2xl" />,
  },
  {
    path: Routes.transactions,
    name: "Transactions",
    icon: <RiSendPlaneFill className="text-2xl" />,
  },
  {
    path: Routes.users,
    name: "Users",
    icon: <HiUserGroup className="text-2xl" />,
  },
  {
    path: Routes.rates,
    name: "Rates",
    icon: <GoSettings className="text-2xl" />,
  },
];
