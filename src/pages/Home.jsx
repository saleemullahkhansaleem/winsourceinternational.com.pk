import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection, TruncateParagraph } from "@/components";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Gallery } from ".";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "@/redux/slices/servicesSlice";
import { fetchProducts } from "@/redux/slices/productsSlice";

export const servicesData = [
  {
    title: "Dimension Stone",
    image: "/services/dimension-stone.webp",
    path: "/services/dimension-stone-6",
    description:
      "Offers high-quality dimension stones for construction and design.",
  },
  {
    title: "Construction & Industrial Minerals",
    image: "/services/construction-industrial.webp",
    path: "/services/construction-and-industrial-minerals-5",
    description:
      "Specializes in construction and industrial minerals for various applications.",
  },
  {
    title: "Base / Metallic Minerals",
    image: "/services/base-metallic.webp",
    path: "/services/base-metallic-minerals-9",
    description:
      "Specializes in base and metallic minerals for industrial use.",
  },
  {
    title: "Fuel Minerals",
    image: "/services/fuel-minerals.webp",
    path: "/services/fuel-minerals-7",
    description: "Provides fuel minerals for energy and industrial purposes.",
  },
  {
    title: "Gemstones",
    image: "/services/gemstones.webp",
    path: "/services/gemstones-8",
    description: "Sources and supplies precious and semi-precious gemstones.",
  },
];

export const productsData = [
  {
    title: "White Marble",
    image: "/products/white-marble.webp",
    path: "/products/white-marble",
    description:
      "High-quality white marble, ideal for construction and design projects.",
  },
  {
    title: "Black Granite",
    image: "/products/black-granite.webp",
    path: "/products/black-granite",
    description:
      "Durable and elegant black granite, perfect for countertops and flooring.",
  },
  {
    title: "Quartz",
    image: "/products/quartz.webp",
    path: "/products/quartz",
    description:
      "Versatile quartz for use in countertops, tiles, and decorative applications.",
  },
  {
    title: "Feldspar",
    image: "/products/feldspar.webp",
    path: "/products/feldspar",
    description:
      "Industrial-grade feldspar, essential for glass and ceramic manufacturing.",
  },
];

export const contactData = [
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
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    content:
      "Office No. 5, Third Floor, Al-Malik Centre, 70-West, Jinnah Avenue, Blue Area, Islamabad.",
  },
];

export default function Home() {
  const dispatch = useDispatch();
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

  // useEffect(() => {
  //   fetchServices();
  //   fetchProducts();
  // }, []);

  // const fetchServices = async () => {
  //   setLoadingServices(true);
  //   api
  //     .post("services")
  //     .then((response) => {
  //       if (response.success) {
  //         // setServices(response.data);
  //         console.log("services: ", response.data);
  //         setError("");
  //       } else {
  //         setError(
  //           response.message || "There was an issue with getting services."
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setError(error?.message || "Unknown error occurred.");
  //     })
  //     .finally(() => {
  //       setLoadingServices(false);
  //     });
  // };
  // const fetchProducts = async () => {
  //   setLoadingProducts(true);
  //   api
  //     .post("products")
  //     .then((response) => {
  //       if (response.success) {
  //         // setProducts(response.data);
  //         console.log("products: ", response.data);
  //         setError("");
  //       } else {
  //         setError(
  //           response.message || "There was an issue with getting products."
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setError(error?.message || "Unknown error occurred.");
  //     })
  //     .finally(() => {
  //       setLoadingProducts(false);
  //     });
  // };
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <VideoSection /> */}
      <HeroSection services={services} />
      {/* <HighlightedEvent /> */}

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          {loadingProducts ? (
            <h2 className="text-3xl font-bold text-center py-8">Loading...</h2>
          ) : errorProducts ? (
            <h2 className="text-3xl font-bold text-center py-8">
              {errorProducts}
            </h2>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col justify-between relative"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover"
                  />
                  <CardContent className="p-4 absolute bottom-0 bg-gradient-to-t from-muted to-muted/60">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <Button
                        variant=""
                        className="ml-auto"
                        size="icon"
                        asChild
                      >
                        <Link to={"/products/" + service.slug}>
                          <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                    <TruncateParagraph
                      className="text-muted-foreground"
                      text={service.description}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          {loadingServices ? (
            <h2 className="text-3xl font-bold text-center py-8">Loading...</h2>
          ) : errorServices ? (
            <h2 className="text-3xl font-bold text-center py-8">
              {errorServices}
            </h2>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden flex flex-col justify-between relative z-0`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-muted -z-10"></div>
                  <CardContent className="flex flex-col lg:flex-row gap-4 items-center p-0 h-full">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="w-full lg:max-w-[200px] lg:h-full aspect-[3/2] lg:aspect-square object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between items-start flex-1 h-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <TruncateParagraph
                          className="text-muted-foreground mb-4"
                          text={service.description}
                        />
                      </div>
                      <Button variant="" className="self-end" asChild>
                        <Link to={"/services/" + service.slug}>
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* <LogoCarousel /> */}

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.map((item, index) => (
              <Card key={index} className="text-center relative group bg-muted">
                {item.link && (
                  <a href={item.link} className="absolute inset-0"></a>
                )}
                <CardContent className="p-6">
                  <item.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground group-hover:underline group-hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground group-hover:text-foreground">
                      {item.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
