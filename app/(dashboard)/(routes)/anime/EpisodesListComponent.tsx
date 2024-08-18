import React from "react";

interface Episode {
  id: string;
  number: number;
  url: string;
}

const EpisodesListComponent: React.FC<{ episodes: Episode[] }> = ({
  episodes,
}) => {
  return (
    <ul className="episodes-list">
      {episodes.map((episode) => (
        <li key={episode.id}>
          <a href={episode.url}>Episode {episode.number}</a>
        </li>
      ))}
    </ul>
  );
};

export default EpisodesListComponent;
