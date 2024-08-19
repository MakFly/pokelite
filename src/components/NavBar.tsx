import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { BarChart, Menu, Users, Bell, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Sidebar = () => (
  <nav className="flex flex-col space-y-2 p-4">
    <Button variant="ghost" className="justify-start">
      <Users className="mr-2 h-4 w-4" />
      Utilisateurs
    </Button>
    <Button variant="ghost" className="justify-start">
      <BarChart className="mr-2 h-4 w-4" />
      Annonces
    </Button>
  </nav>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Navigation du dashboard</SheetDescription>
      </SheetHeader>
      <Sidebar />
    </SheetContent>
  </Sheet>
);

const Navbar = () => (
  <header className="border-b">
    <div className="flex h-16 items-center px-4">
      <div className="flex items-center space-x-4">
        <MobileSidebar />
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <User className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Profil
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Gérez votre profil et vos préférences.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Input
          className="w-64 hidden md:inline-flex"
          placeholder="Rechercher..."
        />
        <Button size="icon" variant="ghost">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="hidden md:inline-flex">
          Déconnexion
        </Button>
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default Navbar;
