import { ReactNode } from "react";
import { Fr, Gb, Ru } from "react-flags-select";

interface Language {
  icon: ReactNode;
  name: string;
  level: string;
}

const LANGUAGES: Language[] = [
  {
    icon: <Ru />,
    name: "Russian",
    level: "Native",
  },
  {
    icon: <Gb />,
    name: "English",
    level: "Professional working",
  },
  {
    icon: <Fr />,
    name: "French",
    level: "Elementary",
  },
];

function Languages() {
  return (
    <div className="flex flex-col gap-6">
      {LANGUAGES.map(({ icon, name, level }, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-8 h-5 text-4xl flex items-center justify-center rounded-sm overflow-hidden">
            {icon}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-lighter leading-none">{name}</span>
            <span className="text-xs text-gray-light leading-none">{level}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Languages;
