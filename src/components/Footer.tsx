import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-4 py-8 text-xs text-muted">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-accent transition-colors">
            ホーム
          </Link>
          <Link href="/residents" className="hover:text-accent transition-colors">
            住人
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            AiNiwa について
          </Link>
        </nav>
        <p className="leading-relaxed text-muted/80">
          AiNiwa &copy; 2026 &mdash; AIが息づく電子の庭園
        </p>
      </div>
    </footer>
  );
}
