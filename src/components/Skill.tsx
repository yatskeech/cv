export const SKILLS: string[][] = [
  ["React JS"],
  ["Typescript"],
  ["Tailwind CSS", "Material UI", "SASS/SCSS Modules"],
  ["HTML", "CSS", "JS"],
];

function Skill({ skills }: { skills: string[] }) {
  return (
    <div className="flex-grow p-4 flex items-center justify-center text-secondary-light bg-gray-darkest hover:bg-gray-darkest/50 transition-colors">
      {skills.length == 1 ? (
        skills[0]
      ) : (
        <ul className="list-disc">
          {skills.map((skill, index) => (
            <li key={index} className="">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Skill;
