import Image from "next/image";

type Episode = {
  id: string;
  number: number;
  url: string;
};

type AnimeInfo = {
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
  episodes: Episode[];
};

type AnimePageProps = {
  anime: AnimeInfo;
};

export default function AnimePage({ anime }: AnimePageProps) {
  return (
    <div>
      <h1>{anime.title}</h1>
      <Image
        src={anime.image}
        alt={anime.title}
        width={300}
        height={400}
        layout="responsive"
        objectFit="cover"
      />

      <p>{anime.description}</p>
      <p>
        <strong>Genres:</strong> {anime.genres.join(", ")}
      </p>
      <p>
        <strong>Total Episodes:</strong> {anime.totalEpisodes}
      </p>
      <p>
        <strong>Release Date:</strong> {anime.releaseDate}
      </p>
      <p>
        <strong>Sub or Dub:</strong> {anime.subOrDub}
      </p>
      <p>
        <strong>Status:</strong> {anime.status}
      </p>
      <p>
        <strong>Other Names:</strong> {anime.otherName}
      </p>

      <h2>Episodes</h2>
      <ul>
        {anime.episodes.map((episode) => (
          <li key={episode.id}>
            <a href={episode.url} target="_blank" rel="noopener noreferrer">
              Episode {episode.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
