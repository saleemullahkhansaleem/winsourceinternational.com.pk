import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const serviceData = servicesData.find((service) => service.id === serviceId);

  return serviceData ? (
    <section className="container mx-auto py-16 px-6 lg:px-8">
      <Helmet>
        <title>
          {serviceData.title} | Win Source International - We bring the
          mountains to your doorsteps
        </title>
        <meta
          name="description"
          content={`${serviceData.description} "Win Source International provides high-quality, sustainable mineral resources globally. We are committed to reliability and excellence in service. Discover premium mineral solutions with us."`}
        />
        <meta
          name="keywords"
          content="minerals, mining, extraction, supply, high-quality, sustainable, global, leader, solutions, premium, reliability, excellence, service, Win Source International, mountains, doorsteps"
        />
      </Helmet>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {serviceData.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {serviceData.description}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={serviceData.imageUrl}
            alt={serviceData.title}
            className="rounded-lg w-full max-w-lg aspect-[3/2] object-cover"
          />
        </div>
      </div>

      {serviceData.subServices && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {serviceData.title} Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.subServices.map((subService) => (
              <Card key={subService.id} className="">
                {subService.imageUrl ? (
                  <img
                    src={subService.imageUrl}
                    alt={subService.title}
                    className="rounded-lg w-full max-w-lg aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/10 via-primary/15 to-primary/5 flex items-center justify-center text-primary/20 font-bold text-2xl">
                    {subService.title}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="font-semibold text-lg">
                    {subService.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {subService.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  ) : (
    <section className="container mx-auto py-16 px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-red-600">Service not found</h2>
    </section>
  );
}
