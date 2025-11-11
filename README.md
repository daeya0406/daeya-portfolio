# 💼 Daeya Portfolio v1

> **Next.js + Supabase 기반의 개인 포트폴리오 프로젝트**  
> “사용자 경험과 개발자의 철학을 함께 담은 인터랙티브 포트폴리오”

---

## ☺️ 소개

퍼블리셔로 5년 이상 UI·UX 중심의 경험을 쌓은 뒤,  
현재는 **프론트엔드 개발자로 전환 중**입니다.  
본 프로젝트는 **저만의 개발 흐름, 사고방식, 그리고 기술 실험 공간**을 겸한  
**개인 포트폴리오 & Playground 사이트**입니다.

- 나를 소개하는 **About 페이지**
- 코드 아이디어를 모아둔 **Code Template Library**
- 브라우저에서 직접 실행 가능한 **Code Playground**
- 실제 결과물을 시각적으로 보여주는 **Portfolio Section**

---

## 🛠️ 기술 스택

| 분류             | 기술                        |
| ---------------- | --------------------------- |
| **프레임워크**   | Next.js 15 (App Router)     |
| **언어**         | TypeScript, React 19        |
| **스타일링**     | TailwindCSS + Framer Motion |
| **상태관리**     | Zustand                     |
| **데이터베이스** | Supabase                    |
| **배포환경**     | Vercel                      |
| **버전관리**     | Git + Husky + lint-staged   |
| **패키지관리자** | npm                         |

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=black">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</p>

---

## ✨ 주요 기능

| 구분              | 설명                                                                     |
| ----------------- | ------------------------------------------------------------------------ |
| **About**         | 나의 성장 스토리, 기술 스택, 커리어 타임라인                             |
| **Code Template** | 자주 쓰는 코드 패턴 정리 (검색/필터 기능 포함)                           |
| **Playground**    | JS/TS 코드 실행기 (LeetCode 스타일의 실험 공간)                          |
| **Portfolio**     | 실제 프로젝트를 비주얼 중심으로 표현한 섹션 (스크롤 애니메이션, UX 중심) |

---

## 🎨 디자인 컨셉

- **Primary Color:** #38BDF8 (하늘색)
- **Background:** #0F172A (다크 네이비 톤)
- **Font:** Pretendard / Inter
- **Style Keywords:** Minimal / Motion / Focused

> UI는 단순하지만 모션과 구조로 **“기술과 감각의 밸런스”**를 보여주는 방향으로 설계했습니다.

---

## 📂 디렉토리 구조 (예정)

```
src/
 ├─ app/                # App Router 구조
 │   ├─ about/
 │   ├─ code/
 │   │   ├─ template/
 │   │   └─ playground/
 │   ├─ portfolio/
 │   └─ layout.tsx
 ├─ components/         # 공통 UI 컴포넌트
 ├─ lib/                # Supabase, util 함수 등
 ├─ store/              # Zustand 전역 상태
 ├─ styles/             # Tailwind 확장, 전역 스타일
 └─ types/              # 타입 정의
```

---

## ⚙️ 개발 환경 세팅

```bash
# 1. 레포 클론
git clone https://github.com/daeya0406/daeya-portfolio.git
cd daeya-portfolio

# 2. 패키지 설치
npm install

# 3. 환경 변수 설정 (.env.local)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# 4. 개발 서버 실행
npm run dev
```

---

## 🧩 Git & 자동화

### 1. 커밋 규칙 (Husky + lint-staged)

- 커밋 전 자동으로 ESLint & Prettier 실행
- 형식 예시:
  ```
  feat: Playground 코드 실행 기능 추가
  fix: Supabase 쿼리 오류 수정
  chore: 환경변수 업데이트
  ```

### 2. 버전 관리

- 단일 브랜치(main) 기반
- 주요 업데이트 시 태그 사용  
  예시:
  ```
  chore(release): v1.0.0
  git tag -a v1.0.0 -m "Initial Release"
  git push origin v1.0.0
  ```

### 3. 배포

- Vercel 자동 배포 (main 브랜치 기준)
- Supabase 프로젝트 자동 연동

---

## 🧭 개발 플로우

- 단일 브랜치(main) 운영
- Husky + lint-staged를 통한 코드 품질 자동화
- 주요 기능 단위로 커밋 (feat / fix / chore)
- 버전 릴리즈는 Git Tag로 관리
- Vercel 자동 배포(main 기준)

---

## 🔗 링크

- [GitHub Repository](https://github.com/daeya0406/daeya-portfolio)
- [Vercel 배포 URL](링크)
- [Notion 기획 문서](https://www.notion.so/2a83fd515e9080fe8e96eb159604ef92?source=copy_link
