import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavbarMobile } from ".";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const navigationData = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Our Products",
    href: "products",
    subItems: [
      { name: "White Marble", href: "/products/white-marble-1" },
      { name: "Black Granite", href: "/products/black-granite-2" },
      { name: "Quartz", href: "/products/quartz-3" },
      { name: "Feldspar", href: "/products/feldspar-4" },
    ],
  },
  {
    name: "Our Services",
    href: "services",
    subItems: [
      {
        name: "Dimension Stone",
        href: "/services/dimension-stone-1",
      },
      {
        name: "Construction And Industrial Minerals",
        href: "/services/construction-industrial-2",
      },
      {
        name: "Base / Metallic Minerals",
        href: "/services/base-metallic-20",
      },
      {
        name: "Fuel Minerals",
        href: "/services/fuel-minerals-4",
      },
      { name: "Gemstones", href: "/services/gemstones-5" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [navigation, setNavigation] = useState(navigationData);

  const {
    data: services,
    loading: loadingServices,
    error: errorServices,
  } = useSelector((state) => state.services);

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (!loadingProducts && products) {
      const productItems = products.map((product) => ({
        name: product.title,
        href: `/products/${product.slug}`,
      }));

      setNavigation((prev) => {
        const updatedNavigation = [...prev];
        const productIndex = updatedNavigation.findIndex(
          (item) => item.name === "Our Products"
        );

        if (productIndex !== -1) {
          updatedNavigation[productIndex].subItems = productItems;
        }

        return updatedNavigation;
      });
    }

    if (!loadingServices && services) {
      const serviceItems = services.map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      }));

      setNavigation((prev) => {
        const updatedNavigation = [...prev];
        const serviceIndex = updatedNavigation.findIndex(
          (item) => item.name === "Our Services"
        );

        if (serviceIndex !== -1) {
          updatedNavigation[serviceIndex].subItems = serviceItems;
        }

        return updatedNavigation;
      });
    }
  }, [products, services, loadingProducts, loadingServices]);

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
