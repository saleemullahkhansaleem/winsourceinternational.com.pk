import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { galleryImages } from "@/data";
import { Helmet } from "react-helmet-async";

export default function Gallery() {
  const sliderRef = useRef(null);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <Helmet>
        <title>
          Gallery | Win Source International - We bring the mountains to your
          doorsteps
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
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((gallery, index) => (
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
