import { services } from "@/pages/Home";
import { Link } from "react-router-dom";
import { navigation } from "./Navbar";
import { BackToTopButton, ThemeToggle } from ".";

export default function Footer({ setDarkMode, darkMode }) {
  return (
    <footer className="bg-muted pt-12 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="text-foreground mb-8 border-b border-white/5 pb-4">
              <Link to="/" className="flex flex-col items-center">
                <img
                  src="/ws-logo-light.svg"
                  alt="logo"
                  height={100}
                  className="h-14 md:h-20"
                />{" "}
                <div className="text-center uppercase">
                  <p className="text-lg md:text-3xl font-bold text-nowrap">
                    Win Source International
                  </p>{" "}
                  <p className="text-sm md:text-base text-primary tracking-widest">
                    We bring the mountains to your doorsteps
                  </p>
                  {/* <span className="text-sm md:text-base font-semibold">
                    (Private) Limited
                  </span> */}
                </div>
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Win Source International provides high-quality, sustainable
              mineral resources globally. We are committed to reliability and
              excellence in service. Discover premium mineral solutions with us.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {navigation[2]?.subItems?.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {navigation[3]?.subItems?.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <BackToTopButton />
        <div className="mt-8 p-2 border-t border-muted-foreground/20 flex justify-between items-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Win Source International (Private)
            Limited - All rights reserved.
          </p>
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </footer>
  );
}
