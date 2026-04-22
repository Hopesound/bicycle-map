const routes = [
  {
    id: "hangang-seoul",
    order: "01",
    name: "한강 스프린트 챌린지",
    city: "서울",
    region: "수도권",
    distance: "28km",
    climb: "120m",
    participants: 1940,
    completions: 1426,
    color: "#0b8c7a",
    center: [37.528, 126.934],
    path: [
      [37.565, 126.877],
      [37.556, 126.903],
      [37.543, 126.925],
      [37.529, 126.947],
      [37.52, 126.972],
      [37.517, 127.012],
      [37.522, 127.052]
    ],
    description:
      "도심 접근성이 높은 시즌2 대표 루트입니다. 출퇴근형 참여와 야간 스탬프 운영에 잘 맞습니다.",
    checkpoints: [
      { id: "hangang-1", name: "여의도 인증존", coords: [37.528, 126.93] },
      { id: "hangang-2", name: "반포 야간 인증", coords: [37.508, 126.995] },
      { id: "hangang-3", name: "잠실 피니시", coords: [37.519, 127.081] }
    ]
  },
  {
    id: "bukhangang-loop",
    order: "02",
    name: "북한강 루프 챌린지",
    city: "춘천",
    region: "강원권",
    distance: "54km",
    climb: "360m",
    participants: 1188,
    completions: 724,
    color: "#2f6fed",
    center: [37.86, 127.71],
    path: [
      [37.901, 127.746],
      [37.885, 127.725],
      [37.867, 127.706],
      [37.851, 127.69],
      [37.834, 127.673],
      [37.816, 127.699],
      [37.824, 127.734]
    ],
    description:
      "경치형 장거리 코스로 완주 메달형 챌린지에 적합합니다. 주말 참여자 유입이 높은 코스입니다.",
    checkpoints: [
      { id: "bukhangang-1", name: "춘천역 시작점", coords: [37.884, 127.716] },
      { id: "bukhangang-2", name: "삼악산 전망 포인트", coords: [37.853, 127.682] },
      { id: "bukhangang-3", name: "의암호 루프 인증", coords: [37.822, 127.729] }
    ]
  },
  {
    id: "gapcheon-night",
    order: "03",
    name: "갑천 나이트 라이딩",
    city: "대전",
    region: "충청권",
    distance: "22km",
    climb: "85m",
    participants: 920,
    completions: 644,
    color: "#845ef7",
    center: [36.36, 127.378],
    path: [
      [36.378, 127.347],
      [36.372, 127.356],
      [36.364, 127.369],
      [36.355, 127.382],
      [36.348, 127.397],
      [36.341, 127.412]
    ],
    description:
      "입문 참여자가 부담 없이 도전할 수 있는 저녁형 시즌2 루트입니다. 인증 간격이 짧아 운영이 쉽습니다.",
    checkpoints: [
      { id: "gapcheon-1", name: "엑스포교 인증", coords: [36.379, 127.35] },
      { id: "gapcheon-2", name: "갑천 브리지 포인트", coords: [36.357, 127.379] },
      { id: "gapcheon-3", name: "도안 피니시", coords: [36.341, 127.412] }
    ]
  },
  {
    id: "jeonju-hanok",
    order: "04",
    name: "전주 한옥길 챌린지",
    city: "전주",
    region: "전라권",
    distance: "31km",
    climb: "148m",
    participants: 1626,
    completions: 1181,
    color: "#ff9158",
    center: [35.824, 127.148],
    path: [
      [35.842, 127.101],
      [35.838, 127.118],
      [35.832, 127.131],
      [35.824, 127.148],
      [35.818, 127.165],
      [35.806, 127.186],
      [35.795, 127.197]
    ],
    description:
      "전주천과 한옥마을을 잇는 시즌2 메인 루트입니다. 탄소 감축 캠페인 대표 코스로 우선 노출됩니다.",
    checkpoints: [
      { id: "jeonju-1", name: "한옥마을 스타트", coords: [35.815, 127.153] },
      { id: "jeonju-2", name: "전주천 인증 포인트", coords: [35.833, 127.123] },
      { id: "jeonju-3", name: "혁신도시 피니시", coords: [35.799, 127.187] }
    ]
  },
  {
    id: "saemangeum-coast",
    order: "05",
    name: "새만금 코스트 챌린지",
    city: "군산·부안",
    region: "전라권",
    distance: "67km",
    climb: "210m",
    participants: 1384,
    completions: 812,
    color: "#0ea5e9",
    center: [35.842, 126.706],
    path: [
      [35.98, 126.703],
      [35.941, 126.703],
      [35.89, 126.706],
      [35.847, 126.705],
      [35.8, 126.699],
      [35.74, 126.674]
    ],
    description:
      "해안 풍경 중심의 장거리 루트입니다. 탄소 감축 홍보 영상이나 시즌 배너와 잘 어울립니다.",
    checkpoints: [
      { id: "saemangeum-1", name: "군산 방조제 북단", coords: [35.979, 126.703] },
      { id: "saemangeum-2", name: "새만금 중앙 인증", coords: [35.847, 126.705] },
      { id: "saemangeum-3", name: "변산 피니시", coords: [35.729, 126.677] }
    ]
  },
  {
    id: "blue-coast-busan",
    order: "06",
    name: "부산 블루코스트 챌린지",
    city: "부산",
    region: "영남권",
    distance: "36km",
    climb: "232m",
    participants: 1097,
    completions: 738,
    color: "#14b8a6",
    center: [35.158, 129.152],
    path: [
      [35.104, 129.035],
      [35.124, 129.065],
      [35.146, 129.092],
      [35.165, 129.126],
      [35.176, 129.157],
      [35.194, 129.223]
    ],
    description:
      "해안 라인 관광형 코스로 시즌2 후반부 확장 코스에 적합합니다.",
    checkpoints: [
      { id: "busan-1", name: "송도 스타트", coords: [35.078, 129.022] },
      { id: "busan-2", name: "광안리 인증", coords: [35.153, 129.118] },
      { id: "busan-3", name: "해운대 피니시", coords: [35.167, 129.181] }
    ]
  }
];

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
          "전국 자전거 코스를 연결해 이동 거리만큼 탄소 절감 효과를 체감하도록 설계한 시즌형 캠페인입니다. 지도 중심 구조로 운영자와 참가자가 같은 화면을 공유합니다."
      },
      {
        id: "season-target",
        label: "탄소 감축 목표",
        summary: "시즌 목표 지표",
        tag: "목표",
        detailTitle: "누적 탄소 감축 목표",
        detailBody:
          "시즌2는 참여 거리 12만 km, 완주 인증 5천 건, 탄소 감축 추정량 21톤을 목표로 운영됩니다. 메뉴 클릭만으로 권역별 코스 이동이 가능합니다."
      },
      {
        id: "season-city",
        label: "참여 도시",
        summary: "현재 운영 도시 확인",
        tag: "도시",
        detailTitle: "현재 시즌2 운영 도시",
        detailBody:
          "서울, 춘천, 대전, 전주, 군산·부안, 부산을 중심으로 코스가 배치되어 있습니다. 이후 권역별 추가 코스 확장이 가능한 구조입니다."
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
          "원하는 코스를 선택한 뒤 챌린지 페이지에서 참가 등록을 진행하고, 지도에서 인증 스팟을 따라 이동하면 됩니다."
      },
      {
        id: "guide-checkpoint",
        label: "인증 방법",
        summary: "포인트 인증 방식",
        tag: "인증",
        detailTitle: "인증 방법",
        detailBody:
          "좌측 메뉴의 인증 스팟에서 포인트를 선택하면 지도 중심이 이동합니다. 해당 포인트에서 QR 또는 위치 기반 인증을 연결하는 흐름에 맞춰 확장할 수 있습니다."
      },
      {
        id: "guide-benefit",
        label: "완주 혜택",
        summary: "보상 정책 안내",
        tag: "혜택",
        detailTitle: "완주 혜택",
        detailBody:
          "완주 메달, 지역 연계 쿠폰, 탄소 절감 배지와 같은 보상 항목을 시즌별로 구성할 수 있도록 메뉴 체계를 열어두었습니다."
      }
    ]
  },
  operation: {
    title: "운영 메뉴",
    items: [
      {
        id: "op-all",
        label: "전체 코스 보기",
        summary: "전국 코스 한 번에 보기",
        tag: "지도",
        action: { type: "fit-all" },
        detailTitle: "전국 코스 일괄 보기",
        detailBody:
          "등록된 전체 코스를 지도 범위 안에 맞춰 보여줍니다. 전국 운영 상황을 빠르게 확인할 때 쓰는 메뉴입니다."
      },
      {
        id: "op-jeonju",
        label: "전주 메인 코스",
        summary: "시즌 대표 코스 이동",
        tag: "추천",
        action: { type: "focus-route", routeId: "jeonju-hanok" },
        detailTitle: "전주 한옥길 코스 바로 이동",
        detailBody:
          "운영 중심 코스인 전주 한옥길 챌린지로 지도를 즉시 이동합니다."
      },
      {
        id: "op-coast",
        label: "새만금 해안 코스",
        summary: "해안형 장거리 코스",
        tag: "확장",
        action: { type: "focus-route", routeId: "saemangeum-coast" },
        detailTitle: "새만금 코스트 코스 바로 이동",
        detailBody:
          "해안형 시즌 홍보에 활용하기 좋은 새만금 코스트 챌린지로 이동합니다."
      }
    ]
  },
  support: {
    title: "지원 센터",
    items: [
      {
        id: "support-faq",
        label: "FAQ",
        summary: "자주 묻는 질문",
        tag: "지원",
        detailTitle: "FAQ 안내",
        detailBody:
          "하위 메뉴 구조는 FAQ, 운영 공지, 문의 접수 등으로 연결되도록 설계했습니다. 현재는 메인 화면 중심의 정보 허브 역할을 합니다."
      },
      {
        id: "support-contact",
        label: "문의 접수",
        summary: "운영 문의 흐름",
        tag: "문의",
        detailTitle: "문의 접수",
        detailBody:
          "참가자 문의, 인증 오류 접수, 운영 요청을 하위 메뉴로 연결할 수 있게 구성했습니다."
      },
      {
        id: "support-source",
        label: "데이터 출처",
        summary: "지도와 코스 데이터",
        tag: "출처",
        detailTitle: "데이터 출처",
        detailBody:
          "지도는 Kakao 지도 Web API 기반이며, 코스와 인증 포인트는 현재 샘플 데이터로 연결되어 있습니다."
      }
    ]
  }
};

const sideMenus = {
  course: {
    title: "챌린지 코스",
    getItems: () =>
      routes.map((route) => ({
        id: route.id,
        label: route.name,
        summary: `${route.city} · ${route.distance}`,
        tag: route.region,
        action: { type: "focus-route", routeId: route.id },
        detailTitle: route.name,
        detailBody: route.description,
        detailMeta: [
          route.city,
          route.region,
          route.distance,
          `${route.participants.toLocaleString()}명 참가`
        ]
      }))
  },
  checkpoint: {
    title: "인증 스팟",
    getItems: () =>
      routes.flatMap((route) =>
        route.checkpoints.map((spot, index) => ({
          id: spot.id,
          label: spot.name,
          summary: `${route.name} · ${index + 1}번째 인증`,
          tag: route.city,
          action: { type: "focus-checkpoint", routeId: route.id, checkpointId: spot.id },
          detailTitle: spot.name,
          detailBody:
            `${route.name}에 포함된 인증 포인트입니다. 클릭하면 해당 위치로 지도가 이동하고 관련 코스가 강조됩니다.`,
          detailMeta: [route.city, route.region, route.distance]
        }))
      )
  },
  ranking: {
    title: "랭킹 보드",
    getItems: () => [
      {
        id: "ranking-participant",
        label: "참가자 많은 코스",
        summary: "현재 시즌2 인기 코스",
        tag: "TOP",
        action: { type: "focus-route", routeId: "hangang-seoul" },
        detailTitle: "참가자 상위 코스",
        detailBody:
          "한강 스프린트 챌린지가 현재 가장 많은 참가자를 확보하고 있습니다. 도시형 루트로 접근성이 높아 시즌 초반 유입이 강합니다.",
        detailMeta: ["1,940명 참가", "수도권", "도심형"]
      },
      {
        id: "ranking-completion",
        label: "완주율 높은 코스",
        summary: "완주 인증 상위 코스",
        tag: "완주",
        action: { type: "focus-route", routeId: "jeonju-hanok" },
        detailTitle: "완주 인증 상위 코스",
        detailBody:
          "전주 한옥길 챌린지는 시즌 대표 코스로 완주 인증 수가 가장 높은 편입니다. 운영 배너와 연동하기 좋은 코스입니다.",
        detailMeta: ["1,181회 완주", "전라권", "대표 코스"]
      },
      {
        id: "ranking-growth",
        label: "성장 기대 코스",
        summary: "확장 운영 추천",
        tag: "확장",
        action: { type: "focus-route", routeId: "saemangeum-coast" },
        detailTitle: "성장 기대 코스",
        detailBody:
          "새만금 코스트 챌린지는 시즌 후반 관광 연계형 캠페인으로 성장 잠재력이 높은 코스입니다.",
        detailMeta: ["해안형", "장거리", "홍보 적합"]
      }
    ]
  },
  carbon: {
    title: "탄소 절감",
    getItems: () => [
      {
        id: "carbon-total",
        label: "누적 감축량",
        summary: "시즌2 전체 추정치",
        tag: "21t",
        detailTitle: "누적 탄소 감축량",
        detailBody:
          "현재 시즌2 운영 기준으로 총 이동 거리와 대중교통/자가용 대체 이동량을 반영한 탄소 감축 추정치를 연결할 수 있습니다.",
        detailMeta: ["21톤 목표", "12만 km 목표", "전국 기준"]
      },
      {
        id: "carbon-tree",
        label: "나무 환산",
        summary: "감축량 시각화 지표",
        tag: "환산",
        detailTitle: "나무 식재 환산 지표",
        detailBody:
          "탄소 감축량을 나무 식재 수, 도시숲 흡수량 등으로 치환해 시즌 참여 동기를 더 강하게 만들 수 있습니다.",
        detailMeta: ["시각화 가능", "캠페인 활용", "홍보 지표"]
      },
      {
        id: "carbon-route",
        label: "대표 탄소 코스",
        summary: "대표 코스 바로 보기",
        tag: "전주",
        action: { type: "focus-route", routeId: "jeonju-hanok" },
        detailTitle: "대표 탄소 감축 코스",
        detailBody:
          "전주 한옥길 코스를 시즌2 탄소 감축 대표 루트로 설정해 상단 배너와 좌측 메뉴에서 동시에 접근할 수 있게 했습니다.",
        detailMeta: ["전주", "대표 노출", "시즌 메인"]
      }
    ]
  }
};

const state = {
  selectedRouteId: (window.DEFAULT_ROUTE_ID || "jeonju-hanok"),
  openTopMenuId: "intro",
  openSideMenuId: "course"
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
  closeButtons: document.querySelectorAll("[data-close-panel]")
};

const mapState = {
  map: null,
  markers: new Map(),
  polylines: new Map(),
  infoWindows: new Map(),
  checkpointMarkers: new Map()
};

bootstrap();

async function bootstrap() {
  bindMenuButtons();
  renderTopPanel(state.openTopMenuId);
  renderSidePanel(state.openSideMenuId);

  const appKey = window.KAKAO_MAP_APPKEY;
  if (!appKey || appKey === "YOUR_KAKAO_JAVASCRIPT_KEY") {
    elements.keyNotice.hidden = false;
    elements.mapStatus.textContent = "카카오맵 키를 설정하면 지도가 표시됩니다.";
    renderMapFallback();
    return;
  }

  try {
    await loadKakaoMapsSdk(appKey);
    initMap();
  } catch (error) {
    elements.keyNotice.hidden = false;
    elements.mapStatus.textContent = "카카오맵 로딩에 실패했습니다.";
    renderMapFallback();
  }
}

function renderMapFallback() {
  elements.map.innerHTML = `
    <div style="display:grid;place-items:center;height:100%;padding:24px;color:#17322f;background:linear-gradient(180deg,#e7efe9 0%,#dde8e0 100%);font-weight:700;text-align:center;">
      카카오맵 JavaScript 키를 연결하면 이 위치에 시즌2 지도가 표시됩니다.
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
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${appKey}`;
    script.onload = () => window.kakao.maps.load(resolve);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initMap() {
  const kakaoMap = new kakao.maps.Map(elements.map, {
    center: new kakao.maps.LatLng(36.2683, 127.6358),
    level: 13
  });

  mapState.map = kakaoMap;

  routes.forEach((route) => {
    const path = route.path.map(([lat, lng]) => new kakao.maps.LatLng(lat, lng));

    const polyline = new kakao.maps.Polyline({
      path,
      strokeWeight: 5,
      strokeColor: route.color,
      strokeOpacity: route.id === state.selectedRouteId ? 0.92 : 0.34,
      strokeStyle: "solid"
    });
    polyline.setMap(kakaoMap);
    mapState.polylines.set(route.id, polyline);

    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: new kakao.maps.LatLng(route.center[0], route.center[1]),
      title: route.name,
      image: createMarkerImage(route, route.id === state.selectedRouteId)
    });

    const infoWindow = new kakao.maps.InfoWindow({
      content: `
        <div style="padding:10px 12px;min-width:180px;font-size:13px;line-height:1.5;">
          <strong style="display:block;font-size:14px;margin-bottom:4px;">${route.name}</strong>
          <span>${route.city} · ${route.distance}</span>
        </div>
      `
    });

    kakao.maps.event.addListener(marker, "click", () => {
      selectRoute(route.id);
      infoWindow.open(kakaoMap, marker);
      setTimeout(() => infoWindow.close(), 1800);
    });

    mapState.markers.set(route.id, marker);
    mapState.infoWindows.set(route.id, infoWindow);

    const checkpointMarkers = route.checkpoints.map((spot) => {
      const checkpointMarker = new kakao.maps.Marker({
        map: null,
        position: new kakao.maps.LatLng(spot.coords[0], spot.coords[1]),
        title: spot.name,
        image: createCheckpointImage(route.color)
      });

      const checkpointInfo = new kakao.maps.InfoWindow({
        content: `
          <div style="padding:9px 11px;min-width:160px;font-size:13px;line-height:1.5;">
            <strong style="display:block;font-size:14px;margin-bottom:4px;">${spot.name}</strong>
            <span>${route.name}</span>
          </div>
        `
      });

      kakao.maps.event.addListener(checkpointMarker, "click", () => {
        checkpointInfo.open(kakaoMap, checkpointMarker);
        setTimeout(() => checkpointInfo.close(), 1800);
      });

      return {
        id: spot.id,
        marker: checkpointMarker
      };
    });

    mapState.checkpointMarkers.set(route.id, checkpointMarkers);
  });

  selectRoute(state.selectedRouteId, { fitBounds: true });
  elements.mapStatus.textContent = "카카오맵에서 시즌2 코스를 탐색할 수 있습니다.";
}

function createMarkerImage(route, isSelected) {
  const background = isSelected ? "#ff8f54" : route.color;
  const size = isSelected ? 58 : 50;
  const radius = isSelected ? 22 : 20;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect x="4" y="4" width="${size - 8}" height="${size - 8}" rx="${radius}" fill="${background}" transform="rotate(10 ${size / 2} ${size / 2})"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-family="Space Grotesk, sans-serif" font-weight="700" fill="#ffffff">${route.order}</text>
    </svg>
  `;
  return new kakao.maps.MarkerImage(
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    new kakao.maps.Size(size, size),
    { offset: new kakao.maps.Point(size / 2, size - 6) }
  );
}

function createCheckpointImage(color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
      <circle cx="13" cy="13" r="10" fill="${color}" />
      <circle cx="13" cy="13" r="4.5" fill="#ffffff" />
    </svg>
  `;
  return new kakao.maps.MarkerImage(
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    new kakao.maps.Size(26, 26),
    { offset: new kakao.maps.Point(13, 13) }
  );
}

function selectRoute(routeId, options = {}) {
  state.selectedRouteId = routeId;
  if (!mapState.map) {
    renderSidePanel(state.openSideMenuId);
    return;
  }

  routes.forEach((route) => {
    const marker = mapState.markers.get(route.id);
    const polyline = mapState.polylines.get(route.id);
    const checkpointMarkers = mapState.checkpointMarkers.get(route.id) || [];
    const isSelected = route.id === routeId;

    marker.setImage(createMarkerImage(route, isSelected));
    polyline.setOptions({
      strokeWeight: isSelected ? 7 : 5,
      strokeOpacity: isSelected ? 0.95 : 0.34
    });

    checkpointMarkers.forEach(({ marker: checkpointMarker }) => {
      checkpointMarker.setMap(isSelected ? mapState.map : null);
    });
  });

  if (options.fitBounds) {
    fitRouteBounds(routeId);
  }

  const route = routes.find((item) => item.id === routeId);
  if (route) {
    elements.mapStatus.textContent = `${route.name} · ${route.city} 코스를 보고 있습니다.`;
  }

  renderSidePanel(state.openSideMenuId);
}

function fitRouteBounds(routeId) {
  const route = routes.find((item) => item.id === routeId);
  if (!route || !mapState.map) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  route.path.forEach(([lat, lng]) => bounds.extend(new kakao.maps.LatLng(lat, lng)));
  mapState.map.setBounds(bounds);
}

function focusCheckpoint(routeId, checkpointId) {
  const route = routes.find((item) => item.id === routeId);
  if (!route || !mapState.map) {
    return;
  }

  selectRoute(routeId);
  const checkpoint = route.checkpoints.find((spot) => spot.id === checkpointId);
  if (!checkpoint) {
    return;
  }

  mapState.map.setLevel(6);
  mapState.map.panTo(new kakao.maps.LatLng(checkpoint.coords[0], checkpoint.coords[1]));
  elements.mapStatus.textContent = `${checkpoint.name} 인증 스팟으로 이동했습니다.`;
}

function fitAllRoutes() {
  if (!mapState.map) {
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();
  routes.forEach((route) => {
    route.path.forEach(([lat, lng]) => bounds.extend(new kakao.maps.LatLng(lat, lng)));
  });
  mapState.map.setBounds(bounds);
  elements.mapStatus.textContent = "시즌2 전체 코스를 한 번에 보고 있습니다.";
}

function bindMenuButtons() {
  elements.topButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuId = button.dataset.topMenu;
      if (state.openTopMenuId === menuId && !elements.topPanel.root.hidden) {
        elements.topPanel.root.hidden = true;
        state.openTopMenuId = null;
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
      if (state.openSideMenuId === menuId && !elements.sidePanel.root.hidden) {
        elements.sidePanel.root.hidden = true;
        state.openSideMenuId = null;
      } else {
        state.openSideMenuId = menuId;
        elements.sidePanel.root.hidden = false;
        renderSidePanel(menuId);
      }
      updateActiveButtons();
    });
  });

  elements.closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.dataset.closePanel;
      if (panel === "top") {
        state.openTopMenuId = null;
        elements.topPanel.root.hidden = true;
      }
      if (panel === "side") {
        state.openSideMenuId = null;
        elements.sidePanel.root.hidden = true;
      }
      updateActiveButtons();
    });
  });

  updateActiveButtons();
}

function updateActiveButtons() {
  elements.topButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topMenu === state.openTopMenuId);
  });
  elements.sideButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sideMenu === state.openSideMenuId);
  });
}

function renderTopPanel(menuId) {
  if (!menuId) {
    return;
  }

  const menu = topMenus[menuId];
  if (!menu) {
    return;
  }

  elements.topPanel.title.textContent = menu.title;
  renderPanelItems({
    panel: elements.topPanel,
    menu,
    defaultItemId: menu.items[0]?.id
  });
}

function renderSidePanel(menuId) {
  if (!menuId) {
    return;
  }

  const menu = sideMenus[menuId];
  if (!menu) {
    return;
  }

  const items = menu.getItems();
  elements.sidePanel.title.textContent = menu.title;
  renderPanelItems({
    panel: elements.sidePanel,
    menu: { title: menu.title, items },
    defaultItemId:
      menuId === "course"
        ? state.selectedRouteId
        : menuId === "checkpoint"
          ? routes.find((route) => route.id === state.selectedRouteId)?.checkpoints[0]?.id
          : items[0]?.id
  });
}

function renderPanelItems({ panel, menu, defaultItemId }) {
  panel.list.innerHTML = "";

  const activeItem =
    menu.items.find((item) => item.id === defaultItemId) ||
    menu.items[0];

  menu.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "submenu-item";
    if (activeItem && activeItem.id === item.id) {
      button.classList.add("is-active");
    }

    button.innerHTML = `
      <div class="submenu-item-text">
        <strong>${item.label}</strong>
        <span>${item.summary}</span>
      </div>
      <span class="submenu-item-tag">${item.tag || "메뉴"}</span>
    `;

    button.addEventListener("click", () => {
      panel.list.querySelectorAll(".submenu-item").forEach((node) => {
        node.classList.toggle("is-active", node === button);
      });
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

  if (action.type === "focus-checkpoint") {
    focusCheckpoint(action.routeId, action.checkpointId);
  }

  if (action.type === "fit-all") {
    fitAllRoutes();
  }
}
