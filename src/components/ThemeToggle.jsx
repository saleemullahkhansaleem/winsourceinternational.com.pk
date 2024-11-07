import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ setDarkMode, darkMode }) {
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="ml-auto self-center md:mr-4"
    >
      {darkMode ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
