# TJB 미디어 리터러시 FrontEnd

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 환경 설정

| 프로그램 명 | 버전 명 |
| :---------- | :------ |
| Node.js     | v22.3.0 |
| NPM         | v10.8.1 |
| react       | v18.2.0 |

## .env

```
VITE_API_URL            : API 요청할 URL
VITE_OPEN_API_URL       : 학교 검색 OPEN API URL
VITE_OPEN_API_KEY       : 학교 검색 OPEN API KEY
VITE_ADMIN_URL          : 스탬프 이미지 URL
VITE_PRODUCT_IMAGE_URL  : 스탬프 외 이미지 URL
```

### 폴더 구조

```
TJB_REACT
├─ .env.production      : 설정파일
├─ src
│  ├─ api               : API 설정 모음 파일
│  ├─ assets            : 이미지, 폰트, 아이콘 모음 파일
│  ├─ components        : 컴포넌트 모음 파일
│  ├─ constant          : 상수 모음 파일
│  ├─ hooks             : 커스텀 훅 모음 파일
│  ├─ pages             : 페이지 관련 파일
│  ├─ routes            : 라우트 설정 파일
│  ├─ schema            : 스키마 모음 파일
│  ├─ services          : API SERVICE 모음 파일
│  ├─ states            : recoil 전역 상태관리 파일
│  ├─ styles            : css 스타일 관리 파일
│  └─ utils             : 공통 util 함수 관리 파일
```

## Axios 설정 개요

### 1. 토큰 기반 인증

- 기본적으로 **토큰이 없는 경우** Axios 요청 인터셉터에서 요청을 차단하고, 사용자를 **로그인 페이지로 리디렉션**합니다.
- 인증에 필요한 토큰은 `getToken()` 함수를 통해 `jwtToken`과 `refreshToken`으로 가져옵니다. 이 값이 존재할 경우, `Authorization` 헤더에 포함하여 API 요청을 진행합니다.

### 2. EXEMPT_URLS

- `EXEMPT_URLS`는 **토큰 없이도 접근 가능한 URL 목록**을 정의한 배열입니다.
- 배열에 포함된 URL 및 해당 메서드는 **토큰 검증 없이 API 요청을 진행**합니다.
  - 예를 들어, `/api/login` 또는 정규 표현식으로 정의된 URL(`^\/api\/setting\/agreement\/.*`)은 **모든 메서드**에 대해 토큰 없이 접근이 허용됩니다.
  - `methods` 배열이 비어 있는 경우, 해당 URL로 모든 메서드 요청이 가능하고, 특정 메서드가 정의된 경우 해당 메서드에 대해서만 토큰 검증이 생략됩니다.

### 3. Proxy 설정된 Axios 인스턴스

- 프록시 설정이 적용된 Axios 인스턴스는 `axiosProxyInstance` 변수에 할당되어 있습니다.
- `baseURL`은 `/api`로 설정되어 있으며, **프록시를 사용하는 API 요청**에 대해 이 인스턴스를 사용합니다.

```javascript
import { axiosInstance, axiosProxyInstance } from './axiosInstance';

// 일반 API 요청
axiosInstance.get(URL);
// 프록시를 사용하는 API 요청
axiosProxyInstance.get(URL);
```
