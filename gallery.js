// 仮の作品データ（カテゴリー別）
const galleryWorks = {
  illustration: [
    {
      title: "5つの箱",
      description: "",
      image: "images/5つの箱.png",
      link: "#"
    },
    {
      title: "AIとおやじ連載スタート",
      description: "",
      image: "images/AIとおやじ連載スタート.png",
      link: "#"
    },
    {
      title: "AIと一緒に短いシナリオ",
      description: "",
      image: "images/AIと一緒に短いシナリオ.png",
      link: "#"
    },
    {
      title: "AIと出会う",
      description: "",
      image: "images/AIと出会う.png",
      link: "#"
    },
    {
      title: "AIと小説作り",
      description: "",
      image: "images/AIと小説作り.png",
      link: "#"
    },
    {
      title: "AIと小説作りに挑戦",
      description: "",
      image: "images/AIと小説作りに挑戦.png",
      link: "#"
    },
    {
      title: "AIに自分らしい文章を書かせるコツ",
      description: "",
      image: "images/AIに自分らしい文章を書かせるコツ.png",
      link: "#"
    },
    {
      title: "AI副業っててどう始める？",
      description: "",
      image: "images/AI副業っててどう始める？.png",
      link: "#"
    },
    {
      title: "シェイクスピア風",
      description: "",
      image: "images/シェイクスピア風.png",
      link: "#"
    },
    {
      title: "おやじ流タイトルの付け方",
      description: "",
      image: "images/おやじ流タイトルの付け方.png",
      link: "#"
    },
    {
      title: "おやじ流見出しの付け方",
      description: "",
      image: "images/おやじ流見出しの付け方.png",
      link: "#"
    },
    {
      title: "カテゴリー分け",
      description: "",
      image: "images/カテゴリー分け.png",
      link: "#"
    },
    {
      title: "シナリオって何",
      description: "",
      image: "images/シナリオって何.png",
      link: "#"
    },
    {
      title: "シナリオと小説の違い",
      description: "",
      image: "images/シナリオと小説の違い.png",
      link: "#"
    },
    {
      title: "シナリオ作り",
      description: "",
      image: "images/シナリオ作り.png",
      link: "#"
    },
    {
      title: "スキルアップの地図",
      description: "",
      image: "images/スキルアップの地図.png",
      link: "#"
    },
    {
      title: "タグとSEOって何？",
      description: "",
      image: "images/タグとSEOって何？.png",
      link: "#"
    },
    {
      title: "なにが向いているかわからない",
      description: "",
      image: "images/なにが向いているかわからない.png",
      link: "#"
    },
    {
      title: "なにが良いかな",
      description: "",
      image: "images/なにが良いかな.png",
      link: "#"
    },
    {
      title: "ひらめいたおやじ",
      description: "",
      image: "images/ひらめいたおやじ.png",
      link: "#"
    },
    {
      title: "ブログ構成にまよったら",
      description: "",
      image: "images/ブログ構成にまよったら.png",
      link: "#"
    },
    {
      title: "プロンプトでAIが変わる",
      description: "",
      image: "images/プロンプトでAIが変わる,png",
      link: "#"
    },
    {
      title: "プロンプトの考え方",
      description: "",
      image: "images/プロンプトの考え方.png",
      link: "#"
    },
    {
      title: "プロンプトの組み立て方",
      description: "",
      image: "images/プロンプトの組み立て方.png",
      link: "#"
    },
    {
      title: "プロンプトをもっと上手にするには",
      description: "",
      image: "images/プロンプトをもっと上手にするには.png",
      link: "#"
    },
    {
      title: "ポートフォリオづくりどうする",
      description: "",
      image: "images/ポートフォリオづくりどうする.png",
      link: "#"
    },
    {
      title: "やってみていること",
      description: "",
      image: "images/やってみていること.png",
      link: "#"
    },
    {
      title: "やってみる",
      description: "",
      image: "images/やってみる.png",
      link: "#"
    },
    {
      title: "時間がない中での工夫",
      description: "",
      image: "images/時間がない中での工夫.png",
      link: "#"
    },
    {
      title: "小説家風",
      description: "",
      image: "images/小説家風.png",
      link: "#"
    },
    {
      title: "中年おやじが考えるスキルアップの地図",
      description: "",
      image: "images/中年おやじが考えるスキルアップの地図.png",
      link: "#"
    },
    {
      title: "伝わるプロンプトのヒント",
      description: "",
      image: "images/伝わるプロンプトのヒント.png",
      link: "#"
    },
    {
      title: "田中おやじ初めてのシナリオ",
      description: "",
      image: "images/田中おやじ初めてのシナリオ.png",
      link: "#"
    },
    {
      title: "田中おやじ誕生",
      description: "",
      image: "images/田中おやじ誕生.png",
      link: "#"
    },
  ],
  novel: [
    {
      title: "短編小説『AIとおやじ』",
      description: "―年齢も才能も関係ない。今こそ、自分を信じる物語。",
      image: "images/AIとおやじ.png",
      link: "novel-aitooyaji.html"
    }
  ],
  scenario: [
    {
      title: "",
      description: "",
      image: "images/",
      link: "#"
    }
  ],
  app: [
    {
      title: "",
      description: "",
      image: "images/",
      link: "#"
    }
  ]
};

// カード表示関数
function renderGallery(category) {
  const container = document.getElementById('gallery-cards');
  container.innerHTML = '';

  galleryWorks[category].forEach(work => {
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

// カテゴリー切り替え
document.querySelectorAll('.category-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    // ボタンのアクティブ状態切り替え
    document.querySelectorAll('.category-tabs button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 選択されたカテゴリーで表示更新
    const category = button.getAttribute('data-category');
    renderGallery(category);
  });
});

// 初期表示（イラスト）
window.addEventListener('DOMContentLoaded', () => {
  renderGallery('illustration');
});
