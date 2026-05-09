import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "deep" | "elevated";
  borderTop?: boolean;
}

export default function Section({ children, id, className = "", bg = "deep", borderTop = false }: Props) {
  return (
    <section 
      id={id}
      className={`
        w-full px-5 md:px-[36px]
        ${bg === "elevated" ? "bg-bg-elevated" : "bg-bg-deep"}
        ${borderTop ? "border-t-[0.5px] border-border" : ""}
        ${className}
      `}
    >
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
    </section>
  );
}
