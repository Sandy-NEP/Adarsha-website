import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Laptop, Palette } from "lucide-react";

const themes = [
  { name: "Default", value: "default", icon: <Palette className="mr-2 h-4 w-4" /> },
  { name: "Light", value: "light", icon: <Sun className="mr-2 h-4 w-4" /> },
  { name: "Dark", value: "dark", icon: <Moon className="mr-2 h-4 w-4" /> },
  { name: "System", value: "system", icon: <Laptop className="mr-2 h-4 w-4" /> },
  { name: "Forest", value: "forest", icon: <Palette className="mr-2 h-4 w-4" /> },
  { name: "Ocean", value: "ocean", icon: <Palette className="mr-2 h-4 w-4" /> },
  { name: "Sunset", value: "sunset", icon: <Palette className="mr-2 h-4 w-4" /> },
];

interface ThemeSwitcherProps {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setCurrentTheme }) => {
  
  const handleThemeChange = (themeValue: string) => {
    if (themeValue === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setCurrentTheme(systemPrefersDark ? "dark" : "light");
    } else {
      setCurrentTheme(themeValue);
    }
    document.documentElement.className = themeValue;
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full p-3 shadow-xl bg-gradient-to-br from-background to-muted hover:brightness-110 text-foreground focus:ring-4 focus:ring-ring">
          {currentTheme === "light" && <Sun size={24} />}
          {currentTheme === "dark" && <Moon size={24} />}
          {currentTheme !== "light" && currentTheme !== "dark" && <Palette size={24} />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border-border shadow-xl">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme.value} onClick={() => handleThemeChange(theme.value)} className="cursor-pointer hover:bg-accent focus:bg-accent">
            {theme.icon}
            <span>{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
