import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function GhostButton({ href, text }: Props) {
  return (
    <Link 
      href={href}
      className="group inline-flex items-center gap-2 border-[0.5px] border-border-strong px-[28px] py-[14px] rounded-[2px] font-inter text-[13px] tracking-[1px] text-text-primary transition-all duration-200 ease-out hover:border-accent hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep"
    >
      <span>{text}</span>
      <span className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
    </Link>
  );
}
