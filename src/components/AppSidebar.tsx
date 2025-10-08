import { LayoutDashboard, Users, UserCog, UsersRound, BookOpen, DoorOpen, ClipboardCheck, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "O'quvchilar", url: "/students", icon: Users },
  { title: "O'qituvchilar", url: "/teachers", icon: UserCog },
  { title: "Guruhlar", url: "/groups", icon: UsersRound },
  { title: "Kurslar", url: "/courses", icon: BookOpen },
  { title: "Xonalar", url: "/rooms", icon: DoorOpen },
  { title: "Yo'qlama", url: "/attendance", icon: ClipboardCheck },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-sm">CRM</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">O'quv Markazi</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Asosiy</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Chiqish</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
