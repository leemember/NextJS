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

![image](https://user-images.githubusercontent.com/71499150/212335593-4f09f165-6796-47ac-830c-c1d9f99af4e8.png)

> 왼쪽에 시간이 찍힌 흰 배경은 웹브라우저입니다. 오른쪽은 작업한 소스코드 내용입니다.

서버에서 데이터를 그려주고 있다는 것을 확인하는 과정으로 봤을 때 `server` 라는 콘솔로그 메시지가 터미널 창에서 보여지고 있다.

<br />

## 🟡 CSR (Client Side Render)

- 클라이언트가 데이터를 가져와서 그린다.
- 기존 리액트 사용법과 동일하다.

![image](https://user-images.githubusercontent.com/71499150/212333892-34fa6124-e602-4e64-9ab9-e9b85d962a2c.png)

> 왼쪽에 시간이 찍힌 흰 배경은 웹브라우저입니다. 오른쪽은 작업한 소스코드 내용입니다.

클라이언트는 브라우저에서 그려주고 있기 때문에 웹브라우저에 있는 콘솔로그에서 'client' 라는 메시지를 확인해 볼 수 있다.

<br />

## 🟠 SSG (Statice-Site Generation)

- 정적인 사이트를 생성한다 : 정적인 사이트를 데이터를 가져와서 그려준다.
- SSG을 담당하는 함수로는 `getStaticProps`라는 함수가 있다.
- 언제쓰이나 ? 블로그 같이 정적일 수 있는 것들을 이것을 사용한다.

<img width="837" alt="스크린샷 2023-01-13 오후 11 13 20" src="https://user-images.githubusercontent.com/71499150/212340176-4c06b7f5-6ed5-456d-ac3c-311b9b130b13.png">

> SSG 가 동작하는 것을 확인하고자 한다면 `yarn build` 과정을 거친 후에 `yarn run dev`를 해줘야 합니다. 그리고 path 주소 ssr 페이지에 진입했을 때, console.log가 터미널에도 웹브라우저 상에 있는 콘솔 창 그 어디에도 나타나지 않습니다.

<br />

## 🟢 IRG (Incremental Static **Re**generation)

- 증분 정적 사이트를 재생성 한다. (특정 주기로) 정적인 사이트에 데이터를 가져와서 다시 그려준다.
- 이걸 담당하는 함수는 `getStaticProps` 라는 함수다. 값을 리턴하면서 동작한다.

```
export async function getStaticProps() {
  console.log("server");

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1, // 📍 1초 단위로 => 이 함수를 통해서 값을 리턴해서 다시 그려준다.
  };
}
```

> 서버가 1초 간격으로 리턴된다. 어떤 제품을 계속 판매하고 그 제품의 정보를 계속 업데이트를 한다고 할 경우 이런 함수를 적절하게 사용하여 작업할 수가 있다. (ex) 쇼핑몰에서 자주 사용

<br />

## 🔵 Data Fetching 데이터 패칭에 대한 내용 요약

- 페이지를 그리는 방식 : 데이터를 가져와서 그린다.
- SSR / CSR / SSG / ISG : 총 4가지 방식으로 데이터를 패칭한다.
- SSG : `yarn dev` 로는 SSR 처럼 동작한다.
- SSR은 서버 부하가 일어나니 필요에 따라 SSG와 ISR을 적절하게 쓰면 좋다.

<br />

## 🍥 Layout / Pages / Image

- Pre-rendering : SEO 와 초기 로딩 속도
- SSG vs SSR : SSG은 빌드 시 / SSR은 요청 시
- Layout : pages/\_app.js 활용해서 페이지 공통화
- Images : 최적화된 이미지 활용 util

<br />

---

<br />

### 작업 들어가기 전, Prettier 설정

```
$yarn prettier-fix
```

- yarn add -D prettier // prettier 추가
- .prettierrc // 파일 추가
- 패키지에 prettier-fix 명령 추가

<br />

### 🍔 Next기반으로 라우터 하는 법

- Next.js의 Router는 file-systems 기반이다.
- `pages/` 혹은 `src/pages/`
- `pages/index.js` 와 `src/pages/index.js` 둘 다 있다면 우선순위는 `pages/index.js` 가 먼저다. 하지만 개발할 때 익숙한 환경으로는 후자이긴 하다.

<br>

### Slug

```
pages/caategory/[slug].js => /category/:slug (ex. /category/food) 이런식으로 category 뒤에 아무 단어 집어넣어도 해당 경로로 이동된다.

pages/[usename]/info.js => /:usename/info (ex. /jimmy/info) 이것도 [usename] 부분에 아무 단어 집어넣어도 해당 경로로 이동된다
```

- 파일에도 slug가 가능하고, 폴더에도 slug가 가능하다.

### ...slug

```
pages/cart/[...slug].js => /cart/* (ex. /cart/2022/06/04)
```

- ...을 쓰면 depth가 무한으로 사용이 가능하다. 모든 걸 다 받아낼 수 있다.

### 라우팅 정리

- Router -> file ststems을 토대로 구현
- pages/ 혹은 src/pages -> pages/ 가 우선순위, 하나만 가능하다.
- 프로젝트 설정 -> prettier / jsoncofig.json(절대경로 변경)
- Slug -> 다양한 위계의 다이나믹 제공해준다.

<br />

---

<br />

### 🔮 Dynamic Routes

- [slug] 값은 어떻게 활용할 것 인가?
  ex) pages/category/[slug].js

```
import {useRouter} from 'next/router;

const router = useRouter();
const {slug} = router.query;
```

- 이처럼 router.query의 slug를 쓰면 url에 `/category/{slug}`에 있는 `{slug}`에 입력한 값이 화면에 찍힌다.

<br>

### 💡 query(== ?) 추가

```
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query

  return (
    <h1 className="title">
      Category {slug} from {from}
    </h1>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return <>{page}</>
}
```

- `category/sports?from=event` 라는 url이 있다고 가정했을 때, url에서는 ?를 쿼리라고 한다. 이 쿼리 기준으로 from에 무엇이 담겼는지 그에 맞는 값을 다 받아 낼 수 있다.

<img width="459" alt="스크린샷 2023-01-27 오전 11 51 40" src="https://user-images.githubusercontent.com/71499150/215000071-3edd5023-c518-4704-b65a-36349ab4d0b1.png">

이와같이 url 뒤에 event를 넣게 되면 화면에도 동일하게 `{from}` 값이 찍히게 된다.

<br>

### 🖐️ 다중 슬러그

- pages/cart/[...slug].js

```
const {slug} = router.query;
```

여기서 slug는 배열이다.

- 경로 : pages/cart/[...date].js

```
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1 className="title">CartDate Slug {JSON.stringify(date)}</h1>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return <>{page}</>
}
```

![](https://velog.velcdn.com/images/leemember/post/887604df-feb8-47d4-b28c-196e4035a614/image.png)

이처럼 url에 다중 슬러그들을 전부 화면에 뿌려준다. `JSON.stringify`로 감쌋기 떄문에 "" 문자열의 형식으로 배열 안에 값이 담겨 나온다.

- 옵셔널하게 슬러그 값이 없어도 동작할 수 있도록 하려면 `[[...date]].js` 이처럼 대괄호를 2번 감싸면 된다.

![](https://velog.velcdn.com/images/leemember/post/df22d1c3-a469-45c1-8d59-917ca48a619c/image.png)

<br>

### 🖐️ Shallow Routing

- getServerSideProps / getStaticProps 등을 다시 실행시키지 않고, 현재 상태를 잃지 않고 url 변경하는 방법

#### 👀 상태는 유지하면서 URL만 바꾸고 싶은 경우 ?

- 사용자가 어떤 동작을 했고, 그 기록을 query로 남기고 싶을때
  (👉 장점 : query로 남기면 사용자가 새로고침을 해도 유지된다.)
- 특정 페이지 10페이지 갔다가 새로고침 해도 그게 유지된다. <br>
  (로컬 스토리지나 세션 스토리지를 통해 새로고침을 해도 특정 페이지의 위치를 유지시킬 수 있지만 query로 해도 그 상태가 유지되도록 할 수 있다.

사용자의 행동을 기록한 행위들이다. 근데, url 을 바꿨다고 해서 1️⃣ 페이지가 처음부터 다시 렌더 된다거나 2️⃣ 원치 않는 데이터 패칭까지 된다면 비효율적일 수가 있다. 그러므로 👉 **Shallow Routing** 👈이 필요한 것이다 !

#### 🖐️ **Data fetching**을 일으키고 싶지 않다면 ?

- url을 바꾸는 3가지 방식이 있다.
  - 1️⃣ location.replace("url") : 로컬 state 유지 안됨 (re-render)
  - 2️⃣ router.push(url) : 로컬 state 유지 / data fetching은 일어남 ⭕️
  - 3️⃣ router.push(url, as, {shallow: true}) : 로컬 state 유지 / data fetching ❌

<br />
이것에 대한 예제는 `/pages/settings/my/info.js` 에서 확인할 수 있습니다.

```
      // 1️⃣ 로컬 state도 새로 바뀌면서 데이터 패칭도 다시 되고 아예 페이지를 새로 불른 것과 같다.
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          ⏺️ location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(replace)
      </button>

      <br />

      // 2️⃣ 로컬 state는 유지되지만, 데이터 패칭은 일어납니다.
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          ⏺️ router.push('/settings/my/info?status=editing')
        }}
      >
        edit(push)
      </button>

      // 3️⃣ 로컬 상태도 유지되고, 데이터 패칭도 일어나지 않는다.
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, ⏺️ {
            shallow: true,
          })
        }}
      >
        edit(shallow)
      </button>
```

버튼 3개를 추가하여, 새로 리렌더가 되면서 **데이터 패치**를 확인하기 위해 상단 쪽에 아래와 같은 코드를 작성했습니다.

```
export async function getServerSideProps() {
  console.log('server')
  return {
    props: {},
  }
}
```

`getServerSideProps`를 이용해서 터미널 콘솔에 'server' 라는 멘트가 찍히는지 확인을 했습니다. 그런데 `shallow`를 했을 경우에는 데이터 패칭이 안됐지만 로컬 상태는 유지되는 것을 확인할 수 있었습니다.

<Br>

### API란?

- 컴퓨터나 컴퓨터 프로그램 사이의 연결
- FE <=> BE 간의 연결
- 프론트는 고객과 닿아있고, 백엔드는 DB에 닿아있다.
- 실제 서비스 예제) `커머스 사이트 - 개발자도구 F12 - 네트워크 탭` 에서 확인 가능
