import React from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
const VideoPlayer = () => {
  return (
    <MediaPlayer
      title="My Video"
      src="https://w2r.biananset.net/_v7/e2aa9aef66d81e32d4f31b9998048c5692c685be1df3f5fca8a564e46c461e69bf036377e3f58137c4dddc01e59db8c183803734ca3ab6f4dfceb60cdd75f9efbc9054d2fb88621f03f4908db2c29b63abd8f4e3c64b2d681ca05601fc5a604811e17410a7e1b627994fd62761519ad851df55ea0b7aecf39454cb85e5b687f7/master.m3u8"
    >
      <MediaProvider />
      <DefaultVideoLayout
        thumbnails="https://s.megastatics.com/subtitle/e5d6971e523ef7811f2b8f491440e94b/eng-2.vtt"
        icons={defaultLayoutIcons}
        className=""
      />
    </MediaPlayer>
  );
};

export default VideoPlayer;
