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
