import React from "react";
import Image from "next/image";

interface Skill {
  skill: string;
  proficiency: number;
}

const skills: Skill[] = [
  { skill: "HTML", proficiency: 70 },
  { skill: "CSS", proficiency: 65 },
  { skill: "JavaScript", proficiency: 65 },
  { skill: "TypeScript", proficiency: 30 },
  { skill: "React", proficiency: 30 },
  { skill: "Next.js", proficiency: 25 },
  { skill: "Tailwind CSS", proficiency: 30 },
  { skill: "Git", proficiency: 50 },
  { skill: "GitHub", proficiency: 50 },
];

// Helper function to determine background color based on proficiency
const getColorByProficiency = (proficiency: number): string => {
  if (proficiency >= 70) return "bg-emerald-500";
  if (proficiency >= 50) return "bg-teal-500";
  if (proficiency >= 30) return "bg-sky-500";
  return "bg-blue-400";
};

// Function to get text color based on proficiency
const getTextColorByProficiency = (proficiency: number): string => {
  return proficiency >= 50 ? "text-white" : "text-gray-700";
};

// Props type for SkillButton
interface SkillButtonProps {
  skill: string;
  proficiency: number;
}

const SkillButton: React.FC<SkillButtonProps> = ({ skill, proficiency }) => {
  const bgColor = getColorByProficiency(proficiency);
  const textColor = getTextColorByProficiency(proficiency);

  return (
    <div className="relative mr-2 mt-2 overflow-hidden rounded">
      {/* Skill button with colored background */}
      <div className={`px-4 py-2 font-semibold ${bgColor} ${textColor} flex items-center justify-between`}>
        <span>{skill}</span>
        <span className="ml-2 text-xs">{proficiency}%</span>
      </div>

      {/* Progress indicator */}
      <div className="w-full h-1 bg-gray-200">
        <div className="h-full bg-white" style={{ width: `${proficiency}%` }} />
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is <span className="font-bold">Pravin</span> and I am a{" "}
              <span className="font-bold">highly ambitious</span>,{" "}
              <span className="font-bold">self-motivated</span>, and{" "}
              <span className="font-bold">driven</span> web developer from{" "}
              <span className="font-bold">Nainital, Uttarakhand</span>.
            </p>
            <br />
            <p>
              I graduated with a BCA from <span className="font-bold">GEHU</span> and have been working in the web development field ever since.
            </p>
            <br />
            <p>
              My primary focus is on building intuitive and efficient web applications. While I enjoy coding, I also have a strong interest in financial markets, properties, and income generation through both programming and financial strategies. My goal is to merge these two fields to create innovative solutions.
            </p>
            <br />
            <p>
              I believe in continuous growth and learning, and I strive to push the limits of what's possible. I'm excited to see where my career in tech and finance takes me, and I'm always open to new opportunities. 🙂
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <SkillButton key={idx} skill={item.skill} proficiency={item.proficiency} />
              ))}
            </div>
            <Image
              src="/hero-image.png"
              alt="Profile illustration"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
