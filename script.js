const selectedPlaces = [
  {
    id: "goui-reservoir",
    title: "구이저수지",
    query: "구이저수지 완주",
    address: "전북특별자치도 완주군 구이면 구이로 1488-31",
    intro: "완주 구이면에 있는 대표 저수지로, 수변 경관과 휴식 동선을 함께 활용하기 좋은 자전거 챌린지 거점입니다.",
    fallback: [35.7398, 127.1032]
  },
  {
    id: "gosan-miso-market",
    title: "완주군 미소시장",
    query: "고산미소시장 완주",
    address: "전북특별자치도 완주군 고산면 남봉로 134",
    intro: "완주 고산면의 지역 시장 거점으로, 로컬 상권과 챌린지 방문 인증을 연결하기 좋은 장소입니다.",
    fallback: [35.9751, 127.2027]
  },
  { id: "jbnu-museum", title: "전북대 자연사박물관", query: "전북대 자연사박물관", intro: "대학 캠퍼스 안에서 자연사 자료를 만날 수 있는 교육형 방문 거점입니다.", fallback: [35.8473, 127.1293] },
  { id: "jeonbuk-env", title: "전북환경운동연합", query: "전북환경운동연합 전주", intro: "지역 환경 활동과 탄소 감축 메시지를 연결하기 좋은 시민사회 거점입니다.", fallback: [35.8185, 127.1537] },
  { id: "songgwangsa", title: "완주군 송광사", query: "송광사 완주", intro: "완주 소양면의 역사 사찰로, 숲길과 문화유산을 함께 경험할 수 있는 코스 거점입니다.", fallback: [35.9114, 127.1732] },
  { id: "sangjang-park", title: "봉동 상장기공원", query: "상장기공원 봉동", intro: "봉동 생활권에서 쉬어가기 좋은 근린공원형 인증 장소입니다.", fallback: [35.9415, 127.1254] },
  { id: "gijije", title: "기지제", query: "기지제 전주", intro: "혁신도시 주변 수변 경관을 볼 수 있는 산책·라이딩 거점입니다.", fallback: [35.8077, 127.1018] },
  { id: "kkotsingi", title: "전주시 공영자전거 백제교대여소", query: "전주시 공영자전거 백제교대여소", intro: "공영자전거와 바로 연결되는 대여 거점으로 챌린지 시작점으로 활용하기 좋습니다.", fallback: [35.8505, 127.124] },
  { id: "jeonju-arboretum", title: "전주수목원", query: "전주수목원", intro: "다양한 식물과 산책로가 있는 녹지형 장소로 친환경 챌린지 메시지와 잘 어울립니다.", fallback: [35.8371, 127.0406] },
  {
    id: "saechangi-bridge",
    title: "새창이다리",
    query: "만경강교 옆 새창이다리",
    address: "만경강교 옆 새창이다리",
    preferKeyword: true,
    fixedCoords: [35.9109, 126.8401],
    intro: "만경강교 바로 옆에 놓인 새창이다리 실교량 위치 기준으로 표시합니다.",
    fallback: [35.9109, 126.8401]
  },
  { id: "omokdae", title: "오목대", query: "오목대 전주", intro: "전주 한옥마을을 내려다볼 수 있는 역사·전망 거점입니다.", fallback: [35.8113, 127.1538] },
  { id: "sanggwan-forest", title: "상관역", query: "상관역 완주", intro: "완주 상관면으로 이어지는 철도 교통 거점입니다.", fallback: [35.7676, 127.2055] },
  { id: "march-first", title: "전주3.1운동발상지", query: "전주 3.1운동 발상지", intro: "지역 독립운동의 의미를 담은 역사형 인증 장소입니다.", fallback: [35.8199, 127.1442] },
  { id: "bibijeong", title: "비비정", query: "비비정 완주", intro: "만경강 풍경과 함께 쉬어갈 수 있는 완주 대표 전망 거점입니다.", fallback: [35.8687, 127.0744] },
  { id: "woosuk-hospital", title: "우석대학교 부속 전주한방병원", query: "우석대학교 부속 전주한방병원", intro: "지역 의료·건강 테마와 연결할 수 있는 도심 거점입니다.", fallback: [35.8137, 127.0892] },
  { id: "sebyeongho", title: "세병호", query: "세병호 전주", intro: "전주 북부권의 수변 경관을 즐길 수 있는 호수형 방문 장소입니다.", fallback: [35.8816, 127.1461] },
  {
    id: "yeoyu-cafe",
    title: "무인카페여유",
    query: "구이앤금우통신 완주군 구이면 구이로 1575",
    address: "전북특별자치도 완주군 구이면 구이로 1575 구이앤금우통신",
    intro: "구이로 라이딩 중 쉬어가기 좋은 무인카페형 휴식 거점입니다.",
    fallback: [35.7449, 127.1048]
  },
  {
    id: "jeonju-archive",
    title: "전주시민기록관",
    query: "우아동성당 전주",
    address: "전주시민기록관 인근 우아동성당",
    intro: "전주 시민의 생활 기록과 인근 생활권을 함께 연결해 볼 수 있는 문화·기록 거점입니다.",
    fallback: [35.8339, 127.1714]
  },
  { id: "iksan-samil", title: "익산 삼일교회(참새방앗간)", query: "삼일교회 익산", intro: "익산권 커뮤니티 방문 지점으로 확장 코스와 연결할 수 있는 장소입니다.", fallback: [35.9445, 126.9546] },
  { id: "wind-road", title: "바람쐬는길", query: "바람쐬는길 전주", intro: "가볍게 이동하며 쉬어갈 수 있는 산책·라이딩 친화형 길입니다.", fallback: [35.8271, 127.1519] },
  { id: "ajung-library", title: "아중호수도서관", query: "아중호수도서관", intro: "아중호수와 독서 문화가 만나는 생활문화형 인증 장소입니다.", fallback: [35.8328, 127.1768] },
  { id: "jeonju-fm", title: "전주공동체라디오 전주FM", query: "전주공동체라디오 전주FM", intro: "지역 미디어와 시민 참여 메시지를 연결할 수 있는 커뮤니티 거점입니다.", fallback: [35.8148, 127.1211] },
  { id: "daedeok-elementary", title: "대덕초등학교", query: "대덕초등학교 완주", intro: "지역 생활권을 연결하는 교육 시설 주변 위치 표시 지점입니다.", fallback: [35.9139, 127.2386] },
  { id: "chucheondae", title: "추천대", query: "추천대 완주", intro: "완주권 역사·경관 동선과 연결할 수 있는 방문 거점입니다.", fallback: [35.9589, 127.2656] },
  { id: "deokjin-park", title: "덕진공원", query: "덕진공원", intro: "전주 대표 공원으로 수변 경관과 휴식 동선이 좋은 시민 친화형 장소입니다.", fallback: [35.8482, 127.1201] },
  {
    id: "volunteer-center",
    title: "전주시 자원봉사센터",
    query: "전주시자원봉사센터",
    address: "전북특별자치도 전주시 덕진구 전주천동로 455",
    intro: "시민 참여와 봉사 활동을 챌린지 캠페인과 연결하기 좋은 거점입니다.",
    fallback: [35.8331, 127.1108]
  },
  { id: "medical-coop", title: "전주의료사협빌딩", query: "전주의료사협빌딩", intro: "건강한 이동과 지역 의료 협동의 메시지를 함께 담을 수 있는 장소입니다.", fallback: [35.8176, 127.1104] },
  {
    id: "eoeun-bridge",
    title: "어은 쌍다리",
    query: "어은쌍다리 전주 진북동",
    address: "전북특별자치도 전주시 덕진구 진북동 1124-169",
    preferKeyword: true,
    intro: "전주천을 사이에 두고 어은골과 중앙동을 잇는 오래된 교량형 인증 지점입니다.",
    fallback: [35.8248, 127.1348]
  },
  { id: "hari-bridge", title: "하리교", query: "하리교 전주", intro: "전주 남부권 이동 동선과 연결되는 교량형 위치 표시 장소입니다.", fallback: [35.7861, 127.1143] },
  { id: "bike-box", title: "바이크박스", query: "바이크박스 전주", intro: "자전거 이용자에게 친숙한 정비·라이딩 관련 거점으로 활용할 수 있습니다.", fallback: [35.8201, 127.1501] },
  { id: "palbok-art", title: "팔복예술공장", query: "팔복예술공장", intro: "산업공간을 문화예술 거점으로 재생한 전주 대표 복합문화 장소입니다.", fallback: [35.8464, 127.1029] }
];

const routePlaces = [
  {
    id: "jeonju-hanok",
    title: "전주 한옥길 챌린지",
    city: "전주",
    region: "전라권",
    description:
      "전주천과 한옥마을을 잇는 시즌2 메인 루트입니다. 전북 권역 탐색의 기준 루트로 사용합니다.",
    points: [
      [35.842, 127.101],
      [35.838, 127.118],
      [35.832, 127.131],
      [35.824, 127.148],
      [35.818, 127.165],
      [35.806, 127.186],
      [35.795, 127.197]
    ],
    color: "#ff9158"
  }
];

const JEONBUK_RECT = "126.45,35.35,127.85,36.20";
const MUNICIPAL_BOUNDARY_URLS = [
  "https://cdn.jsdelivr.net/gh/southkorea/southkorea-maps@master/kostat/2018/json/skorea-municipalities-2018-geo.json",
  "https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-municipalities-2018-geo.json"
];
const MUNICIPALITY_STROKE_COLORS = {
  jeonju: "#16967f",
  wanju: "#2f7eff"
};
const challengeRoutes = routePlaces.filter((route) => route.id === "jeonju-hanok");
const WEEK_COUNT = 4;
const TREASURE_PLACES_PER_WEEK = 4;
const TREASURE_PLAN_STORAGE_KEY = "bicycle-challenge-weekly-treasures";
const CERTIFICATION_STORAGE_KEY = "bicycle-challenge-certifications";
const CARBON_KG_PER_KM = 0.21;
const BAND_CERTIFICATION_URL =
  "https://www.band.us/band/94500191/hashtag/%EB%B3%B4%EB%AC%BC%EC%B0%BE%EA%B8%B0_%EA%B2%8C%EC%8B%9C%ED%8C%90";
const FIXED_WEEKLY_TREASURE_PLAN = [
  {
    week: 1,
    revealDate: "2026-04-24",
    revealLabel: "4월 24일",
    placeIds: [
      "saechangi-bridge",
      "iksan-samil",
      "jeonbuk-env",
      "sebyeongho",
      "medical-coop",
      "omokdae",
      "bike-box",
      "jeonju-fm"
    ]
  },
  {
    week: 2,
    revealDate: "2026-04-25",
    revealLabel: "4월 25일",
    placeIds: [
      "goui-reservoir",
      "daedeok-elementary",
      "yeoyu-cafe",
      "songgwangsa",
      "deokjin-park",
      "woosuk-hospital",
      "palbok-art",
      "hari-bridge"
    ]
  },
  {
    week: 3,
    revealDate: "2026-04-26",
    revealLabel: "4월 26일",
    placeIds: [
      "sangjang-park",
      "gosan-miso-market",
      "sanggwan-forest",
      "eoeun-bridge",
      "bibijeong",
      "wind-road",
      "jeonju-arboretum",
      "volunteer-center"
    ]
  },
  {
    week: 4,
    revealDate: "2026-04-27",
    revealLabel: "4월 27일",
    placeIds: [
      "jbnu-museum",
      "gijije",
      "kkotsingi",
      "march-first",
      "jeonju-archive",
      "ajung-library",
      "chucheondae"
    ]
  }
];
let weeklyTreasurePlanCache = null;

const topMenus = {
  intro: {
    title: "챌린지 소개",
    items: [
      {
        id: "intro-main-image",
        label: "메인 이미지",
        summary: "시즌2 대표 화면",
        tag: "소개",
        detailType: "main-image",
        detailTitle: "탄소를 감축하는 자전거 챌린지 season2",
        detailBody:
          "첫 화면에 표시되는 메인 이미지를 챌린지 소개에서도 다시 확인할 수 있습니다."
      }
    ]
  },
  method: {
    title: "참여방법",
    items: [
      {
        id: "method-treasure",
        label: "1. 보물찾기 확인",
        summary: "주차별 공개 장소 확인",
        tag: "STEP",
        detailTitle: "보물찾기 장소 확인",
        detailBody:
          "보물찾기 메뉴에서 1주차부터 4주차까지 공개된 장소를 확인합니다. 공개된 주차를 누르면 장소 이름이 아래로 나오고, 장소명을 누르면 지도에서 위치를 볼 수 있습니다."
      },
      {
        id: "method-certify",
        label: "2. QR코드 인증",
        summary: "QR, 사진, 후기 등록",
        tag: "STEP",
        detailTitle: "공개 장소에서 QR코드 인증",
        detailBody:
          "공개된 장소에 도착하면 현장 QR코드를 찍어 인증 페이지를 엽니다. QR코드 인증과 함께 인증사진, 방문 후기, 참가거리를 입력하면 챌린지 참여 기록으로 남길 수 있습니다."
      },
      {
        id: "method-carbon",
        label: "3. 탄소절감 확인",
        summary: "등록 기록 기반 계산",
        tag: "STEP",
        detailTitle: "탄소절감량 확인",
        detailBody:
          "입력한 참가거리를 기준으로 탄소감축 메뉴에서 주차별 감축량을 확인합니다. 계산 기준은 1km당 0.21kg CO2 절감입니다."
      }
    ]
  },
  event: {
    title: "이벤트",
    items: [
      {
        id: "event-round-1",
        label: "1차 이벤트",
        summary: "무료커피받기 이벤트",
        tag: "1차",
        detailType: "event-promo",
        action: { type: "focus-place", placeId: "sangjang-park" },
        detailTitle: "봉동 상장기공원 인증하고 무료 커피 받기",
        detailBody:
          "봉동 상장기공원에서 보물찾기 인증을 완료하고 인근 커피숍에 방문하면 선착순 무료 커피 혜택을 받을 수 있습니다.",
        eventPlaceId: "sangjang-park",
        eventDate: "2026.05.04 - 2026.05.10",
        eventReward: "선착순 무료 커피 30잔"
      },
      {
        id: "event-round-2",
        label: "2차 이벤트",
        summary: "재방문 인증 이벤트",
        tag: "2차",
        detailType: "event-guide",
        action: { type: "focus-place", placeId: "sangjang-park" },
        detailTitle: "2차 이벤트 안내",
        detailBody:
          "2차 이벤트는 2026년 5월 11일부터 5월 18일까지 운영 예정입니다. 자세한 혜택과 인증 방식은 운영 공지에서 안내합니다.",
        eventPlaceId: "sangjang-park",
        eventDate: "2026.05.11 - 2026.05.18"
      },
      {
        id: "event-round-3",
        label: "3차 이벤트",
        summary: "마감 주간 이벤트",
        tag: "3차",
        detailType: "event-guide",
        action: { type: "focus-place", placeId: "sangjang-park" },
        detailTitle: "3차 이벤트 안내",
        detailBody:
          "3차 이벤트는 2026년 5월 19일부터 5월 31일까지 운영 예정입니다. 시즌2 마감 주간 참여자를 위한 현장 혜택을 안내할 수 있습니다.",
        eventPlaceId: "sangjang-park",
        eventDate: "2026.05.19 - 2026.05.31"
      }
    ]
  },
  community: {
    title: "커뮤니티",
    items: [
      {
        id: "community-faq",
        label: "FAQ",
        summary: "자주 묻는 질문",
        tag: "FAQ",
        detailTitle: "자주 묻는 질문",
        detailBody:
          "참여 방법, 장소 공개 일정, QR코드 인증, 탄소감축량 계산 기준처럼 참가자가 자주 궁금해하는 내용을 정리해 안내합니다."
      },
      {
        id: "community-qna",
        label: "Q&A",
        summary: "문의와 답변",
        tag: "Q&A",
        detailTitle: "질문과 답변",
        detailBody:
          "참가 중 궁금한 점이나 장소 인증 관련 문의를 남기고 운영자가 답변할 수 있는 공간으로 활용합니다."
      },
      {
        id: "community-notice",
        label: "공지",
        summary: "가끔 올라오는 안내",
        tag: "공지",
        detailTitle: "운영 공지",
        detailBody:
          "이벤트 일정, 장소 변경, QR코드 인증 안내, 커피 제공 수량 마감처럼 필요한 소식을 가끔 공지하는 영역입니다."
      }
    ]
  },
  login: {
    title: "로그인",
    items: [
      {
        id: "login-panel",
        label: "참가자 로그인",
        summary: "아이디와 비밀번호 입력",
        tag: "LOGIN",
        detailType: "login",
        detailTitle: "참가자 로그인",
        detailBody:
          "현재는 화면 구성용 로그인 폼입니다. 실제 회원 기능은 별도 서버 또는 인증 서비스 연결이 필요합니다."
      }
    ]
  }
};

const sideMenus = {
  course: {
    title: "코스검색",
    items: []
  },
  treasure: {
    title: "보물찾기",
    getItems: () =>
      getWeeklyTreasurePlan().map((week) => ({
        id: `treasure-week-${week.week}`,
        label: `${week.week}주차`,
        summary: `${week.places.length}개 랜덤 공개 장소`,
        tag: "공개",
        action: { type: "focus-week", week: week.week },
        detailType: "weekly-treasure",
        week: week.week,
        detailTitle: `${week.week}주차 보물찾기`,
        detailBody: "이번 주차에 공개된 장소를 확인하고 지도에서 위치를 찾아보세요."
      }))
  },
  certify: {
    title: "인증하기",
    getItems: () =>
      getWeeklyTreasurePlan().map((week) => ({
        id: `cert-week-${week.week}`,
        label: `${week.week}주차`,
        summary: "인증사진, 주행거리, 댓글 등록",
        tag: "인증",
        action: { type: "focus-week", week: week.week },
        detailType: "weekly-certification",
        week: week.week,
        detailTitle: `${week.week}주차 인증하기`,
        detailBody: "공개된 장소별로 인증사진, 주행거리, 댓글을 등록합니다."
      }))
  },
  carbon: {
    title: "탄소절감",
    getItems: () =>
      getWeeklyTreasurePlan().map((week) => ({
        id: `carbon-week-${week.week}`,
        label: `${week.week}주차`,
        summary: "인증 기록 기반 절감량",
        tag: "CO2",
        action: { type: "focus-week", week: week.week },
        detailType: "weekly-carbon",
        week: week.week,
        detailTitle: `${week.week}주차 탄소절감`,
        detailBody: "인증하기에 등록된 주행거리로 예상 탄소절감량을 계산합니다."
      }))
  }
};

const state = {
  selectedRouteId: window.DEFAULT_ROUTE_ID || "jeonju-hanok",
  currentMapType: "ROADMAP",
  openTopMenuId: "intro",
  openSideMenuId: null,
  routeSearchDestination: null,
  routeSearchUrl: ""
};

const elements = {
  homeIntro: document.getElementById("homeIntro"),
  map: document.getElementById("map"),
  mapStage: document.querySelector(".map-stage"),
  mapStatus: document.getElementById("mapStatus"),
  placeCard: document.getElementById("placeCard"),
  routeFinder: document.getElementById("routeFinder"),
  routeSearchForm: document.getElementById("routeSearchForm"),
  routeSearchInput: document.getElementById("routeSearchInput"),
  routeSearchMeta: document.getElementById("routeSearchMeta"),
  routeSearchActions: document.getElementById("routeSearchActions"),
  routeOpenButton: document.getElementById("routeOpenButton"),
  routeLocateButton: document.getElementById("routeLocateButton"),
  keyNotice: document.getElementById("keyNotice"),
  topPanel: {
    root: document.querySelector(".top-panel"),
    title: document.getElementById("topPanelTitle"),
    list: document.getElementById("topPanelList"),
    detail: document.getElementById("topPanelDetail")
  },
  sidePanel: {
    root: document.querySelector(".side-panel"),
    title: document.getElementById("sidePanelTitle"),
    list: document.getElementById("sidePanelList"),
    detail: document.getElementById("sidePanelDetail")
  },
  topButtons: document.querySelectorAll("[data-top-menu]"),
  sideButtons: document.querySelectorAll("[data-side-menu]"),
  mapTypeButtons: document.querySelectorAll("[data-map-type]"),
  closeButtons: document.querySelectorAll("[data-close-panel]")
};

const mapState = {
  map: null,
  routePolylines: new Map(),
  adminBoundaryPolygons: [],
  selectedPlaceMarkers: [],
  placePopupOverlay: null,
  currentLocation: null,
  currentLocationMarker: null,
  routeDestinationMarker: null,
  routePreviewLine: null
};

bootstrap();

async function bootstrap() {
  bindHomeIntro();
  bindMenuButtons();
  bindOverlayDismiss();
  bindDraggablePanels();
  bindMapTypeButtons();
  bindRouteFinder();
  syncStaticMenuLabels();
  renderTopPanel(state.openTopMenuId);
  updateMapTypeButtons();
  bindViewportState();
  applyMobileInitialState();
  elements.keyNotice.hidden = true;

  const appKey = window.KAKAO_MAP_APPKEY;
  if (!appKey || appKey === "YOUR_KAKAO_JAVASCRIPT_KEY") {
    elements.keyNotice.hidden = true;
    updateMapStatus("카카오맵 키를 설정하면 지도가 표시됩니다.");
    renderMapFallback();
    return;
  }

  try {
    await loadKakaoMapsSdk(appKey);
    initMap();
  } catch (error) {
    elements.keyNotice.hidden = true;
    updateMapStatus("카카오맵 로딩에 실패했습니다.");
    renderMapFallback();
  }
}

function syncStaticMenuLabels() {
  const sideLabels = {
    course: "코스검색",
    treasure: "보물찾기",
    certify: "인증하기",
    carbon: "탄소감축"
  };

  Object.entries(sideLabels).forEach(([menuId, label]) => {
    const buttonLabel = document.querySelector(
      `.rail-button[data-side-menu="${menuId}"] > span:last-child`
    );
    if (buttonLabel) {
      buttonLabel.textContent = label;
    }
  });
}

function bindViewportState() {
  const mobileViewport = window.matchMedia("(max-width: 680px)");
  const handleViewport = (event) => {
    if (event.matches) {
      applyMobileInitialState();
    }
  };

  if (typeof mobileViewport.addEventListener === "function") {
    mobileViewport.addEventListener("change", handleViewport);
    return;
  }

  if (typeof mobileViewport.addListener === "function") {
    mobileViewport.addListener(handleViewport);
  }
}

function applyMobileInitialState() {
  if (!window.matchMedia("(max-width: 680px)").matches) {
    return;
  }

  state.openTopMenuId = null;
  elements.topPanel.root.hidden = true;
  closeSidePanel();
  updateActiveButtons();
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 680px)").matches;
}

function renderMapFallback() {
  elements.map.innerHTML = `
    <div style="display:grid;place-items:center;height:100%;padding:24px;color:#17322f;background:linear-gradient(180deg,#e7efe9 0%,#dde8e0 100%);font-weight:700;text-align:center;">
      카카오맵 JavaScript 키와 도메인 등록이 정상일 때 이 위치에 시즌2 지도가 표시됩니다.
    </div>
  `;
}

function loadKakaoMapsSdk(appKey) {
  return new Promise((resolve, reject) => {
    if (window.kakao?.maps) {
      window.kakao.maps.load(resolve);
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${appKey}&libraries=services`;
    script.onload = () => window.kakao.maps.load(resolve);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initMap() {
  const map = new kakao.maps.Map(elements.map, {
    center: new kakao.maps.LatLng(35.8242, 127.148),
    level: 9,
    mapTypeId: getKakaoMapTypeId(state.currentMapType)
  });

  mapState.map = map;
  elements.keyNotice.hidden = true;
  requestCurrentLocation({ panTo: false, silent: true });
  kakao.maps.event.addListener(map, "click", () => {
    closePlacePopup();
  });

  renderMunicipalityBoundaries();
  renderSelectedPlaces();
  selectRoute(state.selectedRouteId, { fitBounds: true, silentStatus: true });
}

async function renderMunicipalityBoundaries() {
  if (!mapState.map || !window.kakao?.maps?.Polygon || typeof fetch !== "function") {
    return;
  }

  clearMunicipalityBoundaries();

  try {
    const geojson = await fetchMunicipalityGeoJson();
    const features = Array.isArray(geojson?.features) ? geojson.features : [];

    features.forEach((feature) => {
      const strokeColor = getMunicipalityStrokeColor(getMunicipalityName(feature));
      if (!strokeColor) {
        return;
      }

      const polygons = geometryToPolygonPaths(feature?.geometry);
      polygons.forEach((path) => {
        const polygon = new kakao.maps.Polygon({
          path,
          strokeWeight: 3,
          strokeColor,
          strokeOpacity: 0.9,
          strokeStyle: "solid",
          fillOpacity: 0,
          zIndex: 2
        });

        polygon.setMap(mapState.map);
        mapState.adminBoundaryPolygons.push(polygon);
      });
    });
  } catch (error) {
    console.warn("Failed to render municipality boundaries.", error);
  }
}

async function fetchMunicipalityGeoJson() {
  for (const url of MUNICIPAL_BOUNDARY_URLS) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        continue;
      }

      return await response.json();
    } catch (error) {
      console.warn("Boundary fetch source failed.", url, error);
    }
  }

  throw new Error("Unable to load municipality boundary GeoJSON.");
}

function clearMunicipalityBoundaries() {
  mapState.adminBoundaryPolygons.forEach((polygon) => polygon.setMap(null));
  mapState.adminBoundaryPolygons = [];
}

function getMunicipalityName(feature) {
  const properties = feature?.properties || {};
  return (
    properties.name ||
    properties.adm_nm ||
    properties.SIG_KOR_NM ||
    properties.sig_kor_nm ||
    ""
  );
}

function getMunicipalityStrokeColor(name) {
  if (!name) {
    return "";
  }

  if (name.includes("\uC644\uC8FC\uAD70")) {
    return MUNICIPALITY_STROKE_COLORS.wanju;
  }

  if (name.includes("\uC804\uC8FC\uC2DC")) {
    return MUNICIPALITY_STROKE_COLORS.jeonju;
  }

  return "";
}

function geometryToPolygonPaths(geometry) {
  if (!geometry?.type || !Array.isArray(geometry.coordinates)) {
    return [];
  }

  if (geometry.type === "Polygon") {
    return [convertPolygonRings(geometry.coordinates)];
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map((polygon) => convertPolygonRings(polygon));
  }

  return [];
}

function convertPolygonRings(rings) {
  const convertedRings = rings.map((ring) =>
    ring.map(([lng, lat]) => new kakao.maps.LatLng(lat, lng))
  );

  return convertedRings.length === 1 ? convertedRings[0] : convertedRings;
}

function renderSelectedPlaces() {
  const visiblePlaces = getVisibleMapPlaces();

  if (!mapState.map || !window.kakao?.maps?.services) {
    createSelectedPlaceMarkers(visiblePlaces.map((place) => ({ ...place, coords: place.fallback })));
    return;
  }

  const geocoder = new kakao.maps.services.Geocoder();
  const placesService = new kakao.maps.services.Places();

  resolveSelectedPlaces(visiblePlaces, geocoder, placesService).then((places) => {
    createSelectedPlaceMarkers(places);
  });
}

async function resolveSelectedPlaces(places, geocoder, placesService) {
  const resolved = [];

  for (const place of places) {
    const coords = await resolvePlaceCoords(place, geocoder, placesService);
    resolved.push({
      ...place,
      coords: coords || place.fallback
    });
  }

  return resolved;
}

function resolvePlaceCoords(place, geocoder, placesService) {
  return new Promise((resolve) => {
    if (Array.isArray(place.fixedCoords) && place.fixedCoords.length === 2) {
      resolve(place.fixedCoords);
      return;
    }

    const tryKeyword = () => {
      if (!place.query) {
        resolve(place.fallback);
        return;
      }

      placesService.keywordSearch(
        place.query,
        (result, status) => {
          if (status === kakao.maps.services.Status.OK && result?.[0]) {
            resolve([Number(result[0].y), Number(result[0].x)]);
            return;
          }

          resolve(place.fallback);
        },
        {
          rect: JEONBUK_RECT,
          size: 5
        }
      );
    };

    if (place.address && !place.preferKeyword) {
      geocoder.addressSearch(place.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK && result?.[0]) {
          resolve([Number(result[0].y), Number(result[0].x)]);
          return;
        }

        tryKeyword();
      });
      return;
    }

    tryKeyword();
  });
}

function getPlaceAddressText(place) {
  return place.address || place.query;
}

function getCompactPlaceIntro(place) {
  const intro = String(place.intro || "자전거 챌린지 인증 장소입니다.").trim();
  const compact = intro.replace(/\s+/g, " ");

  if (compact.length <= 42) {
    return compact;
  }

  return `${compact.slice(0, 42).trim()}...`;
}

function getPlaceTravelCarbonText(place) {
  const records = getCertificationRecords().filter((record) => record.placeId === place.id);
  const totalDistanceKm = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);

  if (!records.length || totalDistanceKm <= 0) {
    return "참가 거리 입력 후 탄소감축량 표시";
  }

  return `누적 탄소감축 ${formatCarbon(totalDistanceKm * CARBON_KG_PER_KM)} · 입력 ${formatKm(
    totalDistanceKm
  )}`;
}

function closePlacePopup() {
  if (mapState.placePopupOverlay) {
    mapState.placePopupOverlay.setMap(null);
    mapState.placePopupOverlay = null;
  }
}

function openPlacePopup(place, position) {
  if (!mapState.map || !window.kakao?.maps) {
    return;
  }

  closePlacePopup();
  const content = createPlacePopupContent(place);
  const overlay = new kakao.maps.CustomOverlay({
    position,
    content,
    clickable: true,
    xAnchor: 0.5,
    yAnchor: 1.18
  });

  overlay.setMap(mapState.map);
  mapState.placePopupOverlay = overlay;
}

function createPlacePopupContent(place) {
  const container = document.createElement("div");
  container.className = "place-popup";
  const weekLabels = getWeeksForPlace(place.id).map((week) => `${week}주차`);
  const carbonText = getPlaceTravelCarbonText(place);
  const normalizedWeekLabels = getWeeksForPlace(place.id).map((week) => `${week}주차`);

  container.innerHTML = `
    <button class="place-popup-close" type="button" aria-label="장소 팝업 닫기">×</button>
    <div class="place-popup-main">
      <div class="place-popup-copy">
        <div class="place-popup-title-row">
          <strong class="place-popup-title">${escapeHtml(place.title)}</strong>
          <span class="place-popup-pin" aria-hidden="true">●</span>
        </div>
        <span class="place-popup-kicker">보물찾기 인증 장소</span>
        <p class="place-popup-carbon">${escapeHtml(carbonText)}</p>
        ${
          weekLabels.length
            ? `<div class="place-popup-weeks">${weekLabels
                .map((label) => `<span>${escapeHtml(label)}</span>`)
                .join("")}</div>`
            : ""
        }
      </div>
    </div>
    <div class="place-popup-actions">
      <button type="button" class="place-popup-action place-popup-action--brand" data-popup-distance>참가거리</button>
      <button type="button" class="place-popup-action place-popup-action--primary" data-popup-route>길찾기</button>
      <button type="button" class="place-popup-action" data-popup-detail>상세설명</button>
    </div>
    <div class="place-popup-tail" aria-hidden="true"></div>
  `;

  const closePopup = () => {
    closePlacePopup();
  };

  container.querySelector(".place-popup-close")?.setAttribute("aria-label", "장소 팝업 닫기");
  container.querySelector(".place-popup-close")?.replaceChildren("×");
  container.querySelector(".place-popup-pin")?.replaceChildren("●");
  container.querySelector(".place-popup-kicker")?.remove();
  container.querySelector("[data-popup-distance]")?.replaceChildren("참가거리");
  container.querySelector("[data-popup-route]")?.replaceChildren("길찾기");
  container.querySelector("[data-popup-detail]")?.replaceChildren("상세설명");
  container.querySelectorAll(".place-popup-weeks span").forEach((span, index) => {
    span.textContent = normalizedWeekLabels[index] || span.textContent;
  });
  container.querySelector(".place-popup-close")?.addEventListener("click", closePopup);
  container.querySelectorAll("[data-popup-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      showPlaceCard(place);
    });
  });
  container.querySelectorAll("[data-popup-distance]").forEach((button) => {
    button.addEventListener("click", () => {
      showDistanceEntry(place);
    });
  });
  container.querySelectorAll("[data-popup-route]").forEach((button) => {
    button.addEventListener("click", () => {
      openBikeRouteToPlace(place);
    });
  });

  return container;
}

async function openBikeRouteToPlace(place) {
  const currentLocation = mapState.currentLocation || (await requestCurrentLocation({ panTo: false }));
  if (!currentLocation) {
    updateMapStatus("현재 위치를 확인하면 길찾기를 열 수 있습니다.");
    return;
  }

  openExternalRoute(buildKakaoBikeRouteUrl(currentLocation, place.coords));
}

function createSelectedPlaceMarkers(places) {
  if (!mapState.map) {
    return;
  }

  mapState.selectedPlaceMarkers.forEach(({ marker }) => marker.setMap(null));
  closePlacePopup();
  mapState.selectedPlaceMarkers = [];

  places.forEach((place) => {
    const marker = new kakao.maps.Marker({
      map: mapState.map,
      position: new kakao.maps.LatLng(place.coords[0], place.coords[1]),
      title: place.title,
      image: createSelectedPlaceMarkerImage()
    });

    kakao.maps.event.addListener(marker, "click", () => {
      openPlacePopup(place, marker.getPosition());
      updateMapStatus(`${place.title} 위치를 표시하고 있습니다.`, {
        highlightWord: place.title,
        suppressOnMobile: true
      });
    });

    mapState.selectedPlaceMarkers.push({ place, marker });
  });
}

function createSelectedPlaceMarkerImage() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 50 58">
      <path d="M25 6c-9.4 0-17 7.4-17 16.5 0 12.6 17 27.5 17 27.5S42 35.1 42 22.5C42 13.4 34.4 6 25 6Z" fill="#17322f"/>
      <circle cx="25" cy="22.5" r="8.2" fill="#ff8f54"/>
      <circle cx="25" cy="22.5" r="3.5" fill="#ffffff"/>
    </svg>
  `;

  return new kakao.maps.MarkerImage(
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    new kakao.maps.Size(50, 58),
    { offset: new kakao.maps.Point(25, 52) }
  );
}

function selectRoute(routeId, options = {}) {
  state.selectedRouteId = routeId;

  if (!mapState.map) {
    return;
  }

  challengeRoutes.forEach((route) => {
    const polyline = mapState.routePolylines.get(route.id);
    if (!polyline) {
      return;
    }
    const selected = route.id === routeId;
    polyline.setOptions({
      strokeWeight: selected ? 7 : 5,
      strokeOpacity: selected ? 0.95 : 0.34
    });
  });

  if (options.fitBounds) {
    fitRouteBounds(routeId);
  }

  const route = challengeRoutes.find((item) => item.id === routeId);
  if (route && !options.silentStatus) {
    updateMapStatus(`${route.title} · ${route.city} 코스를 보고 있습니다.`);
  }
}

function fitRouteBounds(routeId) {
  const route = challengeRoutes.find((item) => item.id === routeId);
  if (!route || !mapState.map) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  route.points.forEach(([lat, lng]) => bounds.extend(new kakao.maps.LatLng(lat, lng)));
  mapState.map.setBounds(bounds);
}

function focusPlace(placeId) {
  if (!mapState.map) {
    return;
  }

  const selected = mapState.selectedPlaceMarkers.find((item) => item.place.id === placeId);
  if (!selected) {
    return;
  }

  if (state.currentMapType !== "SKYVIEW") {
    setBaseMapType("SKYVIEW", { silent: true });
  }

  mapState.map.setLevel(4);
  const markerPosition = new kakao.maps.LatLng(selected.place.coords[0], selected.place.coords[1]);
  mapState.map.panTo(markerPosition);
  openPlacePopup(selected.place, markerPosition);
  updateMapStatus(`${selected.place.title} 위치로 이동했습니다.`, {
    highlightWord: selected.place.title,
    suppressOnMobile: true
  });
}

function fitAllRoutes() {
  if (!mapState.map) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  challengeRoutes.forEach((route) => {
    route.points.forEach(([lat, lng]) => bounds.extend(new kakao.maps.LatLng(lat, lng)));
  });
  mapState.selectedPlaceMarkers.forEach(({ place }) => {
    bounds.extend(new kakao.maps.LatLng(place.coords[0], place.coords[1]));
  });
  mapState.map.setBounds(bounds);
  updateMapStatus("코스와 주요 장소를 한 번에 보고 있습니다.");
}

function setBaseMapType(mapTypeId, options = {}) {
  elements.keyNotice.hidden = true;
  state.currentMapType = mapTypeId;

  if (mapState.map) {
    try {
      mapState.map.setMapTypeId(getKakaoMapTypeId(mapTypeId));
    } catch (error) {
      updateMapStatus("지도 타입 전환 중 오류가 발생했습니다.");
      return;
    }
  }

  updateMapTypeButtons();
  if (!options.silent) {
    updateMapStatus(`${getMapTypeLabel(mapTypeId)}로 지도를 전환했습니다.`);
  }

}

function getKakaoMapTypeId(mapTypeId) {
  if (mapTypeId === "SKYVIEW") {
    return kakao.maps.MapTypeId.HYBRID || kakao.maps.MapTypeId.SKYVIEW;
  }
  return kakao.maps.MapTypeId.ROADMAP;
}

function getMapTypeLabel(mapTypeId) {
  return mapTypeId === "SKYVIEW" ? "위성 지도" : "일반 지도";
}

function updateMapStatus(message, options = {}) {
  if (options.suppressOnMobile && window.matchMedia("(max-width: 680px)").matches) {
    elements.mapStatus.hidden = true;
    return;
  }

  elements.mapStatus.hidden = false;
  const escapedMessage = escapeHtml(message);
  const highlightedMessage = options.highlightWord
    ? escapedMessage.replace(
        escapeHtml(options.highlightWord),
        `<span class="status-highlight">${escapeHtml(options.highlightWord)}</span>`
      )
    : escapedMessage;

  elements.mapStatus.innerHTML = highlightedMessage;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showPlaceCard(place) {
  if (!elements.placeCard) {
    return;
  }

  closePlacePopup();

  elements.placeCard.hidden = false;
  elements.placeCard.innerHTML = `
    <button class="place-card-close" type="button" data-close-place-card aria-label="상세 설명 닫기">×</button>
    <div class="place-card-layout">
      <div class="place-card-info">
        <div class="place-card-title-row">
          <h3>${escapeHtml(place.title)}</h3>
          <span class="place-card-link-icon" aria-hidden="true">›</span>
        </div>
        <div class="place-card-rating" aria-label="평점 0.0, 리뷰 0">
          <strong>0.0</strong>
          <span class="place-card-stars" aria-hidden="true">★★★★★</span>
          <span>(0건)</span>
          <span>리뷰 0</span>
        </div>
        <p class="place-card-address">${escapeHtml(getPlaceAddressText(place))}</p>
        <div class="place-card-links">
          <button type="button" data-place-kakao-detail>상세보기</button>
          <span aria-hidden="true">·</span>
          <button type="button" data-close-place-card>정보 수정 제안</button>
        </div>
      </div>
      <figure class="place-card-photo">
        <img src="${escapeHtml(getPlacePhotoUrl(place))}" alt="${escapeHtml(`${place.title} 대표 사진`)}" />
      </figure>
    </div>
    <div class="place-card-actions">
      <button type="button" class="place-card-action is-light" data-back-place-popup>이전</button>
      <button type="button" class="place-card-action" data-place-distance>참가거리</button>
      <button type="button" class="place-card-action is-light" data-place-route>길찾기</button>
      <button type="button" class="place-card-action is-light" data-close-place-card>닫기</button>
    </div>
  `;

  elements.placeCard.querySelectorAll("[data-close-place-card]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.placeCard.hidden = true;
    });
  });

  elements.placeCard.querySelector("[data-place-distance]")?.addEventListener("click", () => {
    showDistanceEntry(place);
  });

  elements.placeCard.querySelector("[data-place-kakao-detail]")?.addEventListener("click", () => {
    openKakaoPlaceSearch(place);
  });

  elements.placeCard.querySelector("[data-back-place-popup]")?.addEventListener("click", () => {
    elements.placeCard.hidden = true;
    focusPlace(place.id);
  });

  elements.placeCard.querySelector("[data-place-route]")?.addEventListener("click", () => {
    openBikeRouteToPlace(place);
  });

  bindPlacePhotoFallback(elements.placeCard);
}

function openKakaoPlaceSearch(place) {
  const keyword = encodeURIComponent(place.query || place.title);
  openExternalPage(
    `https://map.kakao.com/link/search/${keyword}`,
    "카카오맵 상세보기를 새 창으로 열지 못했습니다. 팝업 차단을 확인해주세요."
  );
}

function showDistanceEntry(place) {
  if (!elements.placeCard) {
    return;
  }

  closePlacePopup();
  const records = getCertificationRecords().filter((record) => record.placeId === place.id);
  const totalDistanceKm = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);
  const totalCarbonKg = totalDistanceKm * CARBON_KG_PER_KM;

  elements.placeCard.hidden = false;
  elements.placeCard.innerHTML = `
    <button class="place-card-back" type="button" data-back-place-detail aria-label="상세설명으로 돌아가기">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 7 4 12l5 5"></path>
        <path d="M5 12h9a5 5 0 0 1 5 5v1"></path>
      </svg>
    </button>
    <button class="place-card-close" type="button" data-close-place-card aria-label="참가거리 입력 닫기">×</button>
    <p class="place-card-kicker">참가거리</p>
    <h3>${escapeHtml(place.title)}</h3>
    <div class="carbon-meter distance-entry-summary">
      <strong>${escapeHtml(formatCarbon(totalCarbonKg))}</strong>
      <span>전체 누적 ${escapeHtml(formatKm(totalDistanceKm))}</span>
    </div>
    <form class="distance-entry-form" data-distance-form data-place-id="${escapeHtml(place.id)}">
      <label>
        참가거리(km)
        <input name="distance" type="number" min="0.1" step="0.1" placeholder="예: 12.5" required />
      </label>
      <div class="distance-entry-preview" data-distance-preview>0.0kg CO2 감축</div>
      <div class="distance-entry-actions">
        <button class="place-card-action" type="submit">저장하기</button>
        <button class="place-card-action is-light" type="reset">초기화</button>
      </div>
    </form>
  `;

  elements.placeCard.querySelectorAll("[data-close-place-card]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.placeCard.hidden = true;
    });
  });

  const form = elements.placeCard.querySelector("[data-distance-form]");
  const input = form?.querySelector('input[name="distance"]');
  const preview = form?.querySelector("[data-distance-preview]");

  input?.addEventListener("input", () => {
    const distance = Number(input.value || 0);
    if (preview) {
      preview.textContent = `${formatCarbon(distance * CARBON_KG_PER_KM)} 감축`;
    }
  });

  form?.addEventListener("reset", () => {
    window.setTimeout(() => {
      if (preview) {
        preview.textContent = "0.0kg CO2 감축";
      }
      input?.focus();
    }, 0);
  });

  elements.placeCard.querySelector("[data-back-place-detail]")?.addEventListener("click", () => {
    showPlaceCard(place);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const distance = Number(new FormData(form).get("distance") || 0);
    if (!Number.isFinite(distance) || distance <= 0) {
      updateMapStatus("참가거리를 0보다 크게 입력해주세요.");
      return;
    }

    saveDistanceRecord(place, distance);
    refreshOpenSidePanel();
    showDistanceEntry(place);
    updateMapStatus(
      `${place.title} 참가거리 ${formatKm(distance)} 저장 · ${formatCarbon(distance * CARBON_KG_PER_KM)} 감축`,
      { highlightWord: place.title }
    );
  });
}

function saveDistanceRecord(place, distance) {
  const week = getWeeksForPlace(place.id).find((weekNumber) => isWeekRevealed(weekNumber)) || getWeeksForPlace(place.id)[0] || 0;
  const records = getCertificationRecords();
  records.unshift({
    week,
    placeId: place.id,
    placeTitle: place.title,
    photoName: "참가거리",
    distance,
    comment: "",
    createdAt: new Date().toLocaleString("ko-KR")
  });
  saveCertificationRecords(records);
}

function getPlacePhotoUrl(place) {
  return place.photo || `./img/places/${place.id}.jpg`;
}

function bindPlacePhotoFallback(container) {
  container.querySelectorAll(".place-card-photo img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") {
          image.closest(".place-card-photo")?.classList.add("is-empty");
          return;
        }

        image.dataset.fallbackApplied = "true";
        image.src = "./img/main.png";
      },
      { once: false }
    );
  });
}

function refreshOpenSidePanel() {
  if (state.openSideMenuId && elements.sidePanel.root.classList.contains("is-open")) {
    renderSidePanel(state.openSideMenuId);
  }
}

function bindRouteFinder() {
  elements.routeSearchForm?.addEventListener("submit", handleRouteSearchSubmit);

  elements.routeLocateButton?.addEventListener("click", async () => {
    const currentLocation = await requestCurrentLocation({ panTo: true });
    if (currentLocation) {
      elements.routeSearchMeta.textContent = "현재 위치를 확인했습니다. 도착 장소를 입력해 자전거 길찾기를 시작하세요.";
      updateMapStatus("현재 위치를 확인했습니다.");
    }
  });

  elements.routeOpenButton?.addEventListener("click", () => {
    if (state.routeSearchUrl) {
      openExternalRoute(state.routeSearchUrl);
    }
  });
}

async function handleRouteSearchSubmit(event) {
  event.preventDefault();

  const keyword = elements.routeSearchInput?.value.trim();
  if (!keyword) {
    elements.routeSearchMeta.textContent = "도착 장소 이름을 입력해주세요.";
    elements.routeSearchActions.hidden = true;
    return;
  }

  const currentLocation = mapState.currentLocation || (await requestCurrentLocation({ panTo: false }));
  if (!currentLocation) {
    elements.routeSearchMeta.textContent = "현재 위치를 확인해야 자전거 코스를 찾을 수 있습니다.";
    elements.routeSearchActions.hidden = true;
    return;
  }

  const destination = await resolveRouteDestination(keyword, currentLocation);
  if (!destination) {
    elements.routeSearchMeta.textContent = "검색 결과가 없습니다. 장소명이나 주소를 다시 입력해주세요.";
    elements.routeSearchActions.hidden = true;
    return;
  }

  state.routeSearchDestination = destination;
  state.routeSearchUrl = buildKakaoBikeRouteUrl(currentLocation, destination.coords);
  updateRoutePreview(currentLocation, destination);

  const distanceText = formatRouteDistance(
    calculateDistanceKm(currentLocation, {
      lat: destination.coords[0],
      lng: destination.coords[1]
    })
  );
  elements.routeSearchMeta.innerHTML = `${escapeHtml(destination.title)} · 현재 위치에서 약 ${escapeHtml(distanceText)} 떨어져 있습니다.`;
  elements.routeOpenButton.textContent = `${destination.title} 자전거 길찾기`;
  elements.routeSearchActions.hidden = false;
  updateMapStatus(`${destination.title} 자전거 코스를 준비했습니다.`, {
    highlightWord: destination.title
  });
}

function requestCurrentLocation(options = {}) {
  const { panTo = true, silent = false } = options;

  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      if (!silent) {
        elements.routeSearchMeta.textContent = "브라우저에서 위치 정보를 지원하지 않습니다.";
      }
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        mapState.currentLocation = currentLocation;
        updateCurrentLocationMarker(currentLocation, { panTo });
        resolve(currentLocation);
      },
      () => {
        if (!silent) {
          elements.routeSearchMeta.textContent = "현재 위치 권한을 허용하면 자전거 길찾기를 사용할 수 있습니다.";
        }
        resolve(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
}

function updateCurrentLocationMarker(currentLocation, options = {}) {
  if (!mapState.map) {
    return;
  }

  const { panTo = true } = options;
  const position = new kakao.maps.LatLng(currentLocation.lat, currentLocation.lng);

  if (!mapState.currentLocationMarker) {
    mapState.currentLocationMarker = new kakao.maps.Marker({
      map: mapState.map,
      position,
      image: createCurrentLocationMarkerImage(),
      title: "현재 위치"
    });
  } else {
    mapState.currentLocationMarker.setPosition(position);
  }

  if (panTo) {
    mapState.map.panTo(position);
  }
}

function createCurrentLocationMarkerImage() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r="14" fill="rgba(47,126,255,0.22)"/>
      <circle cx="21" cy="21" r="8.5" fill="#2f7eff" stroke="#ffffff" stroke-width="3"/>
    </svg>
  `;

  return new kakao.maps.MarkerImage(
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    new kakao.maps.Size(42, 42),
    { offset: new kakao.maps.Point(21, 21) }
  );
}

function resolveRouteDestination(keyword, currentLocation) {
  return new Promise((resolve) => {
    if (!window.kakao?.maps?.services) {
      resolve(null);
      return;
    }

    const placesService = new kakao.maps.services.Places();
    placesService.keywordSearch(
      keyword,
      (result, status) => {
        if (status !== kakao.maps.services.Status.OK || !result?.[0]) {
          resolve(null);
          return;
        }

        const destination = result[0];
        resolve({
          id: destination.id || `route-${Date.now()}`,
          title: destination.place_name,
          address: destination.road_address_name || destination.address_name || keyword,
          query: keyword,
          intro: "코스찾기로 선택한 도착 장소입니다.",
          coords: [Number(destination.y), Number(destination.x)]
        });
      },
      {
        x: currentLocation.lng,
        y: currentLocation.lat,
        radius: 20000,
        size: 10,
        sort: kakao.maps.services.SortBy.DISTANCE
      }
    );
  });
}

function updateRoutePreview(currentLocation, destination) {
  if (!mapState.map) {
    return;
  }

  const originLatLng = new kakao.maps.LatLng(currentLocation.lat, currentLocation.lng);
  const destinationLatLng = new kakao.maps.LatLng(destination.coords[0], destination.coords[1]);

  if (!mapState.routeDestinationMarker) {
    mapState.routeDestinationMarker = new kakao.maps.Marker({
      map: mapState.map,
      position: destinationLatLng,
      title: destination.title
    });
  } else {
    mapState.routeDestinationMarker.setPosition(destinationLatLng);
  }

  if (!mapState.routePreviewLine) {
    mapState.routePreviewLine = new kakao.maps.Polyline({
      map: mapState.map,
      path: [originLatLng, destinationLatLng],
      strokeWeight: 5,
      strokeColor: "#2f7eff",
      strokeOpacity: 0.9,
      strokeStyle: "dash"
    });
  } else {
    mapState.routePreviewLine.setPath([originLatLng, destinationLatLng]);
    mapState.routePreviewLine.setMap(mapState.map);
  }

  const bounds = new kakao.maps.LatLngBounds();
  bounds.extend(originLatLng);
  bounds.extend(destinationLatLng);
  mapState.map.setBounds(bounds);
}

function buildKakaoBikeRouteUrl(origin, destinationCoords) {
  const sp = `${origin.lat.toFixed(5)},${origin.lng.toFixed(5)}`;
  const ep = `${destinationCoords[0].toFixed(5)},${destinationCoords[1].toFixed(5)}`;
  return `https://m.map.kakao.com/scheme/route?sp=${sp}&ep=${ep}&by=bicycle`;
}

function openExternalRoute(url) {
  openExternalPage(url, "새 창 열기가 차단되었습니다. 팝업 차단을 해제한 뒤 다시 시도해주세요.");
}

function openExternalPage(url, blockedMessage) {
  const externalWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (externalWindow) {
    externalWindow.opener = null;
    return true;
  }

  if (!document.hidden && blockedMessage) {
    updateMapStatus(blockedMessage);
  }

  return false;
}

function calculateDistanceKm(origin, destination) {
  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(destination.lat - origin.lat);
  const deltaLng = toRadians(destination.lng - origin.lng);
  const lat1 = toRadians(origin.lat);
  const lat2 = toRadians(destination.lat);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatRouteDistance(distanceKm) {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)}m`;
  }
  return `${distanceKm.toFixed(1)}km`;
}

function bindHomeIntro() {
  if (!elements.homeIntro) {
    return;
  }

  elements.homeIntro.addEventListener("click", () => {
    elements.homeIntro.hidden = true;
  });
}

function bindMenuButtons() {
  elements.topButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuId = button.dataset.topMenu;
      closeSidePanel();

      if (state.openTopMenuId === menuId && !elements.topPanel.root.hidden) {
        state.openTopMenuId = null;
        elements.topPanel.root.hidden = true;
      } else {
        state.openTopMenuId = menuId;
        elements.topPanel.root.hidden = false;
        renderTopPanel(menuId);
      }

      updateActiveButtons();
    });
  });

  elements.sideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuId = button.dataset.sideMenu;

      if (state.openSideMenuId === menuId && elements.sidePanel.root.classList.contains("is-open")) {
        closeSidePanel();
      } else {
        state.openSideMenuId = menuId;
        renderSidePanel(menuId);
        openSidePanel();
      }

      updateActiveButtons();
    });
  });

  elements.closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.closePanel === "top") {
        state.openTopMenuId = null;
        elements.topPanel.root.hidden = true;
      }

      if (button.dataset.closePanel === "side") {
        closeSidePanel();
      }

      updateActiveButtons();
    });
  });

  updateActiveButtons();
}

function bindOverlayDismiss() {
  [elements.topPanel.root, elements.sidePanel.root].forEach((panelRoot) => {
    panelRoot?.addEventListener("click", (event) => {
      if (panelRoot.dataset.dragMoved === "true") {
        panelRoot.dataset.dragMoved = "false";
        return;
      }

      const clickedCloseButton = event.target.closest("[data-close-panel]");
      if (clickedCloseButton) {
        return;
      }

      const clickedInteractive = event.target.closest(
        "button, a, input, textarea, select, option, label, form"
      );
      const clickedPanelHead = event.target.closest(".panel-head");
      const clickedPanelShell = event.target === panelRoot;

      if (!clickedPanelHead && !clickedPanelShell) {
        return;
      }

      if (clickedInteractive && !clickedPanelHead) {
        return;
      }

      if (panelRoot === elements.topPanel.root) {
        state.openTopMenuId = null;
        elements.topPanel.root.hidden = true;
      }

      if (panelRoot === elements.sidePanel.root) {
        closeSidePanel();
      }

      updateActiveButtons();
    });
  });

  elements.placeCard?.addEventListener("click", (event) => {
    if (elements.placeCard.hidden) {
      return;
    }

    if (elements.placeCard.dataset.dragMoved === "true") {
      elements.placeCard.dataset.dragMoved = "false";
      return;
    }

    if (event.target.closest("button, a, input, textarea, select, option, label, form")) {
      return;
    }

    const clickedCardShell = event.target === elements.placeCard;
    const clickedCardText = event.target.closest(
      ".place-card-kicker, h3, .place-card-address, .place-card-intro, .place-card-weeks"
    );

    if (!clickedCardShell && !clickedCardText) {
      return;
    }

    elements.placeCard.hidden = true;
  });
}

function bindDraggablePanels() {
  makePanelDraggable(elements.topPanel.root, ".panel-head");
  makePanelDraggable(elements.sidePanel.root, ".panel-head");
  makePanelDraggable(elements.placeCard, ".place-card-kicker, h3");
}

function makePanelDraggable(panelRoot, handleSelector) {
  if (!panelRoot) {
    return;
  }

  panelRoot.dataset.dragMoved = "false";

  panelRoot.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const handle = event.target.closest(handleSelector);
    if (!handle || !panelRoot.contains(handle)) {
      return;
    }

    if (event.target.closest("button, a, input, textarea, select, option, label, form")) {
      return;
    }

    const stageRect = elements.mapStage?.getBoundingClientRect();
    const panelRect = panelRoot.getBoundingClientRect();
    if (!stageRect || !panelRect.width || !panelRect.height) {
      return;
    }

    const pointerStartX = event.clientX;
    const pointerStartY = event.clientY;
    const startLeft = panelRect.left - stageRect.left;
    const startTop = panelRect.top - stageRect.top;
    let moved = false;

    panelRoot.style.width = `${panelRect.width}px`;
    panelRoot.style.left = `${startLeft}px`;
    panelRoot.style.top = `${startTop}px`;
    panelRoot.style.right = "auto";
    panelRoot.style.bottom = "auto";
    panelRoot.style.transform = "none";
    panelRoot.dataset.dragMoved = "false";

    const onPointerMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - pointerStartX;
      const deltaY = moveEvent.clientY - pointerStartY;

      if (!moved && Math.hypot(deltaX, deltaY) > 6) {
        moved = true;
        panelRoot.dataset.dragMoved = "true";
      }

      if (!moved) {
        return;
      }

      const maxLeft = Math.max(8, stageRect.width - panelRect.width - 8);
      const maxTop = Math.max(8, stageRect.height - panelRect.height - 8);
      const nextLeft = clamp(startLeft + deltaX, 8, maxLeft);
      const nextTop = clamp(startTop + deltaY, 8, maxTop);

      panelRoot.style.left = `${nextLeft}px`;
      panelRoot.style.top = `${nextTop}px`;
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.body.style.userSelect = "";
      requestAnimationFrame(() => {
        panelRoot.dataset.dragMoved = "false";
      });
    };

    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    event.preventDefault();
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function bindMapTypeButtons() {
  elements.mapTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setBaseMapType(button.dataset.mapType);
    });
  });
}

function openSidePanel() {
  elements.sidePanel.root.classList.add("is-open");
}

function closeSidePanel() {
  state.openSideMenuId = null;
  elements.sidePanel.root.classList.remove("is-open");
}

function updateMapTypeButtons() {
  elements.mapTypeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mapType === state.currentMapType);
  });
}

function updateActiveButtons() {
  elements.topButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topMenu === state.openTopMenuId);
  });

  elements.sideButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.sideMenu === state.openSideMenuId &&
        elements.sidePanel.root.classList.contains("is-open")
    );
  });
}

function renderTopPanel(menuId) {
  const menu = topMenus[menuId];
  if (!menu) {
    return;
  }

  const items = getMenuItems(menu);
  elements.topPanel.title.textContent = menu.title;
  elements.topPanel.root.dataset.panelMode = menuId;
  renderPanelItems(elements.topPanel, items, items[0]?.id);
}

function renderSidePanel(menuId) {
  const menu = sideMenus[menuId];
  if (!menu) {
    return;
  }

  const items = getMenuItems(menu);
  if (elements.routeFinder) {
    elements.routeFinder.hidden = menuId !== "course";
  }
  elements.sidePanel.title.textContent = menuId === "carbon" ? "탄소감축" : menu.title;
  elements.sidePanel.root.dataset.panelMode = menuId;
  if (menuId === "carbon") {
    elements.sidePanel.title.textContent = "탄소감축";
  }
  elements.sidePanel.list.hidden = false;
  elements.sidePanel.detail.hidden = false;
  if (menuId === "course") {
    clearInlinePanelDetails(elements.sidePanel);
    elements.sidePanel.list.innerHTML = "";
    elements.sidePanel.detail.innerHTML = "";
    elements.sidePanel.list.hidden = true;
    elements.sidePanel.detail.hidden = true;
    return;
  }
  if (false && menuId === "certify") {
    clearInlinePanelDetails(elements.sidePanel);
    elements.sidePanel.list.hidden = true;
    renderAllCertificationWeeks(elements.sidePanel.detail);
    return;
  }
  if (false && menuId === "carbon") {
    clearInlinePanelDetails(elements.sidePanel);
    elements.sidePanel.list.hidden = true;
    renderAllCarbonWeeks(elements.sidePanel.detail);
    return;
  }
  renderPanelItems(elements.sidePanel, items, items[0]?.id);
}

function renderPanelItems(panel, items, defaultItemId) {
  panel.list.innerHTML = "";

  const activeItem = items.find((item) => item.id === defaultItemId) || items[0];
  let activeButton = null;

  items.forEach((item) => {
    const isActive = activeItem?.id === item.id;
    const inlineIntro =
      isActive && item.intro ? `<div class="inline-spot-intro">${item.intro}</div>` : "";
    const itemSummary = resolvePanelItemSummary(panel, item);
    const itemTag = resolvePanelItemTag(panel, item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "submenu-item";
    button.classList.toggle("is-active", isActive);
    button.dataset.panelItemId = item.id;
    button.innerHTML = `
      <div class="submenu-item-text">
        <strong>${item.label}</strong>
        <span>${itemSummary}</span>
        ${inlineIntro}
      </div>
      <span class="submenu-item-tag">${itemTag}</span>
    `;

    if (isActive) {
      activeButton = button;
    }

    button.addEventListener("click", () => {
      const useInlineDetail = shouldUseInlineDetail(panel);
      const hasInlineDetailOpen =
        button.nextElementSibling?.classList.contains("inline-panel-detail") || false;
      const shouldToggleDetailOff =
        !useInlineDetail &&
        panel === elements.sidePanel &&
        isMobileViewport() &&
        button.classList.contains("is-active") &&
        !panel.detail.hidden;

      const shouldToggleInlineOff =
        useInlineDetail && button.classList.contains("is-active") && hasInlineDetailOpen;

      if (shouldToggleDetailOff || shouldToggleInlineOff) {
        panel.list.querySelectorAll(".submenu-item").forEach((node) => {
          node.classList.remove("is-active");
        });
        panel.list.querySelectorAll(".inline-spot-intro").forEach((node) => node.remove());
        clearInlinePanelDetails(panel);
        panel.detail.hidden = true;
        return;
      }

      panel.list.querySelectorAll(".submenu-item").forEach((node) => {
        node.classList.toggle("is-active", node === button);
      });
      panel.list.querySelectorAll(".inline-spot-intro").forEach((node) => node.remove());
      clearInlinePanelDetails(panel);
      if (item.intro) {
        const intro = document.createElement("div");
        intro.className = "inline-spot-intro";
        intro.textContent = item.intro;
        button.querySelector(".submenu-item-text")?.appendChild(intro);
      }

      if (useInlineDetail) {
        panel.detail.hidden = true;
        insertInlinePanelDetail(panel, button, item);
      } else {
        panel.detail.hidden = false;
        renderPanelDetail(panel.detail, item);
      }
      handleMenuAction(item.action);
    });

    panel.list.appendChild(button);
  });

  if (activeItem) {
    clearInlinePanelDetails(panel);
    if (shouldUseInlineDetail(panel) && activeButton) {
      panel.detail.hidden = true;
      insertInlinePanelDetail(panel, activeButton, activeItem);
    } else {
      panel.detail.hidden = false;
      renderPanelDetail(panel.detail, activeItem);
    }
  }
}

function getPanelItemSummary(panel, item) {
  if (panel === elements.sidePanel && panel.root.dataset.panelMode === "carbon" && item.week) {
    return `${formatCarbon(getWeeklyCarbonStats(item.week).totalCarbonKg)} 감축`;
  }

  return item.summary;
}

function shouldUseInlineDetail(panel) {
  if (panel === elements.sidePanel) {
    return false;
  }

  if (panel === elements.topPanel) {
    return state.openTopMenuId === "event";
  }

  return false;
}

function resolvePanelItemSummary(panel, item) {
  if (panel === elements.sidePanel && item.week) {
    if (!isWeekRevealed(item.week)) {
      return "비공개";
    }

    return "공개";

    if (panel.root.dataset.panelMode === "carbon") {
      return `${formatCarbon(getWeeklyCarbonStats(item.week).totalCarbonKg)} 감축`;
    }

    if (panel.root.dataset.panelMode === "treasure") {
      return `${getWeeklyPlaces(item.week).length}곳 공개`;
    }
  }

  return item.summary;
}

function resolvePanelItemTag(panel, item) {
  if (panel === elements.sidePanel && item.week) {
    if (!isWeekRevealed(item.week)) {
      return "비공개";
    }

    if (panel.root.dataset.panelMode === "treasure") {
      return "공개";
    }

    if (panel.root.dataset.panelMode === "certify") {
      return "인증";
    }

    if (panel.root.dataset.panelMode === "carbon") {
      return "CO2";
    }
  }

  return item.tag || "메뉴";
}

function clearInlinePanelDetails(panel) {
  panel.list.querySelectorAll(".inline-panel-detail").forEach((node) => node.remove());
}

function insertInlinePanelDetail(panel, button, item) {
  const inlineDetail = document.createElement("div");
  inlineDetail.className = "submenu-detail inline-panel-detail";
  renderPanelDetail(inlineDetail, item);
  button.insertAdjacentElement("afterend", inlineDetail);
}

function renderPanelDetail(container, item) {
  if (item.detailType === "main-image") {
    renderMainImageDetail(container, item);
    return;
  }

  if (item.detailType === "event-promo") {
    renderEventPromoDetail(container, item);
    return;
  }

  if (item.detailType === "event-guide") {
    renderEventGuideDetail(container, item);
    return;
  }

  if (item.detailType === "login") {
    renderLoginDetail(container, item);
    return;
  }

  if (item.detailType === "weekly-treasure") {
    renderWeeklyTreasureDetail(container, item);
    return;
  }

  if (item.detailType === "weekly-certification") {
    renderWeeklyCertificationDetail(container, item);
    return;
  }

  if (item.detailType === "weekly-carbon") {
    renderWeeklyCarbonDetail(container, item);
    return;
  }

  const meta = item.detailMeta || [];
  container.innerHTML = `
    <h3>${item.detailTitle || item.label}</h3>
    <p>${item.detailBody || item.summary}</p>
    ${item.intro ? `<div class="spot-intro">${item.intro}</div>` : ""}
    ${meta.length ? `<div class="detail-meta">${meta.map((value) => `<span class="detail-pill">${value}</span>`).join("")}</div>` : ""}
    ${item.action ? `<button class="detail-action" type="button">지도에서 바로 보기</button>` : ""}
  `;

  const actionButton = container.querySelector(".detail-action");
  if (actionButton) {
    actionButton.addEventListener("click", () => handleMenuAction(item.action));
  }
}

function renderMainImageDetail(container, item) {
  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <div class="panel-main-image">
      <img src="./img/main.png" alt="탄소를 감축하는 자전거 챌린지 season2 메인 이미지" />
    </div>
  `;
}

function renderEventPromoDetail(container, item) {
  container.innerHTML = `
    <div class="event-hero">
      <span class="event-badge">1차 이벤트</span>
      <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
      <p>${escapeHtml(item.detailBody || item.summary)}</p>
      <div class="detail-meta">
        <span class="detail-pill">장소: 봉동 상장기공원</span>
        <span class="detail-pill">혜택: ${escapeHtml(item.eventReward || "무료 커피 30잔")}</span>
        <span class="detail-pill">기간: ${escapeHtml(item.eventDate || "2026.05.04 - 2026.05.10")}</span>
      </div>
    </div>
    <div class="event-steps">
      <article class="event-step">
        <strong>1. 보물찾기 장소 확인</strong>
        <span>보물찾기 메뉴에서 이번 주 공개 장소를 확인하고 봉동 상장기공원 위치를 지도에서 찾습니다.</span>
      </article>
      <article class="event-step">
        <strong>2. 현장 QR코드 인증</strong>
        <span>공개된 장소에 도착하면 현장 QR코드를 찍고, QR코드 인증 화면에서 인증사진과 방문 후기를 등록합니다.</span>
      </article>
      <article class="event-step">
        <strong>3. 커피숍에서 인증 확인</strong>
        <span>인근 커피숍에서 QR 인증 완료 화면을 보여주면 선착순 무료 커피 혜택을 받을 수 있습니다.</span>
      </article>
    </div>
    <div class="event-note">
      1차 이벤트는 선착순 30잔 기준입니다. 준비 수량이 소진되면 조기 마감될 수 있습니다.
    </div>
    <div class="event-actions">
      <button class="detail-action" type="button" data-focus-event-place="${escapeHtml(item.eventPlaceId)}">봉동 상장기공원 위치 보기</button>
      <button class="detail-action event-action-alt" type="button" data-open-event-band>네이버 밴드 인증 열기</button>
    </div>
  `;

  bindEventDetailActions(container, item);
}

function renderEventGuideDetail(container, item) {
  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <div class="event-guide-list">
      <article class="weekly-place-card">
        <strong>운영 기간</strong>
        <span>${escapeHtml(item.eventDate || "운영 일정은 공지로 안내합니다.")}</span>
      </article>
      <article class="weekly-place-card">
        <strong>참여 방식</strong>
        <span>공개 장소 방문, QR코드 인증, 인증사진과 후기 등록을 기준으로 참여 여부를 확인합니다.</span>
      </article>
      <article class="weekly-place-card">
        <strong>상세 공지</strong>
        <span>회차별 혜택과 제공 수량은 이벤트 시작 전 커뮤니티 공지에서 안내할 수 있습니다.</span>
      </article>
    </div>
    <div class="event-actions">
      <button class="detail-action" type="button" data-focus-event-place="${escapeHtml(item.eventPlaceId)}">봉동 상장기공원 위치 보기</button>
      <button class="detail-action event-action-alt" type="button" data-open-event-band>밴드 인증 화면 열기</button>
    </div>
  `;

  bindEventDetailActions(container, item);
}

function bindEventDetailActions(container, item) {
  container.querySelector("[data-focus-event-place]")?.addEventListener("click", () => {
    if (item.eventPlaceId) {
      focusPlace(item.eventPlaceId);
    }
  });

  container.querySelector("[data-open-event-band]")?.addEventListener("click", () => {
    openBandCertificationPage();
  });
}

function renderLoginDetail(container, item) {
  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <form class="login-form">
      <label>
        아이디
        <input type="text" placeholder="참가자 아이디" autocomplete="username" />
      </label>
      <label>
        비밀번호
        <input type="password" placeholder="비밀번호" autocomplete="current-password" />
      </label>
      <button class="detail-action" type="button">로그인 준비 중</button>
    </form>
  `;
}

function renderWeeklyTreasureDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const weekPlan = getWeekPlan(item.week);

  if (!weekPlan?.isRevealed) {
    container.innerHTML = `
      <h3>${escapeHtml(`${item.week}주차 보물찾기`)}</h3>
      <p>${escapeHtml(`${getWeekRevealLabel(item.week)}에 공개됩니다.`)}</p>
      <div class="week-summary">비공개 주차입니다. 공개 전에는 장소가 표시되지 않습니다.</div>
    `;
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <div class="week-summary">${item.week}주차 공개 장소 ${places.length}곳</div>
    <div class="weekly-place-list">
      ${places
        .map(
          (place, index) => `
            <button class="weekly-place-name" type="button" data-focus-place="${escapeHtml(place.id)}">
              ${index + 1}. ${escapeHtml(place.title)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
  bindFocusPlaceButtons(container);
}

function renderWeeklyCertificationDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const weekPlan = getWeekPlan(item.week);
  const records = getCertificationRecords();

  if (!weekPlan?.isRevealed) {
    container.innerHTML = `
      <h3>${escapeHtml(`${item.week}주차 인증하기`)}</h3>
      <p>${escapeHtml(`${getWeekRevealLabel(item.week)} 공개 후 인증할 수 있습니다.`)}</p>
      <div class="week-summary">비공개 주차입니다. 아직 인증 장소가 열리지 않았습니다.</div>
    `;
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <div class="week-summary">${item.week}주차 공개 장소별 인증을 등록합니다.</div>
    <div class="weekly-place-list">
      ${places
        .map((place) => {
          const latestRecord = records.find(
            (record) => Number(record.week) === item.week && record.placeId === place.id
          );

          return `
            <article class="weekly-place-card cert-place-card">
              <strong>${escapeHtml(place.title)}</strong>
              <span>${escapeHtml(getPlaceAddressText(place))}</span>
              <form class="cert-form" data-certification-form data-week="${item.week}" data-place-id="${escapeHtml(place.id)}">
                <label>
                  인증사진
                  <input name="photo" type="file" accept="image/*" required />
                </label>
                <label>
                  주행거리(km)
                  <input name="distance" type="number" min="0" step="0.1" placeholder="예: 12.5" required />
                </label>
                <label>
                  댓글
                  <textarea name="comment" placeholder="방문 인증 소감이나 현장 메모를 남겨주세요." required></textarea>
                </label>
                <button class="detail-action" type="submit">네이버 밴드로 인증 등록하기</button>
              </form>
              ${
                latestRecord
                  ? `<div class="cert-record">
                      <strong>최근 인증</strong>
                      <span>${escapeHtml(latestRecord.createdAt)} · ${escapeHtml(formatKm(latestRecord.distance))} · ${escapeHtml(latestRecord.photoName)}</span>
                      <span>${escapeHtml(latestRecord.comment)}</span>
                    </div>`
                  : ""
              }
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="cert-note">입력값은 탄소절감 계산용으로 현재 브라우저에 저장되고, 제출 후 네이버 밴드 인증 게시글 화면이 열립니다.</div>
  `;

  container.querySelectorAll("[data-certification-form]").forEach((form) => {
    form.addEventListener("submit", (event) => handleCertificationSubmit(event, item, container));
  });
}

function renderWeeklyCarbonDetail(container, item) {
  const weekPlan = getWeekPlan(item.week);
  if (!weekPlan?.isRevealed) {
    container.innerHTML = `
      <h3>${escapeHtml(`${item.week}주차 탄소감축`)}</h3>
      <p>${escapeHtml(`${getWeekRevealLabel(item.week)} 공개 후 탄소감축량이 표시됩니다.`)}</p>
      <div class="week-summary">비공개 주차입니다. 공개 이후 입력된 거리 기준으로 감축량을 계산합니다.</div>
    `;
    return;
  }

  const stats = getWeeklyCarbonStats(item.week);
  const overallStats = getOverallCarbonStats();

  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 탄소감축`)}</h3>
    <p>인증한 주행거리 기준으로 주차별 예상 탄소감축량을 보여줍니다.</p>
    <div class="carbon-meter is-total">
      <strong>${escapeHtml(formatCarbon(overallStats.totalCarbonKg))}</strong>
      <span>전체 탄소감축량 · 전체 주행거리 ${escapeHtml(formatKm(overallStats.totalDistanceKm))}</span>
    </div>
    <div class="carbon-meter">
      <strong>${escapeHtml(formatCarbon(stats.totalCarbonKg))}</strong>
      <span>${item.week}주차 주행거리 ${escapeHtml(formatKm(stats.totalDistanceKm))} 기준</span>
    </div>
    <div class="week-summary">계산 기준: 주행거리 1km당 ${CARBON_KG_PER_KM}kg CO2 절감</div>
    <div class="weekly-place-list">
      ${stats.places
        .map(
          (place) => `
            <article class="carbon-place-row">
              <strong>${escapeHtml(place.title)}</strong>
              <span>${place.recordCount}건 인증 · ${escapeHtml(formatKm(place.distanceKm))} · ${escapeHtml(formatCarbon(place.carbonKg))}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWeeklyTreasureDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const weekPlan = getWeekPlan(item.week);

  if (!weekPlan?.isRevealed) {
    renderPrivateWeekDetail(container, item.week, "보물찾기");
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 보물찾기`)}</h3>
    <div class="week-summary">${item.week}주차 공개 장소 ${places.length}곳</div>
    ${renderWeekPlaceNameList(places)}
  `;
  bindFocusPlaceButtons(container);
}

function renderWeeklyCertificationDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const weekPlan = getWeekPlan(item.week);

  if (!weekPlan?.isRevealed) {
    renderPrivateWeekDetail(container, item.week, "인증하기");
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 인증하기`)}</h3>
    <div class="week-summary">${item.week}주차 공개 장소 ${places.length}곳</div>
    ${renderWeekPlaceNameList(places)}
  `;
  bindFocusPlaceButtons(container);
}

function renderWeeklyCarbonDetail(container, item) {
  const weekPlan = getWeekPlan(item.week);

  if (!weekPlan?.isRevealed) {
    renderPrivateWeekDetail(container, item.week, "탄소감축");
    return;
  }

  const stats = getWeeklyCarbonStats(item.week);
  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 탄소감축`)}</h3>
    <div class="carbon-meter">
      <strong>${escapeHtml(formatCarbon(stats.totalCarbonKg))}</strong>
      <span>${escapeHtml(formatKm(stats.totalDistanceKm))} 입력 기준</span>
    </div>
    <div class="week-summary">1km당 ${CARBON_KG_PER_KM}kg CO2 기준</div>
    <div class="weekly-place-list">
      ${stats.places
        .map(
          (place) => `
            <article class="carbon-place-row">
              <strong>${escapeHtml(place.title)}</strong>
              <span>${escapeHtml(formatCarbon(place.carbonKg))} · ${escapeHtml(formatKm(place.distanceKm))}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPrivateWeekDetail(container, week, title) {
  container.innerHTML = `
    <h3>${escapeHtml(`${week}주차 ${title}`)}</h3>
    <div class="week-summary">비공개</div>
  `;
}

function renderWeekPlaceNameList(places) {
  return `
    <div class="weekly-place-list weekly-place-list--names">
      ${places
        .map(
          (place, index) => `
            <button class="weekly-place-name" type="button" data-focus-place="${escapeHtml(place.id)}">
              ${index + 1}. ${escapeHtml(place.title)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function getPlaceTravelCarbonText(place) {
  const records = getCertificationRecords().filter((record) => record.placeId === place.id);
  const totalDistanceKm = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);

  if (!records.length || totalDistanceKm <= 0) {
    return "참가거리 입력 후 탄소감축량 표시";
  }

  return `누적 탄소감축 ${formatCarbon(totalDistanceKm * CARBON_KG_PER_KM)} · 입력 ${formatKm(
    totalDistanceKm
  )}`;
}

function handleCertificationSubmit(event, item, container) {
  event.preventDefault();

  const form = event.currentTarget;
  const place = getPlaceById(form.dataset.placeId);
  if (!place) {
    updateMapStatus("인증 장소를 찾지 못했습니다.");
    return;
  }

  const formData = new FormData(form);
  const photo = form.querySelector('input[name="photo"]')?.files?.[0];
  const distance = Number(formData.get("distance") || 0);
  const record = {
    week: Number(form.dataset.week),
    placeId: place.id,
    placeTitle: place.title,
    photoName: photo?.name || "인증사진",
    distance,
    comment: String(formData.get("comment") || ""),
    createdAt: new Date().toLocaleString("ko-KR")
  };

  const records = getCertificationRecords();
  records.unshift(record);
  saveCertificationRecords(records);
  renderWeeklyCertificationDetail(container, item);
  focusPlace(place.id);
  updateMapStatus(`${place.title} 인증이 등록되었습니다.`, { highlightWord: place.title });
  openBandCertificationPage();
}

function bindFocusPlaceButtons(container) {
  container.querySelectorAll("[data-focus-place]").forEach((button) => {
    button.addEventListener("click", () => focusPlace(button.dataset.focusPlace));
  });
}

function openBandCertificationPage() {
  openExternalPage(
    BAND_CERTIFICATION_URL,
    "네이버 밴드 새 창 열기가 차단되었습니다. 팝업 차단을 해제한 뒤 다시 눌러주세요."
  );
}

function getWeeklyTreasurePlan() {
  if (weeklyTreasurePlanCache) {
    return weeklyTreasurePlanCache;
  }

  weeklyTreasurePlanCache = hydrateWeeklyTreasurePlan(FIXED_WEEKLY_TREASURE_PLAN);
  return weeklyTreasurePlanCache;
}

function readWeeklyTreasurePlan() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TREASURE_PLAN_STORAGE_KEY) || "null");
    if (isValidTreasurePlan(parsed)) {
      return parsed;
    }
  } catch (error) {
    return null;
  }
  return null;
}

function createWeeklyTreasurePlan() {
  return FIXED_WEEKLY_TREASURE_PLAN;
}

function hydrateWeeklyTreasurePlan(plan) {
  const todayKey = getSeoulDateKey();
  return plan.map((week) => ({
    week: Number(week.week),
    revealDate: week.revealDate,
    revealLabel: week.revealLabel,
    isRevealed: todayKey >= week.revealDate,
    placeIds: week.placeIds,
    places:
      todayKey >= week.revealDate
        ? week.placeIds.map((placeId) => getPlaceById(placeId)).filter(Boolean)
        : []
  }));
}

function isValidTreasurePlan(plan) {
  return (
    Array.isArray(plan) &&
    plan.length === WEEK_COUNT &&
    plan.every(
      (week, index) =>
        Number(week.week) === index + 1 &&
        typeof week.revealDate === "string" &&
        Array.isArray(week.placeIds) &&
        week.placeIds.length > 0 &&
        week.placeIds.every((placeId) => Boolean(getPlaceById(placeId)))
    )
  );
}

function saveWeeklyTreasurePlan(plan) {
  try {
    localStorage.setItem(TREASURE_PLAN_STORAGE_KEY, JSON.stringify(plan));
  } catch (error) {
    // Random weekly places still work for the current session if storage is unavailable.
  }
}

function shufflePlaces(places) {
  const result = [...places];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function getSeoulDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(date);
}

function getWeekPlan(week) {
  return getWeeklyTreasurePlan().find((item) => item.week === Number(week)) || null;
}

function isWeekRevealed(week) {
  return Boolean(getWeekPlan(week)?.isRevealed);
}

function getWeekRevealLabel(week) {
  return getWeekPlan(week)?.revealLabel || "";
}

function getVisibleMapPlaces() {
  const visiblePlaceIds = new Set(
    getWeeklyTreasurePlan()
      .filter((week) => week.isRevealed)
      .flatMap((week) => week.placeIds)
  );

  return selectedPlaces.filter((place) => visiblePlaceIds.has(place.id));
}

function getWeeklyPlaces(week) {
  return getWeekPlan(week)?.places || [];
}

function getPlaceById(placeId) {
  return selectedPlaces.find((place) => place.id === placeId);
}

function getWeeksForPlace(placeId) {
  return getWeeklyTreasurePlan()
    .filter((week) => week.placeIds.includes(placeId))
    .map((week) => week.week);
}

function getWeeklyCarbonStats(week) {
  const places = getWeeklyPlaces(week);
  const placeIds = new Set(places.map((place) => place.id));
  const records = getCertificationRecords().filter(
    (record) => Number(record.week) === Number(week) && placeIds.has(record.placeId)
  );
  const placesWithStats = places.map((place) => {
    const placeRecords = records.filter((record) => record.placeId === place.id);
    const distanceKm = placeRecords.reduce((sum, record) => sum + Number(record.distance || 0), 0);
    return {
      ...place,
      recordCount: placeRecords.length,
      distanceKm,
      carbonKg: distanceKm * CARBON_KG_PER_KM
    };
  });
  const totalDistanceKm = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);

  return {
    places: placesWithStats,
    totalDistanceKm,
    totalCarbonKg: totalDistanceKm * CARBON_KG_PER_KM
  };
}

function getOverallCarbonStats() {
  const records = getCertificationRecords();
  const totalDistanceKm = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);
  return {
    totalDistanceKm,
    totalCarbonKg: totalDistanceKm * CARBON_KG_PER_KM
  };
}

function formatKm(value) {
  return `${Number(value || 0).toFixed(1)}km`;
}

function formatCarbon(value) {
  return `${Number(value || 0).toFixed(2)}kg CO2`;
}

function focusWeeklyPlaces(week) {
  if (!mapState.map) {
    return;
  }

  if (!isWeekRevealed(week)) {
    updateMapStatus(`${getWeekRevealLabel(week)} 공개 전까지는 장소가 비공개입니다.`);
    return;
  }

  const weeklyPlaces = getWeeklyPlaces(week);
  const weeklyMarkers = mapState.selectedPlaceMarkers.filter(({ place }) =>
    weeklyPlaces.some((weeklyPlace) => weeklyPlace.id === place.id)
  );

  if (!weeklyMarkers.length) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  weeklyMarkers.forEach(({ place }) => {
    bounds.extend(new kakao.maps.LatLng(place.coords[0], place.coords[1]));
  });
  mapState.map.setBounds(bounds);
  updateMapStatus(`${week}주차 보물찾기 장소를 표시했습니다.`);
}

function getCertificationRecords() {
  try {
    return JSON.parse(localStorage.getItem(CERTIFICATION_STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function saveCertificationRecords(records) {
  try {
    localStorage.setItem(CERTIFICATION_STORAGE_KEY, JSON.stringify(records.slice(0, 120)));
  } catch (error) {
    updateMapStatus("인증 기록을 저장하지 못했습니다.");
  }
}

function handleMenuAction(action) {
  if (!action) {
    return;
  }

  if (action.type === "focus-route") {
    selectRoute(action.routeId, { fitBounds: true });
  }

  if (action.type === "focus-place") {
    focusPlace(action.placeId);
  }

  if (action.type === "focus-week") {
    focusWeeklyPlaces(action.week);
  }

  if (action.type === "fit-all") {
    fitAllRoutes();
  }

  if (action.type === "set-map-type") {
    setBaseMapType(action.mapTypeId);
  }
}

function getMenuItems(menu) {
  return typeof menu.getItems === "function" ? menu.getItems() : menu.items || [];
}

function renderAllCertificationWeeks(container) {
  const weeks = getWeeklyTreasurePlan();
  container.innerHTML = weeks
    .map((week) => {
      if (!week.isRevealed) {
        return `
          <section class="stacked-week-block">
            <h3>${escapeHtml(`${week.week}주차 인증하기`)}</h3>
            <p>${escapeHtml(`${week.revealLabel} 공개 후 인증할 수 있습니다.`)}</p>
            <div class="week-summary">비공개 주차입니다.</div>
          </section>
        `;
      }

      return `
        <section class="stacked-week-block">
          <h3>${escapeHtml(`${week.week}주차 인증하기`)}</h3>
          <p>장소명을 누르면 지도에 위치가 표시되고, 팝업에서 인증하기를 열 수 있습니다.</p>
          <div class="weekly-place-list">
            ${week.places
              .map(
                (place, index) => `
                  <article class="weekly-place-card cert-place-card">
                    <button class="text-place-link" type="button" data-focus-place="${escapeHtml(place.id)}">
                      ${index + 1}. ${escapeHtml(place.title)}
                    </button>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  bindFocusPlaceButtons(container);
}

function renderAllCarbonWeeks(container) {
  const weeks = getWeeklyTreasurePlan();
  container.innerHTML = weeks
    .map((week) => {
      if (!week.isRevealed) {
        return `
          <section class="stacked-week-block">
            <h3>${escapeHtml(`${week.week}주차 탄소감축`)}</h3>
            <p>${escapeHtml(`${week.revealLabel} 공개 후 탄소감축량이 표시됩니다.`)}</p>
            <div class="week-summary">비공개 주차입니다.</div>
          </section>
        `;
      }

      const stats = getWeeklyCarbonStats(week.week);
      return `
        <section class="stacked-week-block">
          <h3>${escapeHtml(`${week.week}주차 탄소감축`)}</h3>
          <div class="carbon-meter">
            <strong>${escapeHtml(formatCarbon(stats.totalCarbonKg))}</strong>
            <span>${escapeHtml(formatKm(stats.totalDistanceKm))} 입력 기준</span>
          </div>
          <div class="weekly-place-list">
            ${stats.places
              .map(
                (place) => `
                  <article class="carbon-place-row">
                    <strong>${escapeHtml(place.title)}</strong>
                    <span>${escapeHtml(formatCarbon(place.carbonKg))} · ${escapeHtml(formatKm(place.distanceKm))}</span>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderWeeklyCertificationDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const weekPlan = getWeekPlan(item.week);

  if (!weekPlan?.isRevealed) {
    container.innerHTML = `
      <h3>${escapeHtml(`${item.week}주차 인증하기`)}</h3>
      <p>${escapeHtml(`${getWeekRevealLabel(item.week)} 공개 후 인증할 수 있습니다.`)}</p>
      <div class="week-summary">비공개 주차입니다. 아직 인증 장소가 열리지 않았습니다.</div>
    `;
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 인증하기`)}</h3>
    <p>장소명을 누르면 지도에 위치가 표시되고, 팝업에서 인증하기를 열 수 있습니다.</p>
    <div class="week-summary">${item.week}주차 공개 장소 ${places.length}곳</div>
    <div class="weekly-place-list">
      ${places
        .map(
          (place, index) => `
            <article class="weekly-place-card cert-place-card">
              <button class="text-place-link" type="button" data-focus-place="${escapeHtml(place.id)}">
                ${index + 1}. ${escapeHtml(place.title)}
              </button>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="cert-note">장소 팝업의 인증하기 버튼을 누르면 네이버 밴드 게시판이 새 창으로 열립니다.</div>
  `;

  bindFocusPlaceButtons(container);
}

function renderWeeklyCarbonDetail(container, item) {
  const weekPlan = getWeekPlan(item.week);
  if (!weekPlan?.isRevealed) {
    container.innerHTML = `
      <h3>${escapeHtml(`${item.week}주차 탄소감축`)}</h3>
      <p>${escapeHtml(`${getWeekRevealLabel(item.week)} 공개 후 탄소감축량이 표시됩니다.`)}</p>
      <div class="week-summary">비공개 주차입니다. 공개 이후 입력된 거리 기준으로 감축량을 계산합니다.</div>
    `;
    return;
  }

  const stats = getWeeklyCarbonStats(item.week);
  container.innerHTML = `
    <h3>${escapeHtml(`${item.week}주차 탄소감축`)}</h3>
    <p>참가자가 입력한 거리 기준으로 계산된 감축량입니다.</p>
    <div class="carbon-meter">
      <strong>${escapeHtml(formatCarbon(stats.totalCarbonKg))}</strong>
      <span>${item.week}주차 입력 거리 ${escapeHtml(formatKm(stats.totalDistanceKm))}</span>
    </div>
    <div class="week-summary">계산 기준: 주행거리 1km당 ${CARBON_KG_PER_KM}kg CO2 감축</div>
    <div class="weekly-place-list">
      ${stats.places
        .map(
          (place) => `
            <article class="carbon-place-row">
              <strong>${escapeHtml(place.title)}</strong>
              <span>${escapeHtml(formatCarbon(place.carbonKg))} · ${escapeHtml(formatKm(place.distanceKm))}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}
