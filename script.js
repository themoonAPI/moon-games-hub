const games = [
  {name: "Subway Surfers", embed: "https://html5games.com/Game/Subway-Surfers/embed"},
  {name: "Basketball Stars", embed: "https://html5games.com/Game/Basketball-Stars/embed"},
  {name: "Fireboy and Watergirl", embed: "https://playpager.com/embed/fireboy-watergirl/index.html"},
  {name: "Moto X3M", embed: "https://idev.games/embed/moto-x3m"},
  {name: "Slope", embed: "https://idev.games/embed/slope"},
  {name: "Temple Run 2", embed: "https://playpager.com/embed/temple-run-2/index.html"},
  {name: "Paper.io 2", embed: "https://playpager.com/embed/paper-io-2/index.html"},
  {name: "Hole.io", embed: "https://playpager.com/embed/hole-io/index.html"},
  {name: "Among Us", embed: "https://html5games.com/Game/Among-Us/embed"},
  {name: "Vex 5", embed: "https://playpager.com/embed/vex-5/index.html"},
  {name: "Run 3", embed: "https://playpager.com/embed/run-3/index.html"},
  {name: "Happy Wheels", embed: "https://html5games.com/Game/Happy-Wheels/embed"},
  {name: "2048", embed: "https://playpager.com/embed/2048/index.html"},
  {name: "Tetris", embed: "https://html5games.com/Game/Tetris/embed"},
  {name: "Pac-Man", embed: "https://playpager.com/embed/pacman/index.html"},
  {name: "Snake", embed: "https://html5games.com/Game/Snake/embed"},
  {name: "Solitaire", embed: "https://html5games.com/Game/Solitaire/embed"},
  {name: "Mahjong", embed: "https://html5games.com/Game/Mahjong/embed"},
  {name: "Bubble Shooter", embed: "https://playpager.com/embed/bubble-shooter/index.html"},
  {name: "Candy Crush", embed: "https://html5games.com/Game/Candy-Crush/embed"},
  // Add more: go to htmlgames.com → pick game → click Embed → copy iframe src URL
];

const grid = document.getElementById('grid');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p>${game.name}</p>
    <iframe src="${game.embed}" allowfullscreen loading="lazy"></iframe>
  `;
  grid.appendChild(card);
});

// Search
document.getElementById('search').oninput = e => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(term) ? 'block' : 'none';
  });
};
