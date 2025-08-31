import React from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  src: string;
  subtitles?: {
    src: string;
    srcLang: string;
    label: string;
    default?: boolean;
  }[];
  controls?: boolean;
  autoPlay?: boolean;
  width?: string;
  height?: string;
};

export function VideoPlayer({
  src,
  subtitles = [],
  controls = true,
  autoPlay = false,
  width = "100%",
  height = "auto",
}: VideoPlayerProps) {
  const isFile = /\.(mp4|webm|ogg|m3u8|mpd)$/i.test(src);

  return (
    <div className="relative w-full aspect-video bg-black">
      <ReactPlayer
        src={src}
        controls
        playing={false}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "contain", // works when the underlying player is <video>
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
