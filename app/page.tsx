import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { PlayIcon } from "@vidstack/react/icons";
import { Poster } from "@vidstack/react";
export default function Home() {
  return (
    <>
      <PlayIcon size={40} />
      <MediaPlayer
        playsInline
        src="https://fds.biananset.net/_v7/26c0c3f5b635f5b9153fca5d43037bb06875d79b3f1528ca69ac83f8e14c90a48cce237316cbf6fa12de243f1dca5118b8dbb767aff155b79ad687a75905004314bee838cdbd8bea083910d6f660f3e29ebb5bb3e48dd9b30816c31737fc8fdf9dd123a7ea937c5594fb9daf540e6a4e6aecef840e23f0fe9cfe20638e3467a2/master.m3u8"
      >
        <MediaProvider />
      </MediaPlayer>
    </>
  );
}
