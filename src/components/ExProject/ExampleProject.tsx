import React, { useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  isLeftAligned?: boolean; // Prop to alternate card alignment
  videoSrc: string; // Add a prop for the video source
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  isLeftAligned = true,
  videoSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to the beginning
      videoRef.current.play(); // Start playback
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause playback
      videoRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center gap-6 bg-[radial-gradient(circle,_rgba(118,60,172,1)_0%,_rgba(18,4,32,1)_30%)] bg-[position:81px_-37px]
 pb-12 pt-[4rem] md:flex-row  md:gap-12
${!isLeftAligned ? "z-1 md:flex-row-reverse  " : ""}`}
    >
      {/* Content */}
      <div className=" w-full  bg-transparent text-white md:w-1/2">
        <span className="text-sm font-semibold uppercase text-purple-400">
          Featured Project
        </span>

        <h3 className="mb-4 mt-2 text-2xl font-bold text-white">{title}</h3>
        <p className=" rounded-[20px] p-[20px] leading-relaxed text-white backdrop-blur-2xl">
          {description}
        </p>
      </div>

      {/* Project Video */}
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-[#2B0B3A] pl-[50px] pt-[30px] md:w-1/2">
        <video
          ref={videoRef}
          className="z-1 h-full w-full rounded-tl-[20px]  object-cover"
          muted
          loop={true}
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <div>
      <section className=" bg-bgColor px-4 md:px-12">
        {/* <section className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 via-green-300 to-teal-400"> */}

        <div className="z-1 relative mx-auto max-w-7xl">
          {/* Project 1 */}
          <ProjectCard
            title="Example Project 1"
            description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
            videoSrc={""} // Use the first video source
            isLeftAligned={true}
          />

          {/* Project 2 */}
          <ProjectCard
            title="Example Project 2"
            description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
            videoSrc={""} // Use the second video source
            isLeftAligned={false}
          />
          {/* <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-t from-bgColor via-bgColor to-transparent" /> */}
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-t from-bgColor via-bgColor to-transparent" /> */}
      </section>
    </div>
  );
};

export default FeaturedProjects;
