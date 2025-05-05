import React from "react"
import Image from "next/image"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    // { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    // { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48 ">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
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
                            <span className="font-bold">driven</span> web developer based in{" "}
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
                            I believe in continuous growth and learning, and I strive to push the limits of what’s possible. I’m excited to see where my career in tech and finance takes me, and I’m always open to new opportunities. 🙂
                        </p>
                    </div>

                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        <Image
                            src="/hero-image.png"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection