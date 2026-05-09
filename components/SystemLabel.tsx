export default function SystemLabel({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`font-plex text-[11px] font-medium tracking-[3px] uppercase text-accent ${className}`}>
      {text}
    </div>
  );
}
