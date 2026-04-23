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
  },
  {
    id: "saemangeum-coast",
    title: "새만금 코스트 챌린지",
    city: "군산·부안",
    region: "전라권",
    description:
      "새만금 해안 풍경 중심의 시즌2 확장 루트입니다. 장거리 탄소 감축 캠페인에 연결할 수 있습니다.",
    points: [
      [35.98, 126.703],
      [35.941, 126.703],
      [35.89, 126.706],
      [35.847, 126.705],
      [35.8, 126.699],
      [35.74, 126.674]
    ],
    color: "#0ea5e9"
  }
];

const JEONBUK_RECT = "126.45,35.35,127.85,36.20";

const topMenus = {
  intro: {
    title: "챌린지 소개",
    items: [
      {
        id: "season-overview",
        label: "Season2 개요",
        summary: "시즌 전체 방향",
        tag: "안내",
        detailTitle: "탄소를 감축하는 자전거 챌린지 season2",
        detailBody:
          "전국 자전거 코스를 연결해 이동 거리만큼 탄소 절감 효과를 체감하도록 설계한 시즌형 캠페인입니다. 메인 화면은 지도와 메뉴 탐색을 중심으로 구성했습니다."
      },
      {
        id: "season-target",
        label: "탄소 감축 목표",
        summary: "시즌 목표 지표",
        tag: "목표",
        detailTitle: "탄소 감축 목표",
        detailBody:
          "시즌2는 전북 권역 코스를 중심으로 이동 거리와 지역 참여도를 함께 보여주는 구조입니다. 장소 마커를 통해 캠페인 거점도 한 번에 확인할 수 있습니다."
      },
      {
        id: "season-area",
        label: "전북 주요 거점",
        summary: "표출 장소 안내",
        tag: "거점",
        detailTitle: "전북 주요 거점 지도 표출",
        detailBody:
          "구이저수지, 완주군 미소시장, 덕진공원, 팔복예술공장 등 요청하신 거점들이 지도 위에 고정 마커로 표출됩니다."
      }
    ]
  },
  guide: {
    title: "참여 가이드",
    items: [
      {
        id: "guide-join",
        label: "참가 신청",
        summary: "시즌2 참가 흐름",
        tag: "참가",
        detailTitle: "참가 신청 흐름",
        detailBody:
          "원하는 코스를 선택한 뒤 참가 페이지와 연결하고, 지도 위 주요 거점과 인증 포인트를 따라 이동하는 흐름으로 확장할 수 있습니다."
      },
      {
        id: "guide-map",
        label: "지도 탐색",
        summary: "일반/위성지도 전환",
        tag: "지도",
        detailTitle: "지도 탐색 방식",
        detailBody:
          "지도 우측 상단 토글에서 일반지도와 위성지도를 바꿔 볼 수 있습니다. 상단 메뉴를 누르면 좌측 하위 메뉴는 자동으로 닫힙니다."
      }
    ]
  },
  operation: {
    title: "운영 메뉴",
    getItems: () => [
      {
        id: "map-type-roadmap",
        label: "일반 지도",
        summary: "기본 카카오맵 보기",
        tag: state.currentMapType === "ROADMAP" ? "현재" : "지도",
        action: { type: "set-map-type", mapTypeId: "ROADMAP" },
        detailTitle: "일반 지도 모드",
        detailBody:
          "도로와 행정 경계가 잘 보이는 일반 지도를 표시합니다."
      },
      {
        id: "map-type-skyview",
        label: "위성 지도",
        summary: "스카이뷰 보기",
        tag: state.currentMapType === "SKYVIEW" ? "현재" : "위성",
        action: { type: "set-map-type", mapTypeId: "SKYVIEW" },
        detailTitle: "위성 지도 모드",
        detailBody:
          "실제 지형과 건물 배경을 확인할 수 있는 스카이뷰 모드입니다."
      },
      {
        id: "fit-all",
        label: "전체 범위 보기",
        summary: "코스와 주요 장소 함께 보기",
        tag: "전체",
        action: { type: "fit-all" },
        detailTitle: "전체 범위 보기",
        detailBody:
          "주요 코스와 지도에 표시된 장소가 모두 보이도록 범위를 재설정합니다."
      }
    ]
  },
  support: {
    title: "지원 센터",
    items: [
      {
        id: "support-source",
        label: "데이터 출처",
        summary: "Kakao Maps 기반",
        tag: "출처",
        detailTitle: "데이터 출처",
        detailBody:
          "지도는 Kakao 지도 Web API 기반이며, 장소 마커는 주소 검색과 키워드 검색을 조합해 표출합니다."
      },
      {
        id: "support-domain",
        label: "도메인 등록",
        summary: "지도 로딩 오류 대응",
        tag: "점검",
        detailTitle: "카카오 도메인 등록 확인",
        detailBody:
          "지도가 뜨지 않으면 JavaScript 키뿐 아니라 카카오 디벨로퍼스 Web 플랫폼에 현재 접속 도메인이 등록되어 있는지 확인해야 합니다."
      }
    ]
  }
};

const sideMenus = {
  course: {
    title: "챌린지 코스",
    getItems: () =>
      routePlaces.map((route) => ({
        id: route.id,
        label: route.title,
        summary: `${route.city} · ${route.region}`,
        tag: "코스",
        action: { type: "focus-route", routeId: route.id },
        detailTitle: route.title,
        detailBody: route.description,
        detailMeta: [route.city, route.region]
      }))
  },
  checkpoint: {
    title: "인증 스팟",
    getItems: () =>
      selectedPlaces.map((place) => ({
        id: place.id,
        label: place.title,
        summary: place.address || place.query,
        tag: "장소",
        action: { type: "focus-place", placeId: place.id },
        detailTitle: place.title,
        detailBody: place.intro || `${place.title} 위치로 지도를 이동합니다.`,
        intro: place.intro,
        detailMeta: ["전북 권역", "고정 마커"]
      }))
  },
  ranking: {
    title: "랭킹 보드",
    getItems: () => [
      {
        id: "ranking-main",
        label: "대표 코스 보기",
        summary: "전주 한옥길 중심",
        tag: "TOP",
        action: { type: "focus-route", routeId: "jeonju-hanok" },
        detailTitle: "대표 코스 보기",
        detailBody:
          "현재 메인 코스는 전주 한옥길 챌린지입니다. 전북 중심의 화면 흐름에 맞게 우선 노출됩니다."
      },
      {
        id: "ranking-route",
        label: "새만금 확장 코스",
        summary: "해안형 코스 이동",
        tag: "확장",
        action: { type: "focus-route", routeId: "saemangeum-coast" },
        detailTitle: "새만금 확장 코스",
        detailBody:
          "새만금 코스트 챌린지는 시즌2 확장형 해안 코스로 운영 메뉴와 연결됩니다."
      }
    ]
  },
  carbon: {
    title: "탄소 절감",
    getItems: () => [
      {
        id: "carbon-place",
        label: "거점 중심 탐색",
        summary: "선정 장소 확인",
        tag: "거점",
        action: { type: "focus-place", placeId: "goui-reservoir" },
        detailTitle: "거점 중심 탐색",
        detailBody:
          "선정 장소를 기준으로 캠페인 확산 거점을 보여줍니다. 구이저수지와 완주군 미소시장도 포함됩니다."
      },
      {
        id: "carbon-view",
        label: "지도로 보기",
        summary: "전체 범위 재설정",
        tag: "지도",
        action: { type: "fit-all" },
        detailTitle: "지도로 전체 보기",
        detailBody:
          "코스와 고정 마커를 함께 보며 시즌2 전북 거점을 한 번에 살펴볼 수 있습니다."
      }
    ]
  }
};

const state = {
  selectedRouteId: window.DEFAULT_ROUTE_ID || "jeonju-hanok",
  currentMapType: "ROADMAP",
  openTopMenuId: "intro",
  openSideMenuId: null
};

const elements = {
  map: document.getElementById("map"),
  mapStatus: document.getElementById("mapStatus"),
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
  bindMenuButtons();
  bindMapTypeButtons();
  renderTopPanel(state.openTopMenuId);
  updateMapTypeButtons();
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

  routePlaces.forEach((route) => {
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
      updateMapStatus(`${place.title} 위치를 표시하고 있습니다.`);
      setTimeout(() => infoWindow.close(), 2200);
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

  routePlaces.forEach((route) => {
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

  const route = routePlaces.find((item) => item.id === routeId);
  if (route) {
    updateMapStatus(`${route.title} · ${route.city} 코스를 보고 있습니다.`);
  }
}

function fitRouteBounds(routeId) {
  const route = routePlaces.find((item) => item.id === routeId);
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
  updateMapStatus(`${selected.place.title} 위치로 이동했습니다.`);
  setTimeout(() => selected.infoWindow.close(), 2200);
}

function fitAllRoutes() {
  if (!mapState.map) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  routePlaces.forEach((route) => {
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

  if (!options.silent && state.openTopMenuId === "operation") {
    renderTopPanel("operation");
  }
}

function getKakaoMapTypeId(mapTypeId) {
  if (mapTypeId === "SKYVIEW") {
    return kakao.maps.MapTypeId.SKYVIEW;
  }
  return kakao.maps.MapTypeId.ROADMAP;
}

function getMapTypeLabel(mapTypeId) {
  return mapTypeId === "SKYVIEW" ? "위성 지도" : "일반 지도";
}

function updateMapStatus(message) {
  elements.mapStatus.textContent = `${message} · 현재 지도: ${getMapTypeLabel(state.currentMapType)}`;
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
  renderPanelItems(
    elements.topPanel,
    items,
    menuId === "operation" ? `map-type-${state.currentMapType.toLowerCase()}` : items[0]?.id
  );
}

function renderSidePanel(menuId) {
  const menu = sideMenus[menuId];
  if (!menu) {
    return;
  }

  const items = getMenuItems(menu);
  elements.sidePanel.title.textContent = menu.title;
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
