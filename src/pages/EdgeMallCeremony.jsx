import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im"; // Import a spinner icon

const videos = [
  {
    id: "1",
    title: "Recitation of Holy Quran, Naat Shareef & Sufi Qalam",
    thumbnail: "/edge-mall/v1.webp",
    videoUrl: "https://www.youtube.com/embed/diD3RL6iG6w?si=stT7_nT5AR-rDMtI",
  },
  {
    id: "2",
    title: "Mr. Tasneem Sabri Welcoming the Guests",
    thumbnail: "/edge-mall/v2.webp",
    videoUrl: "https://www.youtube.com/embed/1qojKO7ohHA?si=zxCOonj71yEdxiaA",
  },
  {
    id: "3",
    title:
      "Presentation of Mr. Zeeshan Tayyab, COO, Go Petroleum & Sitara Heights",
    thumbnail: "/edge-mall/v3.webp",
    videoUrl: "https://www.youtube.com/embed/Q04VLVV4w3g?si=EtOnYk2Z82Jc0OD_",
  },
  {
    id: "4",
    title: "Presentation of Architect Mr. Jamshed Khan",
    thumbnail: "/edge-mall/v4.webp",
    videoUrl: "https://www.youtube.com/embed/_IVCPgzvSRo?si=dEbP4lmPbuv-946O",
  },
  {
    id: "5",
    title:
      "Presentation of Sheikh Shuja Ullah Khan, Senior Director & M/S Muzaffar Majeed, Regional Head & Asad Saleem, Regional Sales Manager Zameen.com",
    thumbnail: "/edge-mall/v5.webp",
    videoUrl: "https://www.youtube.com/embed/n-o1q2QHBwM?si=qkIDkV1PW0Yiuy-Y",
  },
  {
    id: "6",
    title: "Mr. Mazhar Abbas addressing the Ceremony",
    thumbnail: "/edge-mall/v6.webp",
    videoUrl: "https://www.youtube.com/embed/kihcuYNGVwE?si=sIM3Aq1bk084znak",
  },
  {
    id: "7",
    title:
      "Unveiling of The Egde Mall, Faisalabad by Haji Javed Iqbal Qaiser, Group Head Go Petroleum & Sitara Heights",
    thumbnail: "/edge-mall/v7.webp",
    videoUrl: "https://www.youtube.com/embed/3KT2jXIBO5k?si=-e_4FE7rQfaxl_M4",
  },
  {
    id: "8",
    title: "Performance of Sher Ali & Mehr Ali Qawal",
    thumbnail: "/edge-mall/v8.webp",
    videoUrl: "https://www.youtube.com/embed/hT8yMYsix64?si=p9vCt81M5dSKIfYB",
  },
  {
    id: "9",
    title: "Performance of Nadeem Abbas Lunewala",
    thumbnail: "/edge-mall/v9.webp",
    videoUrl: "https://www.youtube.com/embed/auA4EjIgpys?si=T1dkDxfarpbiKNrX",
  },
  {
    id: "10",
    title: "Performance of Ali Abbas & Minahail",
    thumbnail: "/edge-mall/v10.webp",
    videoUrl: "https://www.youtube.com/embed/HvjfpY19iYE?si=aQX7uVEAdNaWGtpk",
  },
  {
    id: "11",
    title: "Performance of Salman Amin",
    thumbnail: "/edge-mall/v11.webp",
    videoUrl: "https://www.youtube.com/embed/SpkYUn_5saA?si=s0gc1oRLSd2QPubx",
  },
];

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleVideoClick = (videoUrl) => {
    setIsLoading(true); // Start loading
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="flex flex-col items-center min-h-[70vh] py-10">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Launching Ceremony of The Edge Mall, Faisalabad
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full container px-4">
        {videos.map((video) => (
          <Dialog key={video.id} onOpenChange={() => setIsLoading(true)}>
            <DialogTrigger asChild>
              <div>
                <div className="relative group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-lg shadow-lg w-full h-72 object-cover"
                  />
                  <div className="rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <FaPlay
                      size={60}
                      className="text-destructive"
                      onClick={() => handleVideoClick(video)}
                    />
                  </div>
                </div>
                <h3 className="lg:text-lg text-center font-semibold text-secondary-foreground p-2">
                  {video.title}
                </h3>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background p-4 rounded-lg shadow-lg max-w-7xl mx-auto">
              {currentVideo && (
                <div className="relative w-full h-0 pb-[56.25%]">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImSpinner8 className="text-primary animate-spin text-4xl" />
                    </div>
                  )}
                  <DialogTitle>{currentVideo.title}</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <iframe
                    src={currentVideo.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`absolute top-0 left-0 w-full h-full rounded-lg ${
                      isLoading ? "hidden" : ""
                    }`}
                    onLoad={() => setIsLoading(false)} // Stop loading once video is ready
                  ></iframe>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
