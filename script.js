const games = [
  {name: "Subway Surfers", embed: "https://html5games.com/Game/Subway-Surfers/embed"},
  {name: "Temple Run 2", embed: "https://playpager.com/embed/temple-run-2/index.html"},
  {name: "Slope", embed: "https://idev.games/embed/slope"},
  {name: "Basketball Stars", embed: "https://html5games.com/Game/Basketball-Stars/embed"},
  {name: "Fireboy and Watergirl", embed: "https://playpager.com/embed/fireboy-watergirl/index.html"},
  {name: "Moto X3M", embed: "https://idev.games/embed/moto-x3m"},
  {name: "1v1.LOL", embed: "https://crazygames.com/game/1v1lol/embed"},
  {name: "Shell Shockers", embed: "https://shellshock.io/embed"},
  {name: "Krunker", embed: "https://krunker.io/embed"},
  {name: "Paper.io 2", embed: "https://paperio2.com/embed"},
  // Add 90+ more – get from htmlgames.com (click Embed on game), playpager.com/embed-games, idev.games
  // Examples:
  {name: "Among Us", embed: "https://html5games.com/Game/Among-Us/embed"},
  {name: "Happy Wheels", embed: "https://totaljerkface.com/happy_wheels.php?embed=1"}, // Some have embed param
  {name: "Run 3", embed: "https://run3unblocked.io/embed"},
  // Search "free html5 game embed code" for more sources – copy iframe src directly
];

const grid = document.getElementById('grid');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p>${game.name}</p>
    <iframe src="${game.embed}" allowfullscreen></iframe>
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
