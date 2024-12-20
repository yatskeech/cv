import { ReactNode } from "react";
import { HiMail, HiOutlineMap } from "react-icons/hi";

interface Info {
  icon: ReactNode;
  title: string;
  element: ReactNode;
}

const INFO: Info[] = [
  {
    icon: <HiMail />,
    title: "Email",
    element: (
      <a
        href="mailto:dima.ja06@gmail.com"
        className="hover:text-secondary-light transition-all"
      >
        dima.ja06@gmail.com
      </a>
    ),
  },
  {
    icon: <HiOutlineMap />,
    title: "Address",
    element: <span>Minsk, Belarus</span>,
  },
];

function Info() {
  return (
    <div className="flex flex-col gap-6">
      {INFO.map(({ icon, title, element }, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-10 h-10 flex justify-center items-center bg-gray-darker rounded-full text-xl">
            {icon}
          </div>
          <div className="flex flex-col gap-1 text-gray-lighter leading-none">
            <span className="text-xs text-gray-light leading-none">
              {title}
            </span>
            {element}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
