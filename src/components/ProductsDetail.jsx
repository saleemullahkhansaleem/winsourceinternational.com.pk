import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { productsData } from "@/data";
import { useParams } from "react-router-dom";

export default function ProductsDetail() {
  const { productId } = useParams();

  const productData = productsData.find((service) => service.id === productId);

  return productData ? (
    <section className="container mx-auto py-16 px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {productData.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {productData.description}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={productData.imageUrl}
            alt={productData.title}
            className="rounded-lg w-full max-w-lg aspect-[3/2] object-cover"
          />
        </div>
      </div>

      {productData.subProducts && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {productData.title} Products
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.subProducts.map((subProduct) => (
              <Card key={subProduct.id} className="overflow-hidden">
                {subProduct.imageUrl ? (
                  <img
                    src={subProduct.imageUrl}
                    alt={subProduct.title}
                    className="w-full max-w-lg aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/10 via-primary/15 to-primary/5 flex items-center justify-center text-primary/20 font-bold text-2xl">
                    {subProduct.title}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="font-semibold text-lg">
                    {subProduct.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {subProduct.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  ) : (
    <section className="container mx-auto py-16 px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-red-600">Product not found</h2>
    </section>
  );
}
