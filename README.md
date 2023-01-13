# NextJS

📚 NextJS study

## 스터디 진행 방식

- Next.js 기본 학습
- 간단한 토이 프로젝트 만들어보기
- Next.js 심화 학습
- 포트폴리오 대비 커머스 서비스 제작

---

## 📍 프레임워크 vs 라이브러리

- 프레임워크는 기반구조 vs 라이브러리는 개발 편의 도구들
- 제어 주도권 프레임워크가 가짐 vs 제어 주도권 사용자가 가짐
- 프레임워크는 기계 (like 굴삭기) vs 라이브러리는 공구 (like 펜치니퍼)
- 프레임워크 자유도 상대적으로 작음 vs 라이브러리 자유도 상대적으로 큼

## 📍 프레임워크의 장점

- 개인이 해야할 고민들을 프레임워크 개발자가 미리 하고 반영
- 특정 디자인 패턴이나 동작과 기능들을 위한 정의와 방식을 정리해둠
- 여러 개발자가 함께 협업할 때 기준점이 됨

## 🧐 왜 많은 프레임워크 중 Next를 사용할까 ?

- 프론트엔드 개발자들이 가진 고민에 대한 적절한 해결책을 제공해준다.
  - 규모가 있는 서비스 구조 설계를 어떻게 할 것인가 ?
  - 개발환경 / 코드 분할 / 파일 기반 구조 등 다양한 기능들을 제공해준다.
  - SEO 검색 엔진 최적화 (사용자들이 훨씬 더 쉽게 웹서비스를 찾아갈 수 있도록)
  - 프론트엔드에 필요한 간단한 API 구성
  - 손쉬운 배포 시스템 Vercel

## Next.js 프로젝트 띄우기

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

> --example 뒤에있는 github url을 예제로 레포를 딸 것이다 라는 명령어 뜻이다.

## 🌟 실행

```
  cd nextjs-blog
  npm run dev = yarn dev (동일 명령어)
  해당 프로젝트에서 yarn 설치함
```

---

turbo라는 걸로 mono repo 관리가 가능하다.

## next.js에서 제공하는 기능들

- 코드들은 고치는대로 변경된다 (= fast refresh)
- `pages/product/[slug]` 라는 표기가 wildcard로 동작하나보다
  - 다이나믹하게 path를 변경할 수 있었다.
- api 요청을 어디론가 하고 응답을 받는다.
  - api에 요청에 대한 응답들을 코드에서 조회가 가능하다.

## data fetching

화면에 무언가를 그리려면 결국 어디선가 data를 가져와야한다. (=이게 프론트엔드의 역할)

- next가 제시하는 4가지 데이터 패칭 방법

1. SSR
2. CSR
3. SSG
4. ISR

<br />

## 🔴 SSR (서버 사이드 렌더링)

- 서버가 데이터를 가져와서 그린다.
- SSR을 담당하는 함수 : `getServerSideProps`

```
export async function getServerSideProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}
```

서버에서 데이터를 가져오고 페이지에다가 props로 데이터를 전달 받았다.

<img width="1544" alt="스크린샷 2023-01-13 오후 10 37 11" src="https://user-images.githubusercontent.com/71499150/212333344-ce98ae76-89ab-4faf-90e0-5bf45810438c.png">

서버에서 데이터를 그려주고 있다는 것을 확인하는 과정으로 봤을 때 `server` 라는 콘솔로그 메시지가 터미널 창에서 보여지고 있다.

<br />

## 🟡 CSR (Client Side Render)

- 클라이언트가 데이터를 가져와서 그린다.
- 기존 리액트 사용법과 동일하다.

![image](https://user-images.githubusercontent.com/71499150/212333892-34fa6124-e602-4e64-9ab9-e9b85d962a2c.png)

클라이언트는 브라우저에서 그려주고 있기 때문에 웹브라우저에 있는 콘솔로그에서 'client' 라는 메시지를 확인해 볼 수 있다.

<br />

## 🟠 SSG (Statice-Site Generation)

- 정적인 사이트를 생성한다 : 정적인 사이트를 데이터를 가져와서 그려준다.
- SSG을 담당하는 함수로는 `getStaticProps`라는 함수가 있다.
