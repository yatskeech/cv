import { ReactNode } from "react";
import RSSchool from "./icons/RSSchool.tsx";
import PurpleSchool from "./icons/PurpleSchool.tsx";
import BSU from "./icons/BSU.tsx";

interface EducationType {
  icon: ReactNode;
  company: string;
  title: string;
  date: string;
}

export const EDUCATION: EducationType[] = [
  {
    icon: <RSSchool className="w-full h-full" />,
    company: "RS School",
    title: "JavaScript / Front-end Course",
    date: "October 2023 - January 2024",
  },
  {
    icon: <PurpleSchool className="w-full h-full" />,
    company: "Purple School",
    title: "JavaScript Advanced - advanced language concepts and OOP",
    date: "January 2024 - May 2024",
  },
  {
    icon: <PurpleSchool className="w-full h-full" />,
    company: "Purple School",
    title: "TypeScript from scratch - a complete course and design patterns",
    date: "May 2024 - June 2024",
  },
  {
    icon: <PurpleSchool className="w-full h-full" />,
    company: "Purple School",
    title: "React Basics, React Router and Redux Toolkit",
    date: "June 2024 - September 2024",
  },
  {
    icon: <BSU className="w-full h-full" />,
    company: "Belarusian State University",
    title: "Mathematics and Computer Science",
    date: "September 2023 - Present",
  },
];

function Education({ education }: { education: EducationType }) {
  return (
    <div className="bg-gray-darkest p-4 flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12">{education.icon}</div>
        <span className="text-sm text-gray-lightest leading-tight">
          {education.company}
        </span>
      </div>
      <div className="flex-grow flex flex-col gap-1 justify-between">
        <span className="text-gray-lightest">{education.title}</span>
        <span className="text-xs text-gray-light">{education.date}</span>
      </div>
    </div>
  );
}

export default Education;