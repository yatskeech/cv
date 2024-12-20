import { ReactNode } from "react";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";

interface Social {
  icon: ReactNode;
  title: string;
  username: string;
  href: string;
}

const SOCIALS: Social[] = [
  {
    icon: <FaTelegram />,
    title: "Telegram",
    username: "@yatskeech",
    href: "https://t.me/yatskeech",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    username: "@yatskeech",
    href: "https://instagram.com/yatskeech",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    username: "@yatskeech",
    href: "https://github.com/yatskeech",
  },
];

function Socials() {
  return (
    <div className="flex flex-col gap-6">
      {SOCIALS.map(({ icon, title, username, href }, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-10 h-10 flex justify-center items-center bg-gray-darker rounded-full text-xl">
            {icon}
          </div>
          <div className="flex flex-col gap-1 text-gray-lighter leading-none">
            <span className="text-xs text-gray-light leading-none">
              {title}
            </span>
            <a
              href={href}
              className="hover:text-secondary-light transition-all"
            >
              {username}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socials;
