import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeToggle } from ".";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="bg-background/70 text-foreground sticky top-0 shadow-md z-20 backdrop-blur">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-foreground py-1">
          <Link to="/" className="flex items-end gap-2">
            <img
              src="/ws-logo.svg"
              alt="logo"
              height={100}
              className="h-12 md:h-16"
            />{" "}
            <div className="flex flex-col items-end">
              <span className="text-base md:text-2xl font-bold uppercase">
                Win Source International
              </span>{" "}
              <span className="text-sm md:text-base font-semibold">
                (Private) Limited
              </span>
            </div>
          </Link>
        </div>

        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
