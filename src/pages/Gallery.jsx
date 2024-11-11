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
    title: "White Marble",
    images: [
      "/gallery/white-marble1.webp",
      "/gallery/white-marble2.webp",
      "/gallery/white-marble3.webp",
      "/gallery/white-marble4.webp",
      "/gallery/white-marble5.webp",
    ],
  },
  {
    title: "Black Granite",
    images: [
      "/gallery/black-granite1.webp",
      "/gallery/black-granite2.webp",
      "/gallery/black-granite3.webp",
      "/gallery/black-granite4.webp",
      "/gallery/black-granite5.webp",
    ],
  },
  {
    title: "Quartz",
    images: [
      "/gallery/quartz1.webp",
      "/gallery/quartz2.webp",
      "/gallery/quartz3.webp",
      "/gallery/quartz4.webp",
      "/gallery/quartz5.webp",
    ],
  },
  {
    title: "Feldspar",
    images: [
      "/gallery/feldspar1.webp",
      "/gallery/feldspar2.webp",
      "/gallery/feldspar3.webp",
      "/gallery/feldspar4.webp",
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
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((gallery, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer rounded-t-none"
              onClick={() => openDialog(gallery)}
            >
              <img
                src={gallery.images[0]} // Show the first image as the card preview
                alt={gallery.title}
                width={400}
                height={300}
                className="w-full aspect-[3/2] object-cover group-hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="text-sm md:text-base text-center font-semibold">
                  {gallery.title}
                </h3>
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
