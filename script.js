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
  { id: "kkotsingi", title: "전주시 공영자전거 꽃싱이 송천대여소", query: "꽃싱이 송천대여소 전주", intro: "공영자전거와 바로 연결되는 대여 거점으로 챌린지 시작점으로 활용하기 좋습니다.", fallback: [35.8784, 127.1182] },
  { id: "jeonju-arboretum", title: "전주수목원", query: "전주수목원", intro: "다양한 식물과 산책로가 있는 녹지형 장소로 친환경 챌린지 메시지와 잘 어울립니다.", fallback: [35.8371, 127.0406] },
  { id: "saechangi-bridge", title: "새창이다리", query: "새창이다리 전주", intro: "전주 도심 하천 동선과 연결되는 교량형 위치 표시 지점입니다.", fallback: [35.8134, 127.1202] },
  { id: "omokdae", title: "오목대", query: "오목대 전주", intro: "전주 한옥마을을 내려다볼 수 있는 역사·전망 거점입니다.", fallback: [35.8113, 127.1538] },
  { id: "sanggwan-forest", title: "완주군 상관편백숲 관광안내소", query: "상관편백숲 관광안내소", intro: "편백숲 치유 관광과 자전거 방문 인증을 연결하기 좋은 숲길 거점입니다.", fallback: [35.7621, 127.1859] },
  { id: "march-first", title: "전주3.1운동발상지", query: "전주 3.1운동 발상지", intro: "지역 독립운동의 의미를 담은 역사형 인증 장소입니다.", fallback: [35.8199, 127.1442] },
  { id: "bibijeong", title: "비비정", query: "비비정 완주", intro: "만경강 풍경과 함께 쉬어갈 수 있는 완주 대표 전망 거점입니다.", fallback: [35.8687, 127.0744] },
  { id: "woosuk-hospital", title: "우석대학교 부속 전주한방볍원", query: "우석대학교 부속 전주한방병원", intro: "지역 의료·건강 테마와 연결할 수 있는 도심 거점입니다.", fallback: [35.8137, 127.0892] },
  { id: "sebyeongho", title: "세병호", query: "세병호 전주", intro: "전주 북부권의 수변 경관을 즐길 수 있는 호수형 방문 장소입니다.", fallback: [35.8816, 127.1461] },
  { id: "yeoyu-cafe", title: "무인카페여유(구이로 1575)", query: "무인카페여유 구이로 1575", intro: "구이로 라이딩 중 쉬어가기 좋은 무인카페형 휴식 거점입니다.", fallback: [35.7449, 127.1048] },
  { id: "jeonju-archive", title: "전주시민기록관", query: "전주시민기록관", intro: "전주 시민의 생활 기록을 만날 수 있는 문화·기록 거점입니다.", fallback: [35.8207, 127.1459] },
  { id: "iksan-samil", title: "익산 삼일교회(참새방앗간)", query: "삼일교회 익산", intro: "익산권 커뮤니티 방문 지점으로 확장 코스와 연결할 수 있는 장소입니다.", fallback: [35.9445, 126.9546] },
  { id: "wind-road", title: "바람쐬는길", query: "바람쐬는길 전주", intro: "가볍게 이동하며 쉬어갈 수 있는 산책·라이딩 친화형 길입니다.", fallback: [35.8271, 127.1519] },
  { id: "ajung-library", title: "아중호수도서관", query: "아중호수도서관", intro: "아중호수와 독서 문화가 만나는 생활문화형 인증 장소입니다.", fallback: [35.8328, 127.1768] },
  { id: "jeonju-fm", title: "전주공동체라디오 전주FM", query: "전주공동체라디오 전주FM", intro: "지역 미디어와 시민 참여 메시지를 연결할 수 있는 커뮤니티 거점입니다.", fallback: [35.8148, 127.1211] },
  { id: "daedeok-elementary", title: "대덕초등학교", query: "대덕초등학교 완주", intro: "지역 생활권을 연결하는 교육 시설 주변 위치 표시 지점입니다.", fallback: [35.9139, 127.2386] },
  { id: "chucheondae", title: "추천대", query: "추천대 완주", intro: "완주권 역사·경관 동선과 연결할 수 있는 방문 거점입니다.", fallback: [35.9589, 127.2656] },
  { id: "deokjin-park", title: "덕진공원", query: "덕진공원", intro: "전주 대표 공원으로 수변 경관과 휴식 동선이 좋은 시민 친화형 장소입니다.", fallback: [35.8482, 127.1201] },
  { id: "volunteer-center", title: "전주시 자원봉사센터", query: "전주시 자원봉사센터", intro: "시민 참여와 봉사 활동을 챌린지 캠페인과 연결하기 좋은 거점입니다.", fallback: [35.8247, 127.1487] },
  { id: "medical-coop", title: "전주의료사협빌딩", query: "전주의료사협빌딩", intro: "건강한 이동과 지역 의료 협동의 메시지를 함께 담을 수 있는 장소입니다.", fallback: [35.8176, 127.1104] },
  { id: "eoeun-bridge", title: "어은 쌍다리", query: "어은 쌍다리 완주", intro: "완주 하천 동선에서 위치를 확인하기 좋은 교량형 인증 지점입니다.", fallback: [35.9302, 127.2269] },
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
const challengeRoutes = routePlaces.filter((route) => route.id === "jeonju-hanok");
const WEEK_COUNT = 4;
const TREASURE_PLACES_PER_WEEK = 4;
const TREASURE_PLAN_STORAGE_KEY = "bicycle-challenge-weekly-treasures";
const CERTIFICATION_STORAGE_KEY = "bicycle-challenge-certifications";
const CARBON_KG_PER_KM = 0.21;
const BAND_CERTIFICATION_URL = "https://www.band.us/band/94500191/post";
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
          "좌측 보물찾기 메뉴에서 1주차부터 4주차까지 랜덤으로 공개된 장소를 확인합니다. 장소를 누르면 지도에서 위치를 바로 볼 수 있습니다."
      },
      {
        id: "method-certify",
        label: "2. 인증하기 등록",
        summary: "사진, 거리, 댓글 입력",
        tag: "STEP",
        detailTitle: "인증 등록",
        detailBody:
          "공개된 장소를 방문한 뒤 인증하기 메뉴에서 인증사진, 주행거리, 댓글을 입력해 기록합니다."
      },
      {
        id: "method-carbon",
        label: "3. 탄소절감 확인",
        summary: "등록 기록 기반 계산",
        tag: "STEP",
        detailTitle: "탄소절감량 확인",
        detailBody:
          "등록된 주행거리를 기준으로 주차별 예상 탄소절감량을 확인합니다. 계산 기준은 1km당 0.21kg CO2 절감입니다."
      }
    ]
  },
  event: {
    title: "이벤트",
    items: [
      {
        id: "event-weekly",
        label: "주차별 미션 이벤트",
        summary: "매주 공개 장소 인증",
        tag: "미션",
        detailTitle: "주차별 미션 이벤트",
        detailBody:
          "각 주차에 공개된 보물찾기 장소를 인증하면 해당 주차 이벤트 참여 기록으로 활용할 수 있습니다."
      },
      {
        id: "event-carbon",
        label: "탄소절감 챌린지",
        summary: "주행거리 기반 참여",
        tag: "탄소",
        detailTitle: "탄소절감 챌린지",
        detailBody:
          "인증하기에서 등록한 주행거리를 모아 탄소절감량을 비교하고, 친환경 이동 성과를 확인합니다."
      }
    ]
  },
  community: {
    title: "커뮤니티",
    items: [
      {
        id: "community-board",
        label: "참여 소식",
        summary: "댓글과 인증 기록 공유",
        tag: "소식",
        detailTitle: "참여 소식",
        detailBody:
          "참가자가 남긴 댓글과 인증 기록을 커뮤니티 콘텐츠로 확장할 수 있는 공간입니다."
      },
      {
        id: "community-guide",
        label: "운영자 안내",
        summary: "장소 공개와 인증 관리",
        tag: "안내",
        detailTitle: "운영자 안내",
        detailBody:
          "현재 페이지는 정적 홈페이지이므로 인증 내용은 접속한 브라우저에 저장됩니다. 서버 연동을 추가하면 실제 커뮤니티 게시판으로 확장할 수 있습니다."
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
  openSideMenuId: null
};

const elements = {
  homeIntro: document.getElementById("homeIntro"),
  map: document.getElementById("map"),
  mapStatus: document.getElementById("mapStatus"),
  placeCard: document.getElementById("placeCard"),
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
  selectedPlaceMarkers: []
};

bootstrap();

async function bootstrap() {
  bindHomeIntro();
  bindMenuButtons();
  bindMapTypeButtons();
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

  challengeRoutes.forEach((route) => {
    const polyline = new kakao.maps.Polyline({
      path: route.points.map(([lat, lng]) => new kakao.maps.LatLng(lat, lng)),
      strokeWeight: route.id === state.selectedRouteId ? 7 : 5,
      strokeColor: route.color,
      strokeOpacity: route.id === state.selectedRouteId ? 0.95 : 0.34,
      strokeStyle: "solid"
    });
    polyline.setMap(map);
    mapState.routePolylines.set(route.id, polyline);
  });

  renderSelectedPlaces();
  selectRoute(state.selectedRouteId, { fitBounds: true });
  updateMapStatus("카카오맵에서 시즌2 코스를 탐색할 수 있습니다.");
}

function renderSelectedPlaces() {
  if (!mapState.map || !window.kakao?.maps?.services) {
    createSelectedPlaceMarkers(selectedPlaces.map((place) => ({ ...place, coords: place.fallback })));
    return;
  }

  const geocoder = new kakao.maps.services.Geocoder();
  const placesService = new kakao.maps.services.Places();

  resolveSelectedPlaces(selectedPlaces, geocoder, placesService).then((places) => {
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

    if (place.address) {
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

function createSelectedPlaceMarkers(places) {
  if (!mapState.map) {
    return;
  }

  mapState.selectedPlaceMarkers.forEach(({ marker }) => marker.setMap(null));
  mapState.selectedPlaceMarkers = [];

  places.forEach((place) => {
    const marker = new kakao.maps.Marker({
      map: mapState.map,
      position: new kakao.maps.LatLng(place.coords[0], place.coords[1]),
      title: place.title,
      image: createSelectedPlaceMarkerImage()
    });

    const infoWindow = new kakao.maps.InfoWindow({
      content: `
        <div style="padding:10px 12px;min-width:200px;font-size:13px;line-height:1.55;">
          <strong style="display:block;font-size:14px;margin-bottom:4px;">${place.title}</strong>
          <span>${place.address || place.query}</span>
        </div>
      `
    });

    kakao.maps.event.addListener(marker, "click", () => {
      infoWindow.open(mapState.map, marker);
      showPlaceCard(place);
      updateMapStatus(`${place.title} 위치를 표시하고 있습니다.`, { highlightWord: place.title });
      setTimeout(() => infoWindow.close(), 1600);
    });

    mapState.selectedPlaceMarkers.push({ place, marker, infoWindow });
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
  if (route) {
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
  mapState.map.panTo(new kakao.maps.LatLng(selected.place.coords[0], selected.place.coords[1]));
  selected.infoWindow.open(mapState.map, selected.marker);
  showPlaceCard(selected.place);
  updateMapStatus(`${selected.place.title} 위치로 이동했습니다.`, { highlightWord: selected.place.title });
  setTimeout(() => selected.infoWindow.close(), 1600);
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

  const weekLabels = getWeeksForPlace(place.id).map((week) => `${week}주차`);
  elements.placeCard.hidden = false;
  elements.placeCard.innerHTML = `
    <button class="place-card-close" type="button" data-close-place-card aria-label="장소 정보 닫기">×</button>
    <p class="place-card-kicker">보물찾기 장소</p>
    <h3>${escapeHtml(place.title)}</h3>
    <p class="place-card-address">${escapeHtml(place.address || place.query)}</p>
    <p class="place-card-intro">${escapeHtml(place.intro || "자전거 챌린지 인증 장소입니다.")}</p>
    ${
      weekLabels.length
        ? `<div class="place-card-weeks">${weekLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}</div>`
        : ""
    }
    <div class="place-card-actions">
      <button type="button" class="place-card-action" data-band-certify>네이버 밴드 인증하기</button>
      <button type="button" class="place-card-action is-light" data-close-place-card>닫기</button>
    </div>
  `;

  elements.placeCard.querySelectorAll("[data-close-place-card]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.placeCard.hidden = true;
    });
  });

  elements.placeCard.querySelector("[data-band-certify]")?.addEventListener("click", () => {
    openBandCertificationPage();
  });
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
  renderPanelItems(elements.topPanel, items, items[0]?.id);
}

function renderSidePanel(menuId) {
  const menu = sideMenus[menuId];
  if (!menu) {
    return;
  }

  const items = getMenuItems(menu);
  elements.sidePanel.title.textContent = menu.title;
  elements.sidePanel.root.dataset.panelMode = menuId;
  elements.sidePanel.detail.hidden = false;
  renderPanelItems(elements.sidePanel, items, items[0]?.id);
}

function renderPanelItems(panel, items, defaultItemId) {
  panel.list.innerHTML = "";

  const activeItem = items.find((item) => item.id === defaultItemId) || items[0];

  items.forEach((item) => {
    const isActive = activeItem?.id === item.id;
    const inlineIntro =
      isActive && item.intro ? `<div class="inline-spot-intro">${item.intro}</div>` : "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "submenu-item";
    button.classList.toggle("is-active", isActive);
    button.innerHTML = `
      <div class="submenu-item-text">
        <strong>${item.label}</strong>
        <span>${item.summary}</span>
        ${inlineIntro}
      </div>
      <span class="submenu-item-tag">${item.tag || "메뉴"}</span>
    `;

    button.addEventListener("click", () => {
      panel.list.querySelectorAll(".submenu-item").forEach((node) => {
        node.classList.toggle("is-active", node === button);
      });
      panel.list.querySelectorAll(".inline-spot-intro").forEach((node) => node.remove());
      if (item.intro) {
        const intro = document.createElement("div");
        intro.className = "inline-spot-intro";
        intro.textContent = item.intro;
        button.querySelector(".submenu-item-text")?.appendChild(intro);
      }
      renderPanelDetail(panel.detail, item);
      handleMenuAction(item.action);
    });

    panel.list.appendChild(button);
  });

  if (activeItem) {
    renderPanelDetail(panel.detail, activeItem);
  }
}

function renderPanelDetail(container, item) {
  if (item.detailType === "main-image") {
    renderMainImageDetail(container, item);
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

  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <div class="week-summary">${item.week}주차 공개 장소 ${places.length}곳이 랜덤으로 배정되었습니다.</div>
    <div class="weekly-place-list">
      ${places
        .map(
          (place, index) => `
            <article class="weekly-place-card">
              <strong>${index + 1}. ${escapeHtml(place.title)}</strong>
              <span>${escapeHtml(place.address || place.query)}</span>
              <button class="mini-action" type="button" data-focus-place="${escapeHtml(place.id)}">지도에서 보기</button>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  bindFocusPlaceButtons(container);
}

function renderWeeklyCertificationDetail(container, item) {
  const places = getWeeklyPlaces(item.week);
  const records = getCertificationRecords();

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
              <span>${escapeHtml(place.address || place.query)}</span>
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
  const stats = getWeeklyCarbonStats(item.week);
  const overallStats = getOverallCarbonStats();

  container.innerHTML = `
    <h3>${escapeHtml(item.detailTitle || item.label)}</h3>
    <p>${escapeHtml(item.detailBody || item.summary)}</p>
    <div class="carbon-meter is-total">
      <strong>${escapeHtml(formatCarbon(overallStats.totalCarbonKg))}</strong>
      <span>전체 탄소절감량 · 전체 주행거리 ${escapeHtml(formatKm(overallStats.totalDistanceKm))}</span>
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
  const bandWindow = window.open(BAND_CERTIFICATION_URL, "_blank", "noopener,noreferrer");
  if (!bandWindow) {
    window.location.href = BAND_CERTIFICATION_URL;
  }
}

function getWeeklyTreasurePlan() {
  if (weeklyTreasurePlanCache) {
    return weeklyTreasurePlanCache;
  }

  const savedPlan = readWeeklyTreasurePlan();
  if (savedPlan) {
    weeklyTreasurePlanCache = hydrateWeeklyTreasurePlan(savedPlan);
    return weeklyTreasurePlanCache;
  }

  const createdPlan = createWeeklyTreasurePlan();
  saveWeeklyTreasurePlan(createdPlan);
  weeklyTreasurePlanCache = hydrateWeeklyTreasurePlan(createdPlan);
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
  const shuffledPlaces = shufflePlaces(selectedPlaces);
  return Array.from({ length: WEEK_COUNT }, (_, index) => {
    const start = index * TREASURE_PLACES_PER_WEEK;
    return {
      week: index + 1,
      placeIds: shuffledPlaces.slice(start, start + TREASURE_PLACES_PER_WEEK).map((place) => place.id)
    };
  });
}

function hydrateWeeklyTreasurePlan(plan) {
  return plan.map((week) => ({
    week: Number(week.week),
    placeIds: week.placeIds,
    places: week.placeIds.map((placeId) => getPlaceById(placeId)).filter(Boolean)
  }));
}

function isValidTreasurePlan(plan) {
  return (
    Array.isArray(plan) &&
    plan.length === WEEK_COUNT &&
    plan.every(
      (week, index) =>
        Number(week.week) === index + 1 &&
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

function getWeeklyPlaces(week) {
  return getWeeklyTreasurePlan().find((item) => item.week === Number(week))?.places || [];
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
