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
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidade Federal do Rio Grande do Norte, Natal</li>
        <li>Saint Francis University, PA</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Inglês</li>
        <li>Espanhol</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about-me"
          src="/images/about-image.png"
          width={500}
          height={500}
          sx={{ border: "1px solid pink" }}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            31 anos, vivendo em Natal - RN. Tenho bacharel em Ciências e
            Tecnologias pela UFRN e sou entusiasta de tecnologias. Sou uma
            pessoa muito curiosa e valorizo novas oportunidades de aprendizado
            pois são elas que me motivam a sempre dar o melhor de mim! Sou
            fascinada pelo desenvolvimento web e todas as tecnologias e
            estratégias que o compõe, acredito que a criação de websites
            intuitivos e com conteúdo confiável é uma responsabilidade que deve
            ser levada a sério e por isso me mantenho atualizada das tecnologias
            mais recentes para manter um constante desenvolvimento das minhas
            habilidades.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
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
