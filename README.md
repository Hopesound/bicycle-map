# bicycle-map

자전거 챌린지 메인 홈페이지용 정적 사이트입니다.

## 포함 내용

- 지도 중심 메인 화면
- 챌린지 검색 및 권역 필터
- 전라북도 영역 한정 항공사진 오버레이
- 챌린지 카드, 인증 지점, 운영/안내 섹션

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
