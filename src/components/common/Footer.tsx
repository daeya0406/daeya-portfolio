export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Daeya Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
