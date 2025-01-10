import {
    FileSliders,
    Home,
    LayoutDashboard,
    TruckIcon,
    UtilityPole,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar";

import { NavLink } from "react-router-dom";

import "./SideNav.css";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Locuinte",
        url: "/locuinte",
        icon: Home,
    },
    {
        title: "Contori Electrici",
        url: "/contori-electrici",
        icon: UtilityPole,
    },
    {
        title: "Vizualizare Sisteme",
        url: "/vizualizare-sisteme",
        icon: FileSliders,
    },
    {
        title: "Flota",
        icon: TruckIcon,
    },
    {
        title: "Fosti Angajati",
        url: "/fosti-angajati",
        icon: FileSliders,
    },
];

export default function SideNav() {
    return (
        <Sidebar collapsible="icon" className="bg-sidebar text-sidebar-foreground">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sidebar-foreground font-bold">
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <li
                                    key={item.title}
                                    className={`group/menu-item relative flex items-center w-full p-2 rounded-md transition ${
                                        item.url === window.location.pathname
                                            ? "bg-black text-white font-bold"
                                            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    }`}
                                >
                                    {item.url ? (
                                        <NavLink
                                            to={item.url}
                                            className="flex items-center w-full"
                                        >
                                            <item.icon size={16} className="mr-2" />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    ) : (
                                        <div className="flex items-center w-full">
                                            <item.icon size={16} className="mr-2" />
                                            <span>{item.title}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
