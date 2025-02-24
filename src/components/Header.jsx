import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeToggle } from ".";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <>
      <div className="w-full py-1 px-4 bg-muted text-foreground border-b border-muted-foreground dark">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            Third Floor, Al-Malik Centre, 70-West, Jinnah Avenue, Blue Area,
            Islamabad.
          </p>
          <div className="flex gap-4">
            {[
              {
                icon: FaPhoneAlt,
                title: "Call Us",
                content: "+92 051 8739888",
                link: "tel:+920518739888",
              },
              {
                icon: FaEnvelope,
                title: "Mail Us",
                content: "info@winsourceinternational.com.pk",
                link: "mailto:info@winsourceinternational.com.pk",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Link
                  to={item.link}
                  title={item.title}
                  className="hover:text-primary"
                >
                  <item.icon />
                </Link>
                {index === 0 && (
                  <span className="ml-4 text-sm font-thin">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="bg-background/70 text-foreground sticky top-0 shadow-md z-30 backdrop-blur">
        <div className="container mx-auto flex justify-between px-4">
          <div className="text-foreground py-1">
            <Link to="/" className="flex items-end gap-2">
              <img
                src="/images/ws-logo.svg"
                alt="logo"
                height={100}
                className="h-10 md:h-14 dark:hidden"
              />{" "}
              <img
                src="/images/ws-logo-light.svg"
                alt="logo"
                height={100}
                className="h-10 md:h-14 hidden dark:block"
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
    </>
  );
};

export default Header;
