"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>Azure</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bacharel em Ciências e Tecnologias - Universidade Federal do Rio
          Grande do Norte, Natal (2022)
        </li>
        <li>
          Intercâmbio com duração de 18 meses realizado através do CSF - Saint
          Francis University, PA/USA (2015)
        </li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Inglês Avançado</li>
        <li>Espanhol Intermediário</li>
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
    <section className="text-white" id="about-me">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 lg:h-[630px] mb-20">
        <Image
          alt="about-me"
          src="/images/girl_computer.jpg"
          width={600}
          height={700}
          layout="fixed"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Desenvolvedora Front-End apaixonada pela criação de aplicativos web
            responsivos e interativos. Eu tenho experiência trabalhando com
            JavaScript, React, TypeScript, NextJS, HTML, CSS, Git, Azure,
            bibliotecas de componentes e frameworks CSS. Aprendo rápido e estou
            sempre em busca de expandir meus conhecimentos e habilidades. Me
            considero uma <span className="text-[#e04372]">team player</span> e
            estou animada para trabalhar com outras pessoas para criar
            aplicativos incríveis.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tecnologias
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              Idiomas
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
