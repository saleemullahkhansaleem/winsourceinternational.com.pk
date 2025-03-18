import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-[calc(100vh-93px)] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-bg2.webp')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <div className="relative z-20 text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/ws-logo.svg"
            alt="logo"
            height={100}
            className="h-16 md:h-32"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Win Source International
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl text-primary">
            We bring the mountains to your doorstep
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12 w-full">
            {data.map((item) => (
              <Link
                key={item.title}
                to={"/products/" + item.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform text-sm font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Button className="group" size="lg" asChild>
            <Link to="/contact">
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
}
