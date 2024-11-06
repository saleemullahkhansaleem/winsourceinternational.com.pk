import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-foreground">
      {/* 404 Icon */}
      <div className="text-center mb-6">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          <span className="text-primary">404</span>
        </h1>
        <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>

      {/* Illustration */}
      {/* <div className="mb-10">
        <img
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          className="w-96 mx-auto"
        />
      </div> */}

      {/* Back to Home Button */}
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
