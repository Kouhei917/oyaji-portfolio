// 仮の作品データ（後でJSONなどに差し替え可能）
const works = [
  {
    title: "ポートフォリオづくりどうする",
    description: "作品の簡単な説明が入ります。",
    image: "images/ポートフォリオづくりどうする.png",
    link: "#"
  },
  {
    title: "AIとおやじ",
    description: "―年齢も才能も関係ない。今こそ、自分を信じる物語。-",
    image: "images/AIとおやじ.png",
    link: "novel-aitooyaji.html"
  },
  {
    title: "作品タイトル3",
    description: "作品の簡単な説明が入ります。",
    image: "images/sample3.png",
    link: "#"
  },
  {
    title: "作品タイトル4",
    description: "別の作品の説明が入ります。",
    image: "images/sample4.png",
    link: "#"
  },
  {
    title: "作品タイトル5",
    description: "別の作品の説明が入ります。",
    image: "images/sample5.png",
    link: "#"
  }
];

// ランダムに3作品を選んで表示
function displayFeaturedWorks() {
  const container = document.querySelector('.card-container');
  container.innerHTML = ''; // 初期化

  const shuffled = works.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(work => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <h3>${work.title}</h3>
      <p>${work.description}</p>
      <a href="${work.link}">詳細を見る</a>
    `;
    container.appendChild(card);
  });
}

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', displayFeaturedWorks);
