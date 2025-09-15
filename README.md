# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Floder-by-Feature-Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다.
아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더구조

```
app/
├── assets/           # 이미지, 아이콘, 폰트
│   ├── images/
│   ├── icons/
│   ├── fonts/
├── components/       # 재사용 UI 컴포넌트
│   ├── common/
│   ├── main/
│   │   ├── adproduct/
│   │   ├── airpodsmax/
│   │   ├── bottom/
│   │   ├── category/
│   │   ├── iphonepro14/
│   │   ├── macbookair/
│   │   ├── playstation/
│   │   ├── product/
│   │   ├── visionpro/
│   ├── modal/
│   ├── skeleton/
├── const/            # 전역 상수
├── lib/              # Api호출, 커스텀 훅
│   ├── query/
│   ├── hooks/
├── pages/            # 페이지 관리
│   ├── cart/
│   ├── like/
│   ├── main/
│   ├── product/
│   ├── profile/
└── index.jsx
└── App.jsx
```

---

## 네이밍 컨벤션

### 폴더명

- **kebab-case**: `assets`, `components`, `pages`

### 컴포넌트 파일명

- **PascalCase**: `AdProductContainer.jsx`
  - 단, 페이지 파일은 소문자로만 명명: `main.jsx`

### 파일 내 변수 및 함수

- **camelCase**: `desktopWidth`

### 커스텀 훅

- **use**로 시작: `useWindowWidth`

### 상수

- **camelCase**: `servicesLi`
