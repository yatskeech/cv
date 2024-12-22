export const SKILLS: string[] = [
  "React",
  "React Router",
  "Typescript",
  "Redux",
  "Redux Toolkit",
  "Framer Motion",
  "Zod",
  "Vite",
  "Rollup",
  "Tailwind CSS",
  "Material UI",
  "SASS/SCSS Modules",
];

function Skill({ skill }: { skill: string }) {
  return (
    <div className="p-4 text-secondary-light text-center bg-gray-darkest hover:bg-gray-darkest/50 transition-colors">
      {skill}
    </div>
  );
}

export default Skill;
