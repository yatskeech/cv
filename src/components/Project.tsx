import book from "/public/book.mp4";
import journal from "/public/journal.mp4";
import notes from "/public/notes.mp4";
import todo from "/public/todo.mp4";
import { HiCode, HiLink } from "react-icons/hi";

interface ProjectType {
  src: string;
  title: string;
  description: string;
  urls: {
    deploy: string;
    code: string;
  };
}

export const PROJECTS: ProjectType[] = [
  {
    src: book,
    title: "Book App",
    description:
      "The project is built using pure JavaScript, focusing on modular components and views to ensure a maintainable and scalable codebase.",
    urls: {
      deploy: "",
      code: "",
    },
  },
  {
    src: todo,
    title: "TODO List",
    description:
      "The project is built using pure JavaScript, focusing on modular components and views to ensure a maintainable and scalable codebase.",
    urls: {
      deploy: "",
      code: "",
    },
  },
  {
    src: journal,
    title: "Personal Journal",
    description:
      "PersonalJournal is a React app for creating, editing, and managing journal entries with local storage support.",
    urls: {
      deploy: "",
      code: "",
    },
  },
  {
    src: notes,
    title: "Notes",
    description:
      "A modern, feature-rich note-taking application built with React, Tailwind CSS, and JSON Server, offering seamless note creation, management, and organization.",
    urls: {
      deploy: "",
      code: "",
    },
  },
];

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col">
      <video src={project.src} autoPlay muted loop />
      <div className="flex-grow flex flex-col gap-4 p-4 bg-gray-darkest hover:bg-gray-darkest/50 transition-colors">
        <div>
          <h3 className="text-lg">{project.title}</h3>
          <p className="text-sm font-light text-gray-light">
            {project.description}
          </p>
        </div>
        <div className="mt-auto flex gap-2">
          <a
            href={project.urls.code}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-dark text-secondary-light hover:text-secondary-dark hover:bg-secondary-light transition-all"
          >
            <HiCode />
          </a>
          <a
            href={project.urls.code}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-dark text-secondary-light hover:text-secondary-dark hover:bg-secondary-light transition-all"
          >
            <HiLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
