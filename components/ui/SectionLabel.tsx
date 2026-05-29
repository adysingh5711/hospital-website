interface Props {
  text: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ text, className = "", light = false }: Props) {
  return (
    <span
      className={`inline-block uppercase tracking-[0.2em] text-xs font-semibold font-sans px-4 py-1.5 rounded-full mb-4 ${
        light
          ? "bg-white/10 text-brand-teal"
          : "bg-brand-teal/10 text-brand-teal"
      } ${className}`}
    >
      {text}
    </span>
  );
}
