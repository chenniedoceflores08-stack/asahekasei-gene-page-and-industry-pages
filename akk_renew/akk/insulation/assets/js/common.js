/*---------------------------------------------------
 header
----------------------------------------------------*/

function getInsulationRelativePrefix() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const segments = path.split("/").filter(Boolean);
  const insulationIndex = segments.lastIndexOf("insulation");

  if (insulationIndex === -1) {
    return "./";
  }

  const depth = Math.max(segments.length - insulationIndex - 2, 0);
  return depth === 0 ? "./" : "../".repeat(depth);
}

function renderCommonTemplate(template) {
  const prefix = getInsulationRelativePrefix();
  return template.replaceAll("__ROOT__", prefix);
}

window.writeHeader = function writeHeader() {
  document.write(renderCommonTemplate(`
    <header>
      <div class="header-wrapper position-fixed top-0 w-100">
        <div class="container-fluid pt-4 opt-lg-6">
          <div class="row justify-content-center mx-0">
            <div class="col-12 col-lg-10 px-0 header-inner">
              <div class="row justify-content-between align-items-center border-bottom border-black w-100 mx-0">
                <div class="col-auto header-logo px-0">
                  <a href="__ROOT__" class="d-block">
                    <img src="__ROOT__assets/images/common/logo_bl.svg" alt="neomafoam_ロゴ" />
                  </a>
                </div>
                <div class="col-auto d-flex align-items-center gap-y-80 px-0">
                  <nav class="header-nav d-none d-1520-block ofs-5 lh-1f">
                    <ul class="d-flex justify-content-end align-items-center gap-y-32 mb-0">
                      <li><a href="__ROOT__index.html" class="link-hover ols-300">TOP</a></li>
                      <li><a href="__ROOT__neoma/index.html" class="link-hover ols-300">ABOUT</a></li>
                      <li><a href="__ROOT__housing/lineup/index.html" class="link-hover ols-300">製品一覧</a></li>
                      <li><a href="__ROOT__jneoma/index.html" class="link-hover ols-300">住宅TOP</a></li>
                      <li><a href="__ROOT__nonresidential/index.html" class="link-hover ols-300">非住宅TOP</a></li>
                      <li><a href="__ROOT__prepare.html" class="link-hover ols-300">お問い合わせ</a></li>
                      <li class="header-dropdown-item position-static">
                        <div class="dropdown">
                          <a href="javascript:void(0)" class="dropdown-toggle d-flex align-items-center gap-2 link-hover" id="navDocumenetDl" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span>資料ダウンロード</span><span class="header-arrow"></span></a>
                          <ul class="dropdown-menu header-dropdown" aria-labelledby="navDocumenetDl">
                            <li><a href="__ROOT__download/wall-construction/index.html" class="dropdown-item rounded-2 ols-100 text-white text-center">壁施工資料</a></li>
                            <li><a href="__ROOT__download/fireproof/index.html" class="dropdown-item rounded-2 ols-100 text-white text-center">防耐火構造認定書</a></li>
                            <li><a href="__ROOT__etc/download.html" class="dropdown-item rounded-2 ols-100 text-white text-center">カタログ・製品情報</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <div class="header-ham d-flex align-items-center">
                    <div id="ham-box" class="position-relative px-0 ham-box">
                      <span id="ham-bar" class="d-block position-absolute ham-bar"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ham-drawer" class="position-fixed h-100 ham-drawer">
          <div class="ham-drawer-wrapper no-scrollbar">
            <div class="container-fluid">
              <div class="row justify-content-center gap-y-xl-100 gx-0">
                <div class="col-12 col-lg-10 col-xxl-auto">
                  <nav class="ff-shuei-go-gin-std-m ofs-5 lh-1f ols-100 ols-lg-300 mb-5 mb-xl-100">
                    <ul class="nav-grid omb-6 omb-lg-9">
                      <li class="nav-item"><a href="__ROOT__index.html" class="link-hover">TOP</a></li>
                      <li class="nav-item"><a href="__ROOT__neoma/index.html" class="link-hover">ABOUT</a></li>
                      <li class="nav-item"><a href="__ROOT__kaitekilab/index.html" class="link-hover">快適空間研究所</a></li>
                      <li class="nav-item"><a href="__ROOT__jneoma/index.html" class="link-hover">住宅TOP</a></li>
                      <li class="nav-item"><a href="__ROOT__nonresidential/index.html" class="link-hover">非住宅TOP</a></li>
                      <li class="nav-item"><a href="__ROOT__housing/lineup/index.html" class="link-hover">製品一覧</a></li>
                      <li class="nav-item"><a href="__ROOT__case-study/index.html" class="link-hover">採用事例一覧</a></li>
                      <li class="nav-item"><a href="__ROOT__pre-auth/neoma-academy/index.html" class="link-hover">ネオマアカデミー</a></li>
                      <li class="nav-item is-wide"><a href="__ROOT__g3way/index.html" class="link-hover">断熱等級7について</a></li>
                      <li class="nav-item"><a href="__ROOT__movie-contents/pre-auth/index.html" class="link-hover">断熱から、学ぶ。</a></li>
                      <li class="nav-item"><a href="__ROOT__news/news.html" class="link-hover">お知らせ</a></li>
                      <li class="nav-item"><a href="__ROOT__neoma/qa/" class="link-hover">よくあるご質問</a></li>
                      <li class="nav-item"><a href="__ROOT__prepare.html" class="link-hover">お問い合わせ</a></li>
                    </ul>
                  </nav>
                  <div class="nav-btn d-lg-grid">
                    <a href="__ROOT__download/wall-construction/index.html" class="bg-main-red opt-3 opb-3 px-3 rounded-10 d-flex justify-content-center align-items-center omb-2 omb-xxl-0">
                      <span class="ofs-5 lh-1f ols-200 text-white text-center">壁施工資料ダウンロード</span>
                    </a>
                    <a href="__ROOT__etc/download.html" class="bg-main-red opt-3 opb-3 px-3 rounded-10 d-flex justify-content-center align-items-center omb-2 omb-xxl-0">
                      <span class="ofs-5 lh-1f ols-200 text-white text-center">カタログ・チラシ<br class="d-none d-lg-block d-xl-none" />ダウンロード</span>
                    </a>
                    <a href="__ROOT__download/fireproof/index.html" class="bg-main-red opt-3 opb-3 px-3 rounded-10 d-flex justify-content-center align-items-center omb-6 omb-lg-2 omb-xxl-0">
                      <span class="ofs-5 lh-1f ols-200 text-white text-center">防耐火構造認定書<br class="d-none d-lg-block d-xl-none" />ダウンロード</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `));
};

window.writeFooter = function writeFooter() {
  document.write(renderCommonTemplate(`
    <footer>
      <div class="container-fluid px-0 px-lg-12 opt-10 opt-lg-14">
        <div class="row justify-content-center mx-0 gx-0 gx-lg-12">
          <div class="col-12 col-lg-10 px-0">
            <a href="__ROOT__" class="d-inline-block px-12 omb-8 omb-lg-15">
              <img src="__ROOT__assets/images/common/logo_std.svg" alt="neomafoam_ロゴ" class="footer-logo" />
            </a>
            <nav class="omb-11 omb-lg-12">
              <div class="footer-nav-wrapper">
                <div class="row gx-0 footer-main-nav ff-shuei-go-gin-std-b ofs-7 lh-1f ols-300 mb-0 omb-lg-9">
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-auto"><a href="__ROOT__index.html" class="link-hover">TOP</a></div>
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-auto"><a href="__ROOT__neoma/index.html" class="link-hover">ABOUT</a></div>
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-auto"><a href="__ROOT__case-study/index.html" class="link-hover">採用事例一覧</a></div>
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-auto"><a href="__ROOT__news/news.html" class="link-hover">お知らせ</a></div>
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-auto"><a href="__ROOT__neoma/qa/" class="link-hover">よくあるご質問</a></div>
                </div>
              </div>
              <div class="footer-nav-grid ofs-5 lh-1f ols-300 gx-0 g-lg-4 px-lg-12 position-relative">
                <div>
                  <ul class="footer-nav-sub mb-0 mb-lg-3">
                    <li class="mb-lg-3"><a href="__ROOT__neoma/about.html" class="link-hover">ネオマフォームの基本性能</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__case-study/index.html" class="link-hover">採用事例一覧</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__prepare.html" class="link-hover">研究開発</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__neoma/factory.html" class="link-hover">生産物流体制</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__prepare.html" class="link-hover">環境について</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__neoma/csr.html" class="link-hover">社会貢献について</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__neoma/story.html" class="link-hover">ネオマヒストリー</a></li>
                    <li class="mb-lg-3"><a href="__ROOT__neoma/cm.html" class="link-hover">広告・CM</a></li>
                  </ul>
                </div>
                <div>
                  <div class="footer-nav-group">
                    <div class="footer-lineup mb-lg-4"><a href="__ROOT__housing/lineup/index.html" class="link-hover">製品一覧</a></div>
                    <button class="footer-nav-trigger gap-3 gap-lg-0 mb-lg-4 d-lg-none" type="button" aria-expanded="false">
                      <span class="ofs-5 lh-1f ols-300 text-start">製品詳細</span>
                      <span class="footer-nav-icon"></span>
                    </button>
                    <div class="footer-nav-panel d-lg-flex gap-y-40 px-4 px-lg-0">
                      <div class="pt-3 pt-lg-0">
                        <p class="text-light-gray border-bottom border-1 border-light-gray pb-1">製品</p>
                        <ul class="footer-nav-list">
                          <li class="mb-3"><a href="__ROOT__housing/lineup/neomafoam.html" class="link-hover">ネオマフォーム</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/sp.html" class="link-hover">ネオマ耐火スパンウォール</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/fs.html" class="link-hover">ネオマフォームFS</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/neomafoam-f.html" class="link-hover">ネオマフォームF</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/board.html" class="link-hover">ネオマ断熱ボード</a></li>
                          <li class="mb-4 mb-lg-3"><a href="__ROOT__housing/lineup/zeus.html" class="link-hover">ネオマゼウス</a></li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-light-gray border-bottom border-1 border-light-gray pb-1">副資材</p>
                        <ul>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/fitbis.html" class="link-hover">ネオマフィットビス</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/jpin.html" class="link-hover">Jピン</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/fittape.html" class="link-hover">ネオマフィットテープ</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/spanbis1.html" class="link-hover">ネオマスパンビスⅠ</a></li>
                          <li class="mb-3"><a href="__ROOT__housing/lineup/spanbis2.html" class="link-hover">ネオマスパンビスⅡ</a></li>
                          <li class="mb-4 mb-lg-3"><a href="__ROOT__housing/lineup/cutsheet.html" class="link-hover">熱膨張性目地材</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="footer-nav-group">
                    <button class="footer-nav-trigger gap-3 gap-lg-0 mb-lg-4 d-lg-none" type="button" aria-expanded="false">
                      <span class="ofs-5 lh-1f ols-300 text-start">住宅</span>
                      <span class="footer-nav-icon"></span>
                    </button>
                    <div class="footer-nav-panel px-4 px-lg-0">
                      <div class="pt-3 pt-lg-0">
                        <ul class="footer-nav-list">
                          <li class="mb-3"><a href="__ROOT__jneoma/index.html" class="link-hover">住宅TOP</a></li>
                          <li class="mb-3"><a href="__ROOT__prepare.html" class="link-hover">外張りについて</a></li>
                          <li class="mb-3"><a href="__ROOT__prepare.html" class="link-hover">補助金について</a></li>
                          <li class="mb-3"><a href="__ROOT__prepare.html" class="link-hover">施工について</a></li>
                          <li class="mb-3"><a href="__ROOT__pre-auth/neoma-academy/index.html" class="link-hover">ネオマアカデミー</a></li>
                          <li class="mb-3"><a href="__ROOT__g3way/index.html" class="link-hover">断熱等級7について</a></li>
                          <li class="mb-4 mb-lg-3"><a href="__ROOT__kaitekilab/index.html" class="link-hover">快適空間研究所</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="footer-nav-group">
                    <button class="footer-nav-trigger gap-3 gap-lg-0 mb-lg-4 d-lg-none" type="button" aria-expanded="false">
                      <span class="ofs-5 lh-1f ols-300 text-start">非住宅</span>
                      <span class="footer-nav-icon"></span>
                    </button>
                    <div class="footer-nav-panel px-4 px-lg-0">
                      <div class="pt-3 pt-lg-0">
                        <ul class="footer-nav-list">
                          <li class="mb-3"><a href="__ROOT__nonresidential/index.html" class="link-hover">非住宅TOP</a></li>
                          <li class="mb-3"><a href="__ROOT__gene/index.html" class="link-hover">一般建築</a></li>
                          <li class="mb-3"><a href="__ROOT__industry/index.html" class="link-hover">産業資材</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-instagram">
                  <a href="https://www.instagram.com/neomafoam_official/" class="link-hover">
                    <img src="__ROOT__assets/images/common/icon-instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </nav>
            <div class="px-12 px-lg-0 omb-6 omb-lg-7">
              <a href="__ROOT__movie-contents/pre-auth/index.html" class="footer-bnr d-flex justify-content-between align-items-center gap-4 bg-main-black rounded-10 opt-2 opt-lg-5 opb-7 opb-lg-5 link-hover">
                <div>
                  <h2 class="ofs-9 ofs-lg-29 lh-1f ols-300 text-white mb-3">断熱から、学ぶ。</h2>
                  <p class="ff-shuei-go-gin-std-l ofs-3 ofs-lg-5 lh-170pct ols-300 text-white mb-0">断熱技術の考え方や、補助金制度など実務に役立つ知識まで、<br class="d-none d-lg-block" />断熱にまつわる学びを映像で集約しています。</p>
                </div>
                <div class="footer-bnr-arrow"></div>
              </a>
            </div>
            <div class="nav-btn d-lg-grid px-12 px-lg-0 omb-10">
              <a href="__ROOT__download/wall-construction/index.html" class="bg-main-red opt-2 opb-2 opt-lg-5 opb-lg-5 px-3 rounded-10 d-flex justify-content-center align-items-center omb-2 omb-lg-0 link-hover">
                <span class="ofs-5 lh-1f ols-200 text-white text-center py-1">壁施工資料<br class="d-none d-lg-block d-xxl-none" />ダウンロード</span>
              </a>
              <a href="__ROOT__etc/download.html" class="bg-main-red opt-2 opb-2 opt-lg-5 opb-lg-5 px-3 rounded-10 d-flex justify-content-center align-items-center omb-2 omb-lg-0 link-hover">
                <span class="ofs-5 lh-1f ols-200 text-white text-center py-1">カタログ・チラシ<br class="d-none d-lg-block d-xxl-none" />ダウンロード</span>
              </a>
              <a href="__ROOT__download/fireproof/index.html" class="bg-main-red opt-2 opb-2 opt-lg-5 opb-lg-5 px-3 rounded-10 d-flex justify-content-center align-items-center link-hover">
                <span class="ofs-5 lh-1f ols-200 text-white text-center py-1">防耐火構造認定書<br class="d-none d-lg-block d-xxl-none" />ダウンロード</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom py-4 opt-lg-5 opb-1 opb-lg-4">
        <div class="container-fluid">
          <div class="row justify-content-center mx-0">
            <div class="col-12 col-xl-11 col-xxl-10 px-0">
              <p class="text-center mb-3 mb-lg-4">
                <a href="https://www.asahikasei-kenzai.com/">
                  <img src="__ROOT__assets/images/common/logo_asahikasei.svg" alt="旭化成建材" class="footer-bottom-logo" />
                </a>
              </p>
              <div class="row justify-content-center">
                <div class="col-12 col-1700-11">
                  <div class="row justify-content-xxl-between align-items-center">
                    <div class="col-12 col-xxl-auto order-2 order-xxl-1 text-center text-xxl-start footer-copyright-wrapper">
                      <span class="footer-copyright d-flex flex-column flex-xxl-row ols-100">
                        <span>Copyright ©️ Asahi Kasei Construction Materials </span>
                        <span>Corporation. All rights reserved.</span>
                      </span>
                    </div>
                    <div class="col-12 col-xxl-auto order-1 order-xxl-2 mb-4 mb-xxl-0 px-xxl-0">
                      <nav class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-0">
                        <span class="d-inline-flex flex-wrap gap-x-3 ofs-3 lh-1f ols-100 mb-0 footer-bottom-nav-top">
                          <span class="d-inline-block"><a href="https://www.asahikasei-kenzai.com/reg/" class="px-3 link-hover">ご利用条件</a></span>
                          <span class="d-inline-block"><a href="https://www.asahikasei-kenzai.com/policy/corporate.html" class="px-3 link-hover">プライバシーポリシー</a></span>
                        </span>
                        <span class="d-inline-flex flex-wrap gap-x-3 ofs-3 lh-1f ols-100 mb-0 footer-bottom-nav-btm">
                          <span class="d-inline-block"><a href="https://www.asahikasei-kenzai.com/company/" class="px-3 link-hover">企業情報</a></span>
                          <span class="d-inline-block"><a href="https://www.asahikasei-kenzai.com/" class="px-3 link-hover">旭化成グループトップ</a></span>
                        </span>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `));
};

const navBtn = document.getElementById("ham-box"),
  navBody = document.getElementById("ham-drawer");
const navToggle = () => {
  navBtn.classList.toggle("is-active");
  navBody.classList.toggle("is-active");
  document.documentElement.classList.toggle("is-fixed");
};
if (navBtn && navBody) {
  navBtn.addEventListener("click", navToggle);
}


document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.header-dropdown-item .dropdown');
  if (!dropdown) return;

  const toggle = dropdown.querySelector('.dropdown-toggle');
  const items = dropdown.querySelectorAll('.dropdown-item');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
      instance.hide();

      item.blur();
      toggle.blur();
    });
  });
});


/*---------------------------------------------------
 footer
----------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll(".footer-nav-group");

  groups.forEach((group) => {
    const trigger = group.querySelector(".footer-nav-trigger");

    if (!trigger) return;

    trigger.addEventListener("click", () => {
      if (window.innerWidth >= 992) return;

      const isOpen = group.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
});


/*---------------------------------------------------
 製品詳細等　タブ
----------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const rootIds = ["product-detail", "jneoma-roof-detail", "jneoma-wall-detail"];

  rootIds.forEach((id) => {
    const root = document.getElementById(id);
    if (!root) return;

    const btns = root.querySelectorAll("[data-prod-tab]");
    const areas = root.querySelectorAll("[data-prod-area]");

    const show = (name) => {
      if (!name) return;

      btns.forEach((b) => {
        b.classList.toggle("selected", b.dataset.prodTab === name);
      });

      areas.forEach((a) => {
        a.hidden = a.dataset.prodArea !== name;
      });
    };

    root.addEventListener("click", (e) => {
      const el = e.target.closest("[data-prod-tab],[data-prod-link]");
      if (!el || !root.contains(el)) return;

      e.preventDefault();

      show(el.dataset.prodTab || el.dataset.prodLink);
    });

    // 初期表示
    show(btns[0]?.dataset.prodTab || "specs");

    // 初期表示右タブ（後で上に戻す）
    // show(btns[1]?.dataset.prodTab);
  });
});

/*---------------------------------------------------
 製品一覧タブ
----------------------------------------------------*/
const productLists = document.getElementById("productLists");
if (productLists) {
  document.addEventListener("DOMContentLoaded", function scrollToID() {
    const tabBtnGeneral = document.getElementById("general");
    const tabBtnSubsidiary = document.getElementById("subsidiary");
    const tabGeneral = "#general";
    const tabSubsidiary = "#subsidiary";

    const areaGeneral = document.getElementById("areaGeneral");
    const areaSubsidiary = document.getElementById("areaSubsidiary");

    const currentURL = location.hash;

    if (currentURL == tabGeneral) {
      console.log(currentURL);
      tabBtnSubsidiary.classList.remove("selected");
      tabBtnGeneral.classList.add("selected");
      areaSubsidiary.hidden = true;
      areaGeneral.hidden = false;
    } else if (currentURL == tabSubsidiary) {
      console.log(currentURL);
      tabBtnGeneral.classList.remove("selected");
      tabBtnSubsidiary.classList.add("selected");
      areaGeneral.hidden = true;
      areaSubsidiary.hidden = false;
    }
  });
}

/*---------------------------------------------------
 表のスクロールヒント
----------------------------------------------------*/

new ScrollHint(".table-scroll", {
  suggestiveShadow: true,
  i18n: {
    scrollable: "横にスクロールできます",
  },
});

new ScrollHint(".news-table-scroll", {
  suggestiveShadow: true,
  i18n: {
    scrollable: "横にスクロールできます",
  },
});