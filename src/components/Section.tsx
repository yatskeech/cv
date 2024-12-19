import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className={clsx("pb-8", className)}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl leading-none">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export default Section;
