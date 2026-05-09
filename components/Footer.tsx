import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-[0.5px] border-border py-[28px] px-5 md:px-[36px] mt-auto">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href="/" className="font-inter font-medium text-[13px] tracking-[-0.5px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep">
          <span className="text-text-primary">Tr</span>
          <span className="text-accent">X</span>
          <span className="text-text-primary">on</span>
        </Link>
        <span className="font-plex text-[11px] text-text-system tracking-[1px]">
          © 2026
        </span>
      </div>
    </footer>
  );
}
