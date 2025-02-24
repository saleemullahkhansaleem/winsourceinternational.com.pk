import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-foreground">
      <Helmet>
        <title>
          404 Not Found | Win Source International - We bring the mountains to
          your doorsteps
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
      <div className="text-center mb-6">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          <span className="text-primary">404</span>
        </h1>
        <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white"
        asChild
      >
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
}
