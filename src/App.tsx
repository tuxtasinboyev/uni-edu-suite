import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Groups from "./pages/Groups";
import Courses from "./pages/Courses";
import Rooms from "./pages/Rooms";
import Attendance from "./pages/Attendance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  </SidebarProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/students" element={<DashboardLayout><Students /></DashboardLayout>} />
          <Route path="/teachers" element={<DashboardLayout><Teachers /></DashboardLayout>} />
          <Route path="/groups" element={<DashboardLayout><Groups /></DashboardLayout>} />
          <Route path="/courses" element={<DashboardLayout><Courses /></DashboardLayout>} />
          <Route path="/rooms" element={<DashboardLayout><Rooms /></DashboardLayout>} />
          <Route path="/attendance" element={<DashboardLayout><Attendance /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
