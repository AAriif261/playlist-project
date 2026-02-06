let animeData = [];
let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

const animeGrid = document.querySelector("#animeGrid");
const playlistGrid = document.querySelector("#playlistGrid");
const searchInput = document.querySelector("#searchInput");

fetch("anime.json")
  .then(res => res.json())
  .then(data => {
    animeData = data;
    renderAnime(animeData);
    renderPlaylist();
  });

function renderAnime(list) {
  animeGrid.innerHTML = "";

  list.forEach(anime => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${anime.image}')`;

    card.innerHTML = `
      <div class="anime-title">${anime.title}</div>
      <span>${anime.episodeCount} • ${anime.releaseYear}</span>
      <button>Add to Playlist</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      addToPlaylist(anime);
    });

    animeGrid.appendChild(card);
  });
}

function addToPlaylist(anime) {
  if (!playlist.find(item => item.title === anime.title)) {
    playlist.push(anime);
    localStorage.setItem("playlist", JSON.stringify(playlist));
    renderPlaylist();
  }
}

function renderPlaylist() {
  playlistGrid.innerHTML = "";

  playlist.forEach(anime => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${anime.image}')`;

    card.innerHTML = `
      <div class="anime-title">${anime.title}</div>
      <span>${anime.episodeCount} • ${anime.releaseYear}</span>
    `;

    playlistGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = animeData.filter(anime =>
    anime.title.toLowerCase().includes(value)
  );
  renderAnime(filtered);
});
);
