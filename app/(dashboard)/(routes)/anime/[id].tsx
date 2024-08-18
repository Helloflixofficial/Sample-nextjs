"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EpisodesListComponent from "./EpisodesListComponent";

interface AnimeData {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  episodes: { id: string; number: number; url: string }[];
}

const AnimeDetails = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [animeData, setAnimeData] = useState<AnimeData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`anime/gogoanime/info/${id}`);
        const data = await response.json();
        setAnimeData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!animeData) {
    return <p>Anime data not found.</p>;
  }

  return (
    <div className="anime-details">
      <h1>{animeData.title}</h1>
      <Image src={animeData.image} alt={animeData.title} />
      <p>{animeData.description}</p>

      <EpisodesListComponent episodes={animeData.episodes} />
    </div>
  );
};

export default AnimeDetails;
