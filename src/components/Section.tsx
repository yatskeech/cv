import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className={className}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl leading-none">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export default Section;
