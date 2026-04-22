# bicycle-map

카카오맵 기반 자전거 챌린지 season2 메인 홈페이지용 정적 사이트입니다.

## 포함 내용

- 카카오맵 기반 메인 지도
- 상단 메뉴와 좌측 메뉴 중심 UI
- 메뉴 클릭 시 열리는 하위 메뉴 패널
- 코스, 인증 스팟, 랭킹, 탄소 절감 예시 데이터

## 배포 방식

이 저장소는 GitHub Pages용 워크플로우가 포함되어 있습니다.

- 기본 배포 URL: `https://hopesound.github.io/bicycle-map/`
- 브랜치: `main`
- 워크플로우: `.github/workflows/deploy-pages.yml`

## GitHub Pages 설정

저장소에서 다음 한 번만 확인하면 됩니다.

1. GitHub 저장소의 `Settings`
2. `Pages`
3. `Build and deployment`의 `Source`를 `GitHub Actions`로 선택

그 뒤 `main` 브랜치에 푸시되면 자동으로 배포됩니다.

## 카카오맵 키 설정

배포 전에 [config.js](./config.js) 파일의 값을 실제 Kakao 지도 JavaScript 키로 바꿔야 합니다.

```js
window.KAKAO_MAP_APPKEY = "YOUR_KAKAO_JAVASCRIPT_KEY";
```

카카오 디벨로퍼스에서 Web 플랫폼 도메인에 배포 주소를 등록해야 정상적으로 지도가 표시됩니다.
