"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeBanner from "./AnimeBanner";
import { AnimeEpisode } from "./types";

function HomePage() {
  const [episodes, setEpisodes] = useState<AnimeEpisode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://consumet-api-rz8l.onrender.com/anime/gogoanime/recent-episodes"
        );
        setEpisodes(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Anime Banner</h1>
      <AnimeBanner episodes={episodes} />
    </div>
  );
}

export default HomePage;
