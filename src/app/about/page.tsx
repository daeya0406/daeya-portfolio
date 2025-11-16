import { Heading } from '@/components/common/Heading';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-8 py-16">
      <Heading subtitle="색상 팔레트 / 클릭 시 클래스 복사">Color Palette</Heading>
      <h2 className="mb-6 text-3xl font-bold text-[var(--color-primary)]">About Me</h2>
      <p className="text-foreground/70 leading-relaxed">
        퍼블리셔로 시작해, 사용자 경험 중심의 개발을 추구하는 프론트엔드 개발자입니다. JavaScript,
        TypeScript, React, Next.js를 중심으로 프로젝트를 만들어가고 있습니다.
      </p>
    </section>
  );
}
