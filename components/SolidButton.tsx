export default function SolidButton({ text, type = "button" }: { text: string; type?: "button" | "submit" | "reset" }) {
  return (
    <button 
      type={type}
      className="bg-accent text-bg-deep px-[32px] py-[14px] rounded-[2px] font-inter text-[13px] font-medium tracking-[1px] transition-colors duration-200 ease-out hover:bg-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep uppercase"
    >
      {text}
    </button>
  );
}
