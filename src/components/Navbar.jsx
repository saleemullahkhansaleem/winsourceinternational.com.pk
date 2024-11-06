import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavbarMobile } from ".";

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "What We Do",
    href: "#",
    subItems: [
      {
        name: "Launching Ceremony of the Edge Mall - Faisalabad",
        href: "/edge-mall-ceremony",
      },
      {
        name: "Event Management",
        href: "/services/event-management",
        subItems: [
          {
            name: "International Symposiums",
            href: "/services/event-management#symposiums",
          },
          {
            name: "International Conferences",
            href: "/services/event-management#conferences",
          },
          {
            name: "International Seminars",
            href: "/services/event-management#seminars",
          },
          {
            name: "Launching Ceremony",
            href: "/services/event-management#launching-ceremony",
          },
          {
            name: "Trainings/Workshops",
            href: "/services/event-management#trainings-workshops",
          },
        ],
      },
      { name: "Vendor Services", href: "/services/vendor-services" },
      {
        name: "Presence in Oil & Gas Sector",
        href: "/services/oil-gas-sector",
      },
      {
        name: "Branding & Advertising",
        href: "/services/branding-advertising",
      },
      {
        name: "Facility Management Services",
        href: "/services/facility-management",
      },
      { name: "Construction", href: "/services/construction" },
      { name: "Property Advisors", href: "/services/property-advisors" },
      {
        name: "Mines & Minerals",
        href: "/services/mines-minerals",
        subItems: [
          {
            name: "Construction And Industrial Minerals Group",
            href: "/services/mines-minerals#construction-industrial",
          },
          {
            name: "Dimension Stone",
            href: "/services/mines-minerals#dimension-stone",
          },
          {
            name: "Fuel Minerals",
            href: "/services/mines-minerals#fuel-minerals",
          },
          { name: "Gemstones", href: "/services/mines-minerals#gemstones" },
          {
            name: "Base/ Metallic Minerals Group",
            href: "/services/mines-minerals#base-metallic",
          },
        ],
      },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <>
      <NavbarMobile navigation={navigation} />
      <div className="hidden lg:flex">
        {navigation.map((item, index) =>
          !item?.subItems ? (
            <Link
              className="cursor-pointer px-4 h-full flex items-center hover:text-primary"
              to={item.href}
            >
              {item.name}
            </Link>
          ) : (
            <div
              className="group cursor-default relative px-4 h-full flex items-center hover:text-primary"
              key={index}
            >
              <div className="flex items-center gap-1">
                {item.name} <MdKeyboardArrowDown size={20} />
              </div>
              <div className="absolute top-full left-0 py-4 hidden group-hover:flex flex-col bg-background shadow-lg text-nowrap">
                {item?.subItems?.map((subItem, ind) => (
                  <Link
                    key={ind}
                    to={subItem.href}
                    className={`relative group/sub px-4 py-2 text-foreground hover:text-primary border-b border-primary flex items-center justify-between`}
                  >
                    {subItem.name}{" "}
                    {subItem.subItems && <MdKeyboardArrowRight size={20} />}
                    <div
                      className={`absolute right-full top-0 hidden group-hover/sub:flex flex-col bg-background shadow-lg`}
                    >
                      {subItem?.subItems?.map((sub, i) => (
                        <div
                          className="cursor-pointer px-4 py-2 text-foreground hover:text-primary"
                          key={i}
                        >
                          <Link to={sub.href}>{sub.name}</Link>
                        </div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
