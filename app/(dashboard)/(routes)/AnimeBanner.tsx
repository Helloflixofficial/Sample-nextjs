"use client";
import React from "react";
import Image from "next/image";
import { AnimeEpisode } from "./types";

const AnimeBanner: React.FC<{ episodes: AnimeEpisode[] }> = ({ episodes }) => {
  return (
    <div className="grid grid-cols-6 gap-2 bg-black">
      {episodes.length > 0 ? (
        episodes.map((episode) => (
          <div
            key={episode.id}
            className="movie-box bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              src={episode.image}
              alt={episode.title}
              width={200}
              height={200}
            />
            <a className="text-blue-400 hover:text-blue-600 inline-block">
              {episode.title}
            </a>
            <p className="text-xl font-semibold mb-2">
              Episode: {episode.episodeNumber}
            </p>
          </div>
        ))
      ) : (
        <a>Loading......</a>
      )}
    </div>
  );
};

export default AnimeBanner;
