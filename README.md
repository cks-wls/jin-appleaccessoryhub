# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Floder-by-Feature-Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다.
아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더구조

```
features/                     # 주요 기능 단위
├── main/                     # 메인
│   ├── services/             # API 호출, 상태관리, 비즈니스 로직
│   ├── lib/                  # 유틸 함수 및 커스텀 훅
│   ├── search.types.ts       # 로컬 타입 정의
│   └── consts/               # 로컬 상수 정의
├── auth/                     # 인증 기능
└── ...

shared/                       # 재사용 가능한 전역 리소스
├──assets/                    # 정적 이미지 소스 관리
│   ├── fonts/                # 폰트 파일
│   ├── icons/                # 아이콘 (svg)
│   ├── images/               # 이미지 파일 (jpg, png, svg...)
├── components/               # 컴포넌트
    ├── style/                # css파일
├── config/                   # 환경 설정
├── consts/                   # 전역 상수
├── lib/                      # 공용 유틸함수 및 커스텀 훅
│   ├── utils/                # 유틸함수
│   └── hooks/                # 커스텀 훅
├── services/                 # 전역 API, 상태관리, 비즈니스 로직

```
