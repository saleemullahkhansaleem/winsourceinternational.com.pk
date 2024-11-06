import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HighlightedEvent() {
  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto text-white flex flex-col lg:flex-row items-center justify-between p-4">
        <div className="text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Launching Ceremony of The Edge Mall, Faisalabad
          </h2>
          <p className="text-muted text-sm md:text-base">
            A momentous event with inspiring speeches, presentations, and the
            unveiling of The Edge Mall.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-8">
          <Link to="/edge-mall-ceremony">
            <Button size="lg" variant="secondary" className="">
              Show Details <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
