import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Gallery } from ".";

export const services = [
  {
    title: "Construction And Industrial Minerals Group",
    image: "/services/construction-industrial.webp",
    path: "/services/construction-industrial",
    description:
      "Specializes in construction and industrial minerals for various applications.",
  },
  {
    title: "Dimension Stone",
    image: "/services/dimension-stone.webp",
    path: "/services/dimension-stone",
    description:
      "Offers high-quality dimension stones for construction and design.",
  },
  {
    title: "Fuel Minerals",
    image: "/services/fuel-minerals.webp",
    path: "/services/fuel-minerals",
    description: "Provides fuel minerals for energy and industrial purposes.",
  },
  {
    title: "Gemstones",
    image: "/services/gemstones.webp",
    path: "/services/gemstones",
    description: "Sources and supplies precious and semi-precious gemstones.",
  },
  {
    title: "Base/ Metallic Minerals Group",
    image: "/services/base-metallic.webp",
    path: "/services/base-metallic-minerals",
    description:
      "Specializes in base and metallic minerals for industrial use.",
  },
];

export const products = [
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <VideoSection /> */}
      <HeroSection />
      {/* <HighlightedEvent /> */}

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col justify-between relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
                <CardContent className="p-4 absolute bottom-0 bg-gradient-to-t from-muted to-muted/60">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <Button variant="" className="ml-auto" size="icon" asChild>
                      <Link to={service.path}>
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden flex flex-col justify-between relative z-0`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-muted -z-10"></div>
                <CardContent className="flex flex-col lg:flex-row gap-4 items-center p-0">
                  <img
                    src={service.image}
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
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                    </div>
                    <Button variant="" className="self-end" asChild>
                      <Link to={service.path}>
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
