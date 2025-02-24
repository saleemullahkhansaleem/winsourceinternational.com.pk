import { Github, Linkedin, ExternalLink, Youtube } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { HoverCardArrow } from "@radix-ui/react-hover-card";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function MrCard({
  name = "Mr Saleem",
  title = "Full Stack Developer",
  photoUrl = "/images/mr.webp",
  portfolioUrl = "http://mrsaleem.vercel.app",
  githubUrl = "https://github.com/saleemullahkhansaleem",
  linkedinUrl = "https://www.linkedin.com/in/mrsaleem/",
  whatsappUrl = "https://wa.me/92405045889",
  fiverrUrl = "https://www.fiverr.com/saliyousafzai",
  youtubeUrl = "https://www.youtube.com/@saleemullahkhansaleem",
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <p>
          Develop by{" "}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-primary transition-colors duration-200"
          >
            {name}
          </a>
        </p>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 rounded-xl bg-gradient-to-br from-background to-secondary shadow-xl p-6 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade"
        sideOffset={5}
      >
        <div className="flex flex-col items-center">
          <img
            src={photoUrl}
            alt={name}
            width={100}
            height={100}
            className="rounded-full border-4 border-primary shadow-md"
          />
          <h3 className="mt-4 text-2xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>

          <div className="mt-4 flex space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Youtube size={24} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              title="Hire me on Fiverr"
            >
              <SiFiverr size={40} className="mr-2" />
            </a>
          </div>

          <Button
            asChild
            variant="default"
            size=""
            className="mt-4 rounded-full"
          >
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              Visit my website
              <ExternalLink size={16} className="ml-2" />
            </a>
          </Button>
        </div>
        <HoverCardArrow className="fill-secondary" />
      </HoverCardContent>
    </HoverCard>
  );
}
