import Divider from "./components/Divider";
import Header from "./components/Header";
import Info from "./components/Info";
import Languages from "./components/Languages";
import Socials from "./components/Socials";
import Education, { EDUCATION } from "./components/Education.tsx";
import Section from "./components/Section.tsx";
import Skill, { SKILLS } from "./components/Skill.tsx";
import Project, { PROJECTS } from "./components/Project.tsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-darker">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 text-white">
          <div className="lg:min-w-[360px] lg:min-h-screen bg-primary-darkest">
            <div className="flex flex-col gap-8 p-8">
              <Header />
              <Divider />
              <Info />
              <Divider />
              <Socials />
              <Divider />
              <Languages />
            </div>
          </div>
          <div className="px-4 sm:px-12 py-8">
            <Section
              title="Latest Projects"
              className="sm:left-point sm:left-line pb-8"
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 rounded-lg overflow-hidden">
                {PROJECTS.map((project, index) => (
                  <Project key={index} project={project} />
                ))}
              </div>
            </Section>
            <Section title="Skills" className="sm:left-point sm:left-line pb-8">
              <div className="flex flex-col xl:flex-row gap-2 rounded-lg overflow-hidden">
                {SKILLS.map((skills, index) => (
                  <Skill key={index} skills={skills} />
                ))}
              </div>
            </Section>
            <Section title="Education" className="sm:left-point">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 rounded-lg overflow-hidden">
                {EDUCATION.map((education, index) => (
                  <Education key={index} education={education} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
