import { Helmet } from "react-helmet-async";
import { GallerySection } from "@/components";

export default function Gallery() {
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
        <GallerySection />
      </div>
    </section>
  );
}
