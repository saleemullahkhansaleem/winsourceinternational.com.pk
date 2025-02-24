import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection, TruncateParagraph } from "@/components";
import { Link } from "react-router-dom";
import { Gallery } from ".";
import { Helmet } from "react-helmet-async";
import { contactData, productsData, servicesData } from "@/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>
          Win Source International - We bring the mountains to your doorsteps
        </title>
        <meta
          name="description"
          content="Win Source International provides high-quality, sustainable mineral resources globally. We are committed to reliability and excellence in service. Discover premium mineral solutions with us."
        />
        <meta
          name="keywords"
          content="minerals, mining, extraction, supply, high-quality, sustainable, global, leader, solutions, premium, reliability, excellence, service, Win Source International, mountains, doorsteps"
        />
      </Helmet>
      <HeroSection services={servicesData} />

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((service, index) => (
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
                <CardContent className="p-4 absolute bottom-0 bg-gradient-to-t from-muted to-muted/60 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <Button
                      variant=""
                      className="ml-auto"
                      size="icon"
                      asChild
                      title="View More"
                    >
                      <Link to={"/products/" + service.id}>
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                  {/* <TruncateParagraph
                    className="text-muted-foreground"
                    text={service.description}
                  /> */}
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
            {servicesData.map((service, index) => (
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
                      <Link to={"/services/" + service.id}>
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
