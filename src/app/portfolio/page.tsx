export default function PortfolioPage() {
  return (
    <section className="px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        Portfolio
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 나중에 Supabase 데이터로 연결 */}
        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold text-lg mb-2">Rolling Paper Project</h3>
          <p className="text-sm text-gray-400">
            React + Vite 기반 메시지 공유 플랫폼
          </p>
        </div>
      </div>
    </section>
  );
}
