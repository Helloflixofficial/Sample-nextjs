const apiUrl =
  "https://consumet-api-rz8l.onrender.com/anime/gogoanime/recent-episodes";
const animeList = document.getElementById("anime-list");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((anime) => {
      const animeBox = document.createElement("div");
      animeBox.classList.add("anime-box");

      const image = document.createElement("img");
      image.src = anime.image;

      const title = document.createElement("h3");
      title.textContent = anime.title;

      // Add element for episode number
      const episodeNumber = document.createElement("p");
      episodeNumber.textContent = `Episode: ${anime.episodeNumber}`; // Access episode number

      // Add element for episode URL
      const url = document.createElement("a");
      url.href = anime.url; // Access URL
      url.target = "_blank"; // Open link in new tab
      url.textContent = "Watch Now";

      animeBox.appendChild(image);
      animeBox.appendChild(title);
      animeBox.appendChild(episodeNumber);
      animeBox.appendChild(url); // Append URL element

      animeList.appendChild(animeBox);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
