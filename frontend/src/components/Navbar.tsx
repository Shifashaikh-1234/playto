import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  const { user, login } = useAuth();
  const users = ["john", "priya", "fatima", "Liza"];
  const selectedUser = user?.username || "";

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 items-center gap-4 max-w-screen-md mx-auto px-4">
        <Link to="/" className="font-semibold text-lg tracking-tight">
          Playto-Home
        </Link>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:inline-block">Login as</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 gap-2 px-2">
                {user ? (
                  <>
                    <span className="font-medium">{selectedUser.charAt(0).toUpperCase() + selectedUser.slice(1)}</span>
                  </>
                ) : (
                  <span className="font-medium">Select User</span>
                )}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {users.filter(u => u !== selectedUser).map((u) => (
                <DropdownMenuItem key={u} onClick={() => login(u)}>
                  {u.charAt(0).toUpperCase() + u.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
