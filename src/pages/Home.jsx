import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { HighlightedEvent, LogoCarousel, VideoSection } from "@/components";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Gallery } from ".";

export const services = [
  {
    title: "Event Management",
    image: "/services/service1.webp",
    path: "/services/event-management",
    description:
      "Provides out-of-the-box solutions, focusing on uniqueness for every client and event.",
  },
  {
    title: "Vendor Services",
    image: "/services/service2.webp",
    path: "/services/vendor-services",
    description:
      "Offers quality and affordable delivery through direct sourcing and special relationships.",
  },
  {
    title: "Presence in Oil & Gas Sector",
    image: "/services/service3.webp",
    path: "/services/oil-gas-sector",
    description:
      "Strategic operations and consulting in the oil and gas industry.",
  },
  {
    title: "Branding & Advertising",
    image: "/services/service4.webp",
    path: "/services/branding-advertising",
    description:
      "Aims for client growth through strategy, consulting, development, and management.",
  },
  {
    title: "Facility Management Services",
    image: "/services/service5.webp",
    path: "/services/facility-management",
    description:
      "Delivers quality service with trained staff for organizational image building.",
  },
  {
    title: "Construction",
    image: "/services/service6.webp",
    path: "/services/construction",
    description: "Professional construction services for diverse projects.",
  },
  {
    title: "Property Advisors",
    image: "/services/service7.webp",
    path: "/services/property-advisors",
    description:
      "Provides real estate services, including transactions, advisory, and investment options.",
  },
  {
    title: "Mines & Minerals",
    image: "/services/service8.webp",
    path: "/services/mines-minerals",
    description: "Expert consulting and management in the mining sector.",
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
      <VideoSection />
      <HighlightedEvent />

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col justify-between"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="">
                  <Button variant="" className="w-full" asChild>
                    <Link to={service.path}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      <LogoCarousel />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.map((item, index) => (
              <Card key={index} className="text-center relative group">
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
