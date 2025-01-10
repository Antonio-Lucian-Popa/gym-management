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
    SidebarMenuButton,
    SidebarMenuItem,
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
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton>
                                        {item.url ? (
                                            <NavLink
                                                to={item.url}
                                                className={({ isActive }) =>
                                                    `flex items-center w-full ${
                                                        isActive ? "text-primary font-bold" : ""
                                                    }`
                                                }
                                            >
                                                <div className="flex items-center w-full">
                                                    <item.icon size={16} className="mr-2" />
                                                    <span>{item.title}</span>
                                                </div>
                                            </NavLink>
                                        ) : (
                                            <div className="flex items-center w-full">
                                                <item.icon size={16} className="mr-2" />
                                                <span>{item.title}</span>
                                            </div>
                                        )}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
