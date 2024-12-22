import book from "/public/book.mp4";
import journal from "/public/journal.mp4";
import notes from "/public/notes.mp4";
import todo from "/public/todo.mp4";
import { HiCode, HiLink } from "react-icons/hi";
import { useState } from "react";

interface ProjectType {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  urls: {
    deploy: string;
    code: string;
  };
}

export const PROJECTS: ProjectType[] = [
  {
    src: notes,
    title: "Notes",
    description:
      "A modern, feature-rich note-taking application built with React, Tailwind CSS, and JSON Server, offering seamless note creation, management, and organization.",
    technologies: [
      "React",
      "Typescript",
      "React Router",
      "Tailwind CSS",
      "JSON Server",
      "Zod",
    ],
    urls: {
      deploy: "",
      code: "https://github.com/yatskeech/notes",
    },
  },
  {
    src: journal,
    title: "Personal Journal",
    description:
      "PersonalJournal is a React app for creating, editing, and managing journal entries with local storage support.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS Module",
      "Local Storage",
    ],
    urls: {
      deploy: "https://yatskeech.github.io/personal-journal/",
      code: "https://github.com/yatskeech/personal-journal",
    },
  },
  {
    src: todo,
    title: "TODO List",
    description:
      "TODO List is a task management application built with React, Tailwind CSS, and Vite, offering a modern and intuitive interface for creating, editing, and organizing tasks.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    urls: {
      deploy: "https://yatskeech.github.io/todo-list/",
      code: "https://github.com/yatskeech/todo-list",
    },
  },
  {
    src: book,
    title: "Book App",
    description:
      "The Book Application is a SPA that enables users to search for books, save favorites, and navigate results with pagination. Built with pure JavaScript, it features a modular design for scalability and maintainability.",
    technologies: ["HTML", "CSS", "JavaScript", "Rollup", "ESLint", "Prettier"],
    urls: {
      deploy: "https://yatskeech.github.io/book-app/",
      code: "https://github.com/yatskeech/book-app",
    },
  },
];

function Project({ project }: { project: ProjectType }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="pointer-events-none flex justify-center items-center relative bg-secondary-darker">
        {loading && (
          <div className="rounded-md h-8 w-8 border-4 border-secondary-light animate-spin absolute" />
        )}
        <video
          src={project.src}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setLoading(false)}
          className="min-h-24"
        />
      </div>
      <div className="flex-grow flex flex-col p-4 bg-gray-darkest hover:bg-gray-darkest/50 transition-colors">
        <div>
          <h3 className="text-lg">{project.title}</h3>
          <p className="text-sm font-light text-gray-light">
            {project.description}
          </p>
        </div>
        <div className="mt-auto py-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-4 py-1 rounded-full border border-secondary-light text-gray-light hover:bg-secondary-light hover:text-secondary-dark transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.urls.code}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark text-secondary-light hover:text-secondary-dark hover:bg-secondary-light transition-all"
          >
            <HiCode />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.urls.deploy}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark text-secondary-light hover:text-secondary-dark hover:bg-secondary-light transition-all"
          >
            <HiLink />
            <span className="text-sm">View</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
