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
├── const/            # 전역 상수
├── lib/              # Api호출, 커스텀 훅
│   ├── services/
│   ├── hooks/
├── route/            # 라우터, 페이지 관리
└── index.jsx
└── App.jsx
```
