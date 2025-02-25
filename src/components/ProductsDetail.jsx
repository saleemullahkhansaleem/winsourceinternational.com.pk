import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { productsData } from "@/data";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function ProductsDetail() {
  const { productId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const productData = productsData.find((service) => service.id === productId);

  return productData ? (
    <>
      <section className="py-16 px-6 lg:px-8">
        <Helmet>
          <title>
            {productData.title} | Win Source International - We bring the
            mountains to your doorsteps
          </title>
          <meta
            name="description"
            content={`${productData.description} "Win Source International provides high-quality, sustainable mineral resources globally. We are committed to reliability and excellence in service. Discover premium mineral solutions with us."`}
          />
          <meta
            name="keywords"
            content="minerals, mining, extraction, supply, high-quality, sustainable, global, leader, solutions, premium, reliability, excellence, service, Win Source International, mountains, doorsteps"
          />
        </Helmet>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {productData.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {productData.description}
            </p>
            <div className="flex gap-4 mt-8">
              {productData.testReport && (
                <ImageDialog
                  image={productData.testReport}
                  title="Test Report"
                />
                // <Button variant="secondary" onClick={openDialog}>
                //   View Test Report
                // </Button>
              )}
              <Button>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={productData.imageUrl}
              alt={productData.title}
              className="rounded-lg w-full max-w-lg aspect-[3/2] object-cover"
            />
          </div>
        </div>

        {productData.mineVideos && productData.mineVideos.length > 0 && (
          <div className="container mx-auto mt-16 space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Inside Our {productData.title} Mine
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.mineVideos.map((video, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <iframe
                      key={i}
                      width="560"
                      height="315"
                      src={video.url}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      className="w-full aspect-[3/2] object-cover"
                      allowfullscreen
                    ></iframe>
                    <CardTitle className="font-semibold text-lg">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="py-16 px-6 lg:px-8 bg-muted">
        {productData.subProducts && (
          <div className="space-y-8">
            <div className="container mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {productData.title} Products
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productData.subProducts.map((subProduct) => (
                  <Card key={subProduct.id} className="overflow-hidden">
                    {subProduct.images ? (
                      <Carousel className="w-full mx-auto">
                        <CarouselContent>
                          {subProduct.images.map((image, i) => (
                            <CarouselItem key={i}>
                              <div className="p-">
                                <img
                                  src={image || "/placeholder.svg"}
                                  alt={`${subProduct.title} image ${i + 1}`}
                                  width={300}
                                  height={200}
                                  className="w-full aspect-video object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
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
          </div>
        )}
      </section>
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Our Packaging */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {productData.title} Packaging
          </h3>

          <div className="space-y-4">
            <p>
              Standard packing available in 50 kg. <br />
              HDPE bags in 1 or 1.25 M.T. Jumbo bags with or without liner
              inside, or as per customer requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingImages.map((image, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={image}
                  alt={`${productData.title} packaging ${i + 1}`}
                  className="w-full max-w-lg object-cover"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <h4 className="text-xl font-semibold mb-4">
            Looking for high-quality {productData.title}?
          </h4>
          <p className="text-muted-foreground mb-6">
            Contact us today to get a customized quote tailored to your needs.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="">
              Get a Quote
            </Link>
          </Button>
        </div>
        </div>
      </section>
    </>
  ) : (
    <section className="container mx-auto py-16 px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-red-600">Product not found</h2>
    </section>
  );
}

export function ImageDialog({ image, title }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View Test Report</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center max-w-5xl bg-background">
        <DialogTitle>{title}</DialogTitle>
        <div className="w-full mt-6 relative">
          <div className="flex justify-center">
            <img
              src={image}
              alt="Test Report"
              className="w-full max-h-[80vh] object-contain m-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const packagingImages = [
  "/images/products/packing1.webp",
  "/images/products/packing2.webp",
];
