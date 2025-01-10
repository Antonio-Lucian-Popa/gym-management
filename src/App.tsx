import "./App.css";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "@/features/components/sidenav/SideNav.tsx";
import Dashboard from "@/features/components/dashboard/Dashboard.tsx";

function App() {
  return (
      <Router>
        <SidebarProvider>
          <div className="flex w-full">
            <SideNav />
            <main className="flex flex-col w-full px-3">
              <div className="flex justify-between items-center py-4">
                <SidebarTrigger />
                <DropdownMenu>
                  {/* Trigger-ul pentru Dropdown */}
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2">
                      <span>Buna, nume user</span>
                      <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </DropdownMenuTrigger>

                  {/* Conținutul Dropdown */}
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a
                          href="#"
                          className="block"
                      >
                        Settings
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a
                          href="#"
                          className="block"
                      >
                        Logout
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/locuinte" element={<Dashboard />} />
                <Route path="/contori-electrici" element={<Dashboard />} />
                <Route path="/vizualizare-sisteme" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </Router>
  );
}

export default App;