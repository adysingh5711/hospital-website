import Link from "next/link";

interface Props {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image }: Props) {
  return (
    <section className="relative py-20 bg-brand-dark overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70" />
      <div className="absolute -top-16 right-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
        <nav className="flex items-center gap-2 text-sm font-sans text-brand-muted">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span className="text-brand-muted/50">›</span>
          <span className="text-brand-teal">{title}</span>
        </nav>
      </div>
    </section>
  );
}
