import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using FontAwesome icons for custom arrows

const galleryItems = [
  {
    title: "INTERNATIONAL SYMPOSIUM (A WATER SECURE PAKISTAN)",
    images: ["/gallery/is1.webp", "/gallery/is2.webp", "/gallery/is3.webp"],
  },
  {
    title: "CVE-2019 (REGIONAL MEDIA TRAINING)",
    images: [
      "/gallery/cve1.webp",
      "/gallery/cve2.webp",
      "/gallery/cve3.webp",
      "/gallery/cve4.webp",
    ],
  },
  {
    title: "ICMC-2019 (INTERNATIONAL CONFRENCE ON MEDIA CONFLICT)",
    images: [
      "/gallery/icmc1.webp",
      "/gallery/icmc2.webp",
      "/gallery/icmc3.webp",
      "/gallery/icmc4.webp",
      "/gallery/icmc5.webp",
      "/gallery/icmc6.webp",
    ],
  },
  {
    title: "Advance Training Workshop (25 – 27 March, 2019)",
    images: ["/gallery/atw1.webp", "/gallery/atw2.webp", "/gallery/atw3.webp"],
  },
  {
    title: "Pur Azam Award Ceremony",
    images: [
      "/gallery/paac1.webp",
      "/gallery/paac2.webp",
      "/gallery/paac3.webp",
      "/gallery/paac4.webp",
      "/gallery/paac5.webp",
      "/gallery/paac6.webp",
      "/gallery/paac7.webp",
      "/gallery/paac8.webp",
    ],
  },
];

export default function Gallery() {
  const [currentGallery, setCurrentGallery] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const openDialog = (gallery) => {
    setCurrentGallery(gallery);
    setCurrentSlide(0);
  };

  const closeDialog = () => {
    setCurrentGallery(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    afterChange: (index) => setCurrentSlide(index), // Track the current slide index
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide =
    currentGallery && currentSlide === currentGallery.images.length - 1;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {galleryItems.map((gallery, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-none group cursor-pointer"
              onClick={() => openDialog(gallery)}
            >
              <img
                src={gallery.images[0]} // Show the first image as the card preview
                alt={gallery.title}
                width={400}
                height={300}
                className="w-full aspect-square object-cover group-hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="text-sm md:text-base text-center font-semibold">{gallery.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog for Image Slider */}
        <Dialog open={!!currentGallery} onOpenChange={closeDialog}>
          <DialogTrigger asChild>
            <button style={{ display: "none" }} />
          </DialogTrigger>
          <DialogContent className="flex flex-col justify-center items-center max-w-5xl bg-background">
            {currentGallery && (
              <>
                <DialogTitle>{currentGallery.title}</DialogTitle>
                <div className="w-full mt-6 relative">
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {currentGallery.images.map((image, idx) => (
                      <div key={idx} className="flex justify-center">
                        <img
                          src={image}
                          alt={`Slide ${idx + 1}`}
                          className="w-full max-h-[80vh] object-contain m-auto"
                        />
                      </div>
                    ))}
                  </Slider>

                  {/* Custom Arrows with hover effects and conditional rendering */}
                  {!isFirstSlide && (
                    <button
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
                      onClick={() => sliderRef.current.slickPrev()}
                    >
                      <FaChevronLeft size={24} />
                    </button>
                  )}
                  {!isLastSlide && (
                    <button
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
                      onClick={() => sliderRef.current.slickNext()}
                    >
                      <FaChevronRight size={24} />
                    </button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
