"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>C#</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete 2023 Web Development Bootcamp, Udemy</li>
        <li>
          100 Days of Code: The Complete Python Pro Bootcamp for 2022, Udemy
        </li>
        <li>Complete C++ DSA Course, Codehelp</li>
        <li>
          Oracle Cloud Infrastructure Foundations Associate, Oracle University
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://leetcode.com/SumitSingh18/" className="font-bold">
            <span className="font-bold">Leetcode: </span>
          </a>
          Solved 90+ problems
        </li>
        <li>
          <a
            href="https://codingninjas.com/studio/profile/d056c210-e7ce-47a6-b847-27694c48e8e5"
            className="font-bold"
          >
            <span className="font-bold">Coding Ninjas: </span>
          </a>
          Solved 150+ problems
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/profile/sumitkumar_sing1"
            className="font-bold"
          >
            <span className="font-bold">Hackerrank: </span>
          </a>
          5⭐Badge in Python & 4⭐Badge in C++ on Hackerrank Platform
        </li>
        <li>
          <span className="font-bold">TSEC-Codetantra: </span>
          Participated in the hackathon organized by the Thadomal Sahani College
          of Engineering
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I'm a MERN Stack Developer and a Problem-Solving enthusiast pursuing
            IT engineering from UCOE, Mumbai. I have a passion for software
            development and have a diverse skillset in C++, Python, and MERN
            stack. I enjoy solving problems, learning new technologies, etc. I
            am a team player and now I'm actively developing projects and
            seeking internship & job opportunities.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
