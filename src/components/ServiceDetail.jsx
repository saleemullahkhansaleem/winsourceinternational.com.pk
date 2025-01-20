import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import api from "@/http/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const servicesData = [
//   {
//     id: "mines-minerals",
//     title: "Mines & Minerals",
//     description:
//       "Win Source International provides specialized services in the mining sector, offering solutions that encompass exploration, extraction, and processing. With a focus on sustainable practices, we ensure the responsible use of resources while maximizing client value. Our dedicated team is committed to innovation and efficiency within the mining industry.",
//     imageUrl: "/services/service8.webp",
//     subTopics: [
//       {
//         id: "construction-industrial-minerals",
//         title: "Construction And Industrial Minerals Group",
//         description:
//           "Our team provides expertise in the construction and industrial minerals sector, ensuring the sustainable sourcing and processing of essential minerals for construction and industrial use.",
//       },
//       {
//         id: "dimension-stone",
//         title: "Dimension Stone",
//         description:
//           "We specialize in the extraction and supply of high-quality dimension stones, meeting the standards for various architectural and decorative purposes.",
//       },
//       {
//         id: "fuel-minerals",
//         title: "Fuel Minerals",
//         description:
//           "Win Source International offers services in the exploration and development of fuel minerals, ensuring a stable and sustainable supply for energy needs.",
//       },
//       {
//         id: "gemstones",
//         title: "Gemstones",
//         description:
//           "Our gemstone division focuses on sourcing and processing precious and semi-precious stones, ensuring authenticity and quality for our clients.",
//       },
//       {
//         id: "base-metallic-minerals",
//         title: "Base/ Metallic Minerals Group",
//         description:
//           "With a focus on base and metallic minerals, we offer extraction and processing solutions that meet industry standards for a wide range of applications.",
//       },
//     ],
//   },
//   {
//     id: "construction-industrial",
//     title: "Construction And Industrial Minerals",
//     description:
//       "Win Source International provides expert services in the sourcing and processing of essential minerals used for construction and industrial purposes. We ensure that all minerals are responsibly sourced, with sustainable practices throughout the extraction and supply process.",
//     imageUrl: "/services/construction-industrial.webp",
//     subTopics: [
//       {
//         id: "construction-materials",
//         title: "Construction Materials",
//         description:
//           "We specialize in providing construction materials that are integral to building infrastructure, ensuring durability and sustainability in every project.",
//       },
//       {
//         id: "industrial-minerals",
//         title: "Industrial Minerals",
//         description:
//           "Our team sources and processes industrial minerals, ensuring a steady supply of essential resources for industries like manufacturing, energy, and technology.",
//       },
//     ],
//   },
//   {
//     id: "dimension-stone",
//     title: "Dimension Stone",
//     description:
//       "Win Source International specializes in the extraction and supply of high-quality dimension stones. Our products meet the highest industry standards for both architectural and decorative uses, making them ideal for luxury building projects and landscaping.",
//     imageUrl: "/services/dimension-stone.webp",
//     subTopics: [
//       {
//         id: "natural-stone",
//         title: "Natural Stone",
//         description:
//           "We provide natural stone options for a range of applications, from interior design to exterior construction, with a focus on beauty and durability.",
//       },
//       {
//         id: "decorative-stone",
//         title: "Decorative Stone",
//         description:
//           "Our decorative stone products are perfect for landscaping and other aesthetic applications, providing natural beauty and lasting quality.",
//       },
//     ],
//   },
//   {
//     id: "fuel-minerals",
//     title: "Fuel Minerals",
//     description:
//       "Win Source International specializes in the exploration and development of fuel minerals, providing a reliable and sustainable supply of materials for the energy sector. Our services are focused on ensuring energy stability and meeting market demands.",
//     imageUrl: "/services/fuel-minerals.webp",
//     subTopics: [
//       {
//         id: "coal",
//         title: "Coal",
//         description:
//           "We provide coal from sustainable sources, ensuring the energy industry has a reliable supply of this essential mineral for power generation and industrial use.",
//       },
//       {
//         id: "oil-and-gas",
//         title: "Oil and Gas",
//         description:
//           "Our oil and gas services are designed to meet the growing demands of the energy market, ensuring efficient extraction and processing for a stable supply of fuel.",
//       },
//     ],
//   },
//   {
//     id: "gemstones",
//     title: "Gemstones",
//     description:
//       "Win Source International offers specialized services in the sourcing and processing of precious and semi-precious gemstones. We ensure authenticity and quality, catering to both the jewelry and investment markets.",
//     imageUrl: "/services/gemstones.webp",
//     subTopics: [
//       {
//         id: "precious-gemstones",
//         title: "Precious Gemstones",
//         description:
//           "We specialize in sourcing and processing precious gemstones, ensuring authenticity and high market value for our clients in the jewelry and luxury markets.",
//       },
//       {
//         id: "semi-precious-gemstones",
//         title: "Semi-Precious Gemstones",
//         description:
//           "Our semi-precious gemstone division offers high-quality stones for various industries, from jewelry to industrial applications.",
//       },
//     ],
//   },
//   {
//     id: "base-metallic",
//     title: "Base/ Metallic Minerals Group",
//     description:
//       "We specialize in the extraction and processing of base and metallic minerals, providing solutions for industries such as construction, automotive, and electronics. Our operations are focused on quality, sustainability, and meeting the demands of industrial markets.",
//     imageUrl: "/services/base-metallic.webp",
//     subTopics: [
//       {
//         id: "iron-and-steel",
//         title: "Iron and Steel",
//         description:
//           "We supply iron ore and steel materials for industries that rely on these metals for production, ensuring consistent quality and timely delivery.",
//       },
//       {
//         id: "copper",
//         title: "Copper",
//         description:
//           "Our copper extraction services are tailored for industries that require high-quality copper for electrical, construction, and manufacturing purposes.",
//       },
//       {
//         id: "aluminum",
//         title: "Aluminum",
//         description:
//           "Win Source International provides high-quality aluminum materials, which are essential for a variety of industrial applications, including construction, automotive, and aerospace.",
//       },
//     ],
//   },
// ];
export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchServiceDetail();
  }, []);

  const fetchServiceDetail = async () => {
    setLoading(true);
    api
      .post("services/" + serviceId)
      .then((response) => {
        if (response.success) {
          setServiceData(response.data);
          console.log("services details: ", response.data);
          setError("");
        } else {
          setError(
            response.message ||
              "There was an issue with getting Service detail."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error?.message || "Unknown error occurred.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const serviceData = servicesData.find((service) => service.id === serviceId);

  return loading ? (
    <section className="container mx-auto py-16 px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold">Loading...</h2>
    </section>
  ) : serviceData ? (
    <section className="container mx-auto py-16 px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Main Service Content without Card */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {serviceData.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {serviceData.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={serviceData.imageUrl}
            alt={serviceData.title}
            className="rounded-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Render subtopics if available, each within a Card */}
      {serviceData.subServices && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {serviceData.title} Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.subServices.map((subService) => (
              <Card key={subService.id} className="">
                <CardHeader>
                  <CardTitle className="font-semibold text-lg mb-2">
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
      <p className="mt-4 text-muted-foreground">{error}</p>
    </section>
  );
}
