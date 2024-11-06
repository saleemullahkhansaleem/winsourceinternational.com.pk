import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section className="relative max-h-[calc(100vh-72px)] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full object-cover"
      >
        <source src="Promo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
        aria-label="Toggle sound"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </section>
  );
};

export default VideoSection;
