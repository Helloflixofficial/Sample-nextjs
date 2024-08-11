"use client";
import React from "react";
import Image from "next/image";
import { AnimeEpisode } from "./types";

const AnimeBanner: React.FC<{ episodes: AnimeEpisode[] }> = ({ episodes }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {episodes.length > 0 ? (
        episodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={episode.image}
              alt={episode.title}
              width={200}
              height={200}
            />
            <h2 className="text-lg font-bold">{episode.title}</h2>
            <p>Episode: {episode.episodeNumber}</p>
          </div>
        ))
      ) : (
        <p>Loading Anime Episodes...</p>
      )}
    </div>
  );
};

export default AnimeBanner;
