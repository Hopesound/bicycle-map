const routes = [
  {
    id: "hangang-seoul",
    order: "01",
    name: "한강 스프린트 챌린지",
    city: "서울",
    region: "수도권",
    difficulty: "도심",
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
      "여의도에서 잠실까지 이어지는 도시형 리버사이드 챌린지입니다. 야간 운영과 랭킹 이벤트에 적합합니다.",
    checkpoints: [
      { name: "여의도 인증존", coords: [37.528, 126.93] },
      { name: "반포 야간 인증", coords: [37.508, 126.995] },
      { name: "잠실 피니시", coords: [37.519, 127.081] }
    ]
  },
  {
    id: "bukhangang-loop",
    order: "02",
    name: "북한강 루프 챌린지",
    city: "춘천",
    region: "강원권",
    difficulty: "중급",
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
      "호반과 강변을 따라 이어지는 장거리 루트입니다. 경치형 챌린지나 주말 완주 미션에 잘 맞습니다.",
    checkpoints: [
      { name: "춘천역 시작점", coords: [37.884, 127.716] },
      { name: "삼악산 전망 포인트", coords: [37.853, 127.682] },
      { name: "의암호 루프 인증", coords: [37.822, 127.729] }
    ]
  },
  {
    id: "gapcheon-night",
    order: "03",
    name: "갑천 나이트 라이딩",
    city: "대전",
    region: "충청권",
    difficulty: "초급",
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
      "가볍게 참여할 수 있는 저녁형 챌린지입니다. 초보 참여자 유입과 직장인 이벤트 운영에 유리합니다.",
    checkpoints: [
      { name: "엑스포교 인증", coords: [36.379, 127.35] },
      { name: "갑천 브리지 포인트", coords: [36.357, 127.379] },
      { name: "도안 피니시", coords: [36.341, 127.412] }
    ]
  },
  {
    id: "jeonju-hanok",
    order: "04",
    name: "전주 한옥길 챌린지",
    city: "전주",
    region: "전라권",
    difficulty: "도심",
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
      "전주천과 한옥마을, 혁신도시 축을 묶은 메인 챌린지입니다. 전라북도 항공사진 영역과도 가장 잘 맞닿아 있습니다.",
    checkpoints: [
      { name: "한옥마을 스타트", coords: [35.815, 127.153] },
      { name: "전주천 인증 포인트", coords: [35.833, 127.123] },
      { name: "혁신도시 피니시", coords: [35.799, 127.187] }
    ]
  },
  {
    id: "saemangeum-coast",
    order: "05",
    name: "새만금 코스트 챌린지",
    city: "군산·부안",
    region: "전라권",
    difficulty: "바다",
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
      "방조제와 해안 풍경을 전면에 내세운 장거리 챌린지입니다. 전북 대표 코스로 홍보 카드와 잘 어울립니다.",
    checkpoints: [
      { name: "군산 방조제 북단", coords: [35.979, 126.703] },
      { name: "새만금 중앙 인증", coords: [35.847, 126.705] },
      { name: "변산 피니시", coords: [35.729, 126.677] }
    ]
  },
  {
    id: "blue-coast-busan",
    order: "06",
    name: "부산 블루코스트 챌린지",
    city: "부산",
    region: "영남권",
    difficulty: "해안",
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
      "도심 해안 라인을 따라 달리는 관광형 챌린지로, 시즌 캠페인이나 여행형 이벤트에 적합합니다.",
    checkpoints: [
      { name: "송도 스타트", coords: [35.078, 129.022] },
      { name: "광안리 인증", coords: [35.153, 129.118] },
      { name: "해운대 피니시", coords: [35.167, 129.181] }
    ]
  }
];

const regionCopy = {
  전체: {
    title: "전체 권역",
    description: "전국 챌린지 현황과 전라북도 항공사진 오버레이를 동시에 확인할 수 있습니다."
  },
  수도권: {
    title: "수도권",
    description: "도심 접근성이 높은 짧은 코스 중심 권역입니다. 야간형 또는 랭킹형 챌린지에 적합합니다."
  },
  강원권: {
    title: "강원권",
    description: "호수와 강변을 활용한 경치형 루트가 많아 주말 원정형 챌린지 운영에 적합합니다."
  },
  충청권: {
    title: "충청권",
    description: "초급 입문형과 야간형 운영에 맞는 평탄 코스 비중이 높은 권역입니다."
  },
  전라권: {
    title: "전라권",
    description: "전라북도 항공사진 오버레이가 적용되는 핵심 운영 권역입니다. 도심형과 해안형 코스를 함께 보여줍니다."
  },
  영남권: {
    title: "영남권",
    description: "바다와 업힐을 결합한 코스가 많아 시즌형 챌린지나 관광 연계 기획에 적합합니다."
  }
};

const elements = {
  resultList: document.getElementById("resultList"),
  resultCount: document.getElementById("resultCount"),
  regionChips: document.getElementById("regionChips"),
  regionSummary: document.getElementById("regionSummary"),
  challengeSearch: document.getElementById("challengeSearch"),
  selectedRouteCard: document.getElementById("selectedRouteCard"),
  activeRouteCount: document.getElementById("activeRouteCount"),
  participantCount: document.getElementById("participantCount"),
  completionCount: document.getElementById("completionCount"),
  tabButtons: document.querySelectorAll(".tab-button"),
  tabPanels: document.querySelectorAll(".tab-panel"),
  railButtons: document.querySelectorAll(".rail-button"),
  panelClose: document.querySelector(".panel-close"),
  searchPanel: document.querySelector(".search-panel"),
  layerButtons: document.querySelectorAll(".layer-button")
};

const state = {
  activeRegion: "전체",
  query: "",
  selectedRouteId: "jeonju-hanok",
  imageryEnabled: true
};

if (!window.L) {
  const mapTarget = document.getElementById("map");
  mapTarget.innerHTML =
    '<div style="display:grid;place-items:center;height:100%;padding:24px;background:#dfe9ea;color:#153635;font-weight:700">지도를 불러오지 못했습니다. 네트워크 연결 후 다시 확인해주세요.</div>';
} else {
  init();
}

function init() {
  const map = L.map("map", {
    zoomControl: false,
    attributionControl: true,
    minZoom: 7,
    maxZoom: 16
  }).setView([36.02, 127.55], 7);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  const koreaBounds = L.latLngBounds(
    [32.6, 123.7],
    [39.3, 132.4]
  );
  map.setMaxBounds(koreaBounds.pad(0.15));

  const baseLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const jeonbukBounds = L.latLngBounds(
    [35.18, 126.52],
    [36.18, 127.9]
  );

  const imageryLayer = L.tileLayer(
    "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 18,
      bounds: jeonbukBounds,
      opacity: 0.96,
      attribution: "Tiles &copy; Esri"
    }
  ).addTo(map);

  const jeonbukGuide = L.rectangle(jeonbukBounds, {
    color: "#0b8c7a",
    weight: 2,
    dashArray: "10 8",
    fillColor: "#0b8c7a",
    fillOpacity: 0.04
  }).addTo(map);

  jeonbukGuide.bindTooltip("전라북도 항공사진 오버레이 영역", {
    permanent: false,
    direction: "top"
  });

  const routeLayers = new Map();
  const markerLayers = new Map();
  const checkpointLayers = new Map();

  routes.forEach((route) => {
    const polyline = L.polyline(route.path, {
      color: route.color,
      weight: route.id === state.selectedRouteId ? 7 : 4,
      opacity: route.id === state.selectedRouteId ? 0.92 : 0.42,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(map);

    const marker = L.marker(route.center, {
      icon: createRouteIcon(route, route.id === state.selectedRouteId),
      keyboard: true,
      title: route.name
    }).addTo(map);

    marker.bindTooltip(
      `<div class="route-tooltip"><strong>${route.name}</strong><span>${route.city} · ${route.distance}</span></div>`,
      {
        direction: "top",
        offset: [0, -18],
        opacity: 1
      }
    );

    marker.on("click", () => {
      state.selectedRouteId = route.id;
      render(map, imageryLayer, routeLayers, markerLayers, checkpointLayers);
      focusRoute(map, route);
    });

    const checkpoints = route.checkpoints.map((spot) =>
      L.circleMarker(spot.coords, {
        radius: 6,
        color: "#ffffff",
        weight: 2,
        fillColor: route.color,
        fillOpacity: 1,
        opacity: 1
      })
        .bindTooltip(spot.name, {
          className: "checkpoint-tooltip",
          direction: "top",
          offset: [0, -10]
        })
    );

    routeLayers.set(route.id, polyline);
    markerLayers.set(route.id, marker);
    checkpointLayers.set(route.id, checkpoints);
  });

  renderRegionChips();
  bindTabs();
  bindRail(map);
  bindSearch(map, routeLayers, markerLayers, checkpointLayers, imageryLayer);
  bindLayerButtons(map, imageryLayer);
  bindPanelClose();

  render(map, imageryLayer, routeLayers, markerLayers, checkpointLayers);
  updateDashboard();
}

function createRouteIcon(route, selected) {
  return L.divIcon({
    className: "route-pin-shell",
    html: `<div class="route-pin ${selected ? "is-selected" : ""}"><strong>${route.order}</strong></div>`,
    iconSize: [56, 56],
    iconAnchor: [28, 44],
    popupAnchor: [0, -32]
  });
}

function render(map, imageryLayer, routeLayers, markerLayers, checkpointLayers) {
  const filteredRoutes = getFilteredRoutes();
  const selectedRoute =
    filteredRoutes.find((route) => route.id === state.selectedRouteId) ||
    filteredRoutes[0] ||
    null;

  if (selectedRoute) {
    state.selectedRouteId = selectedRoute.id;
  }

  routes.forEach((route) => {
    const visible = filteredRoutes.some((item) => item.id === route.id);
    const isSelected = selectedRoute && route.id === selectedRoute.id;
    const line = routeLayers.get(route.id);
    const marker = markerLayers.get(route.id);
    const checkpoints = checkpointLayers.get(route.id);

    if (visible) {
      if (!map.hasLayer(line)) {
        line.addTo(map);
      }
      if (!map.hasLayer(marker)) {
        marker.addTo(map);
      }

      line.setStyle({
        weight: isSelected ? 7 : 4,
        opacity: isSelected ? 0.92 : 0.4
      });
      marker.setIcon(createRouteIcon(route, isSelected));
    } else {
      if (map.hasLayer(line)) {
        map.removeLayer(line);
      }
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    }

    checkpoints.forEach((spot) => {
      const shouldShow = isSelected && visible;
      if (shouldShow && !map.hasLayer(spot)) {
        spot.addTo(map);
      }
      if (!shouldShow && map.hasLayer(spot)) {
        map.removeLayer(spot);
      }
    });
  });

  renderResultList(filteredRoutes, selectedRoute, map);
  renderRegionSummary(filteredRoutes);
  renderSelectedRoute(selectedRoute, map);

  elements.layerButtons.forEach((button) => {
    const isImagery = button.dataset.layer === "imagery";
    button.classList.toggle("is-active", isImagery === state.imageryEnabled);
  });

  if (state.imageryEnabled && !map.hasLayer(imageryLayer)) {
    imageryLayer.addTo(map);
  }

  if (!state.imageryEnabled && map.hasLayer(imageryLayer)) {
    map.removeLayer(imageryLayer);
  }
}

function renderResultList(filteredRoutes, selectedRoute, map) {
  elements.resultCount.textContent = filteredRoutes.length;
  elements.resultList.innerHTML = "";

  if (!filteredRoutes.length) {
    const empty = document.createElement("div");
    empty.className = "result-item";
    empty.innerHTML = `
      <div class="result-item-head">
        <h3>검색 결과가 없습니다</h3>
      </div>
      <p class="result-region">다른 챌린지명 또는 권역으로 다시 검색해보세요.</p>
    `;
    elements.resultList.appendChild(empty);
    return;
  }

  filteredRoutes.forEach((route) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "result-item";
    if (selectedRoute && route.id === selectedRoute.id) {
      button.classList.add("is-selected");
    }

    button.innerHTML = `
      <div class="result-item-head">
        <div>
          <h3>${route.name}</h3>
          <div class="result-region">${route.city} · ${route.region}</div>
        </div>
        <span class="pill is-accent">${route.difficulty}</span>
      </div>
      <div class="pill-row">
        <span class="pill">${route.distance}</span>
        <span class="pill">${route.climb} 상승</span>
        <span class="pill">${route.completions.toLocaleString()} 완주</span>
      </div>
    `;

    button.addEventListener("click", () => {
      state.selectedRouteId = route.id;
      render(window.mapRef || map, window.imageryRef, window.routeRef, window.markerRef, window.checkpointRef);
      focusRoute(map, route);
    });

    elements.resultList.appendChild(button);
  });
}

function renderRegionChips() {
  const labels = ["전체", "수도권", "강원권", "충청권", "전라권", "영남권"];
  elements.regionChips.innerHTML = "";

  labels.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-chip";
    button.textContent = label;
    button.classList.toggle("is-active", state.activeRegion === label);

    button.addEventListener("click", () => {
      state.activeRegion = label;
      renderRegionChips();
      render(window.mapRef, window.imageryRef, window.routeRef, window.markerRef, window.checkpointRef);
      fitFilteredRoutes(window.mapRef, getFilteredRoutes());
    });

    elements.regionChips.appendChild(button);
  });
}

function renderRegionSummary(filteredRoutes) {
  const copy = regionCopy[state.activeRegion] || regionCopy.전체;
  const participantSum = filteredRoutes.reduce((sum, route) => sum + route.participants, 0);
  const completionSum = filteredRoutes.reduce((sum, route) => sum + route.completions, 0);

  elements.regionSummary.innerHTML = `
    <p class="eyebrow">권역 요약</p>
    <h2>${copy.title}</h2>
    <p>${copy.description}</p>
    <div class="pill-row" style="margin-top:16px">
      <span class="pill">${filteredRoutes.length}개 챌린지</span>
      <span class="pill">${participantSum.toLocaleString()}명 참가</span>
      <span class="pill">${completionSum.toLocaleString()}회 완주</span>
    </div>
  `;
}

function renderSelectedRoute(route, map) {
  if (!route) {
    elements.selectedRouteCard.innerHTML = `
      <h2>선택 가능한 챌린지를 찾지 못했습니다</h2>
      <p style="margin-top:10px">검색어를 지우거나 다른 권역을 선택하면 다시 코스를 확인할 수 있습니다.</p>
    `;
    return;
  }

  elements.selectedRouteCard.innerHTML = `
    <div class="pill-row">
      <span class="pill">${route.city}</span>
      <span class="pill is-accent">${route.region}</span>
    </div>
    <h2 style="margin-top:10px">${route.name}</h2>
    <p style="margin-top:10px">${route.description}</p>
    <div class="route-meta">
      <div class="metric-box">
        <span>총 거리</span>
        <strong>${route.distance}</strong>
      </div>
      <div class="metric-box">
        <span>누적 상승</span>
        <strong>${route.climb}</strong>
      </div>
      <div class="metric-box">
        <span>참가자</span>
        <strong>${route.participants.toLocaleString()}명</strong>
      </div>
      <div class="metric-box">
        <span>완주 인증</span>
        <strong>${route.completions.toLocaleString()}회</strong>
      </div>
    </div>
    <div class="checkpoint-list">
      ${route.checkpoints
        .map((spot) => `<span class="pill">${spot.name}</span>`)
        .join("")}
    </div>
    <div class="route-actions">
      <button class="route-action" type="button" id="focusRouteButton">코스 중심 이동</button>
      <button class="route-action secondary" type="button" id="focusCheckpointButton">인증 지점 보기</button>
    </div>
  `;

  const focusRouteButton = document.getElementById("focusRouteButton");
  const focusCheckpointButton = document.getElementById("focusCheckpointButton");

  focusRouteButton?.addEventListener("click", () => focusRoute(map, route));
  focusCheckpointButton?.addEventListener("click", () => focusCheckpoints(map, route));
}

function bindTabs() {
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentView = button.dataset.view;

      elements.tabButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-selected", String(item === button));
      });

      elements.tabPanels.forEach((panel) => {
        const shouldOpen =
          (currentView === "search" && panel.id === "searchPanel") ||
          (currentView === "region" && panel.id === "regionPanel");
        panel.classList.toggle("is-active", shouldOpen);
      });
    });
  });
}

function bindRail(map) {
  elements.railButtons.forEach((button) => {
    button.addEventListener("click", () => {
      elements.railButtons.forEach((item) => item.classList.toggle("is-active", item === button));

      const action = button.dataset.rail;
      if (action === "search") {
        elements.challengeSearch.focus();
      }
      if (action === "dashboard") {
        state.activeRegion = "전체";
        elements.challengeSearch.value = "";
        state.query = "";
        renderRegionChips();
        render(map, window.imageryRef, window.routeRef, window.markerRef, window.checkpointRef);
        fitFilteredRoutes(map, getFilteredRoutes());
      }
      if (action === "checkpoints") {
        const route = routes.find((item) => item.id === state.selectedRouteId);
        if (route) {
          focusCheckpoints(map, route);
        }
      }
      if (action === "course") {
        document.getElementById("story")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (action === "help") {
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function bindSearch(map, routeLayers, markerLayers, checkpointLayers, imageryLayer) {
  window.mapRef = map;
  window.routeRef = routeLayers;
  window.markerRef = markerLayers;
  window.checkpointRef = checkpointLayers;
  window.imageryRef = imageryLayer;

  elements.challengeSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    render(map, imageryLayer, routeLayers, markerLayers, checkpointLayers);

    if (state.query) {
      fitFilteredRoutes(map, getFilteredRoutes());
    }
  });
}

function bindLayerButtons(map, imageryLayer) {
  elements.layerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.imageryEnabled = button.dataset.layer === "imagery";
      render(map, imageryLayer, window.routeRef, window.markerRef, window.checkpointRef);
    });
  });
}

function bindPanelClose() {
  elements.panelClose.addEventListener("click", () => {
    elements.searchPanel.classList.toggle("is-collapsed");

    if (elements.searchPanel.classList.contains("is-collapsed")) {
      elements.searchPanel.style.transform = "translateX(calc(-100% + 76px))";
      elements.searchPanel.style.opacity = "0.94";
      elements.panelClose.textContent = "+";
      elements.panelClose.setAttribute("aria-label", "패널 열기");
    } else {
      elements.searchPanel.style.transform = "";
      elements.searchPanel.style.opacity = "";
      elements.panelClose.textContent = "×";
      elements.panelClose.setAttribute("aria-label", "패널 닫기");
    }
  });
}

function focusRoute(map, route) {
  const bounds = L.latLngBounds(route.path);
  map.flyToBounds(bounds.pad(0.25), {
    duration: 0.8,
    maxZoom: 12
  });
}

function focusCheckpoints(map, route) {
  const coords = route.checkpoints.map((spot) => spot.coords);
  map.flyToBounds(L.latLngBounds(coords).pad(0.35), {
    duration: 0.8,
    maxZoom: 13
  });
}

function fitFilteredRoutes(map, filteredRoutes) {
  if (!filteredRoutes.length) {
    map.flyTo([36.02, 127.55], 7, { duration: 0.8 });
    return;
  }

  const bounds = L.latLngBounds(filteredRoutes.flatMap((route) => route.path));
  map.flyToBounds(bounds.pad(0.22), {
    duration: 0.8,
    maxZoom: filteredRoutes.length === 1 ? 12 : 9
  });
}

function updateDashboard() {
  elements.activeRouteCount.textContent = routes.length.toLocaleString();
  elements.participantCount.textContent = routes
    .reduce((sum, route) => sum + route.participants, 0)
    .toLocaleString();
  elements.completionCount.textContent = routes
    .reduce((sum, route) => sum + route.completions, 0)
    .toLocaleString();
}

function getFilteredRoutes() {
  return routes.filter((route) => {
    const matchesRegion =
      state.activeRegion === "전체" || route.region === state.activeRegion;
    const keyword = state.query;
    const matchesQuery =
      !keyword ||
      route.name.toLowerCase().includes(keyword) ||
      route.city.toLowerCase().includes(keyword) ||
      route.region.toLowerCase().includes(keyword);

    return matchesRegion && matchesQuery;
  });
}
