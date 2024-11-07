import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";

export default function ProductsDetail() {
  const { productId } = useParams();

  const productsData = [
    {
      id: "white-marble",
      title: "White Marble",
      description:
        "Win Source International offers high-quality white marble, sourced from the finest quarries. Our white marble is perfect for luxury interior design, flooring, countertops, and various architectural projects. It is known for its elegance, durability, and timeless beauty.",
      imageUrl: "/products/white-marble.webp",
      subTopics: [
        {
          id: "polished-white-marble",
          title: "Polished White Marble",
          description:
            "Our polished white marble is ideal for high-end residential and commercial spaces, offering a sophisticated and clean look for floors, walls, and countertops.",
        },
        {
          id: "honied-white-marble",
          title: "Honied White Marble",
          description:
            "With a rich honey-colored tone, this variation of white marble adds warmth and style to any space, perfect for those looking for a unique and luxurious aesthetic.",
        },
      ],
    },
    {
      id: "black-granite",
      title: "Black Granite",
      description:
        "Our black granite is a top choice for both modern and classic design. Known for its sleek appearance and durability, it is perfect for countertops, floors, and outdoor use. It combines elegance with functionality, making it ideal for both residential and commercial applications.",
      imageUrl: "/products/black-granite.webp",
      subTopics: [
        {
          id: "polished-black-granite",
          title: "Polished Black Granite",
          description:
            "Our polished black granite is smooth, reflective, and highly durable, making it perfect for luxurious countertops, kitchen islands, and floors.",
        },
        {
          id: "flamed-black-granite",
          title: "Flamed Black Granite",
          description:
            "Flamed black granite is perfect for outdoor use, offering a textured surface that is slip-resistant and ideal for walkways, outdoor kitchens, and patio areas.",
        },
      ],
    },
    {
      id: "quartz",
      title: "Quartz",
      description:
        "Win Source International provides premium-quality quartz, a durable and versatile stone that is perfect for countertops, backsplashes, and flooring. Our quartz offers a wide variety of colors and patterns to suit any design style, making it a top choice for modern homes and businesses.",
      imageUrl: "/products/quartz.webp",
      subTopics: [
        {
          id: "engineered-quartz",
          title: "Engineered Quartz",
          description:
            "Engineered quartz offers a perfect blend of durability and aesthetic appeal, designed for high-performance applications such as kitchen countertops, bathroom vanities, and floors.",
        },
        {
          id: "natural-quartz",
          title: "Natural Quartz",
          description:
            "Natural quartz provides an elegant and naturally occurring look, making it perfect for spaces where uniqueness and a natural aesthetic are prioritized.",
        },
      ],
    },
    {
      id: "feldspar",
      title: "Feldspar",
      description:
        "Feldspar is a key mineral used in the manufacturing of ceramics, glass, and other industrial products. Win Source International offers high-quality feldspar suitable for a wide range of applications, including ceramics, glass production, and as a filler in other industrial products.",
      imageUrl: "/products/feldspar.webp",
      subTopics: [
        {
          id: "ceramic-grade-feldspar",
          title: "Ceramic Grade Feldspar",
          description:
            "Our ceramic-grade feldspar is used in the production of high-quality ceramics, providing excellent performance in terms of strength and durability.",
        },
        {
          id: "glass-grade-feldspar",
          title: "Glass Grade Feldspar",
          description:
            "This feldspar is ideal for glass production, offering excellent transparency, durability, and strength for high-end glass products.",
        },
      ],
    },
  ];

  const productData = productsData.find((service) => service.id === productId);

  return productData ? (
    <section className="container mx-auto py-16 px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Main Service Content without Card */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {productData.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {productData.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={productData.imageUrl}
            alt={productData.title}
            className="rounded-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Render subtopics if available, each within a Card */}
      {productData.subTopics && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {productData.title} Products
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.subTopics.map((subTopic) => (
              <Card key={subTopic.id} className="">
                <CardHeader>
                  <CardTitle className="font-semibold text-lg mb-2">
                    {subTopic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {subTopic.description}
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
      <p className="mt-4 text-muted-foreground">
        The service you're looking for does not exist.
      </p>
    </section>
  );
}
