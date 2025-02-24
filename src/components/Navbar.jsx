import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavbarMobile } from ".";
import { navigation } from "@/data";



export default function Navbar() {

  return (
    <>
      <NavbarMobile navigation={navigation} />
      <div className="hidden xl:flex ">
        {navigation.map((item, index) => (
          <div className="group relative" key={index}>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer px-3 h-full flex items-center hover:text-primary border-b-2 ${
                  isActive
                    ? "text-primary border-primary bg-primary/10"
                    : "text-foreground border-transparent"
                }`
              }
              onClick={(e) => {
                item?.subItems && e.preventDefault();
              }}
              to={item.href}
            >
              <div className="flex items-center gap-1">
                {item.name}{" "}
                {item?.subItems && <MdKeyboardArrowDown size={20} />}
              </div>
            </NavLink>
            {item?.subItems && (
              <div className="absolute top-full left-0 py-4 hidden group-hover:flex flex-col bg-background shadow-lg text-nowrap min-w-60">
                {item?.subItems?.map((subItem, ind) => (
                  <div className="relative group/sub" key={ind}>
                    <NavLink
                      to={subItem.href}
                      className={({ isActive }) =>
                        `px-4 py-2 text-foreground hover:text-primary ${
                          ind !== item.subItems.length - 1 && "border-b"
                        } border-foreground/5 flex items-center justify-between ${
                          isActive
                            ? "text-primary bg-primary/5"
                            : "text-foreground"
                        }`
                      }
                    >
                      {subItem.name}{" "}
                      {subItem?.subItems && <MdKeyboardArrowRight size={20} />}
                    </NavLink>
                    {subItem?.subItems && (
                      <div
                        className={`absolute right-full top-0 hidden group-hover/sub:flex flex-col bg-background shadow-lg`}
                      >
                        {subItem?.subItems?.map((sub, i) => (
                          <div
                            className={({ isActive }) =>
                              `cursor-pointer px-4 py-2 text-foreground hover:text-primary ${
                                i !== subItem?.subItems?.length - 1 &&
                                "border-b"
                              } border-foreground/5 ${
                                isActive
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground"
                              }`
                            }
                            key={i}
                          >
                            <NavLink to={sub.href}>{sub.name}</NavLink>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
