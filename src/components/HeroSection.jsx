import { Button } from "@/components/ui/button";
import { ChevronRight, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-93px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* <Mountain className="w-16 h-16 mb-8 text-primary animate-pulse" /> */}
          <img
            src="/ws-logo.svg"
            alt="logo"
            height={100}
            className="h-16 md:h-32"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Win Source International
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl">
            We bring the mountains to your doorstep
          </p>

          {/* Services and Products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "Construction Industrial",
              "Dimension Stone",
              "Gemstones",
              "Base Metallic",
            ].map((service) => (
              <Link
                key={service}
                to={"/services/" + service.toLowerCase().replace(" ", "-")}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform text-sm font-medium"
              >
                {service}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="group" size="lg" asChild>
            <Link to="/contact  ">
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
}
