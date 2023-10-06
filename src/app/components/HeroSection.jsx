"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-[#e04372] bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Olá! Eu sou
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Keila Amada", 1000, "Dev Frontend", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Bem-vindo ao meu portfólio. Aqui compartilho sobre projetos que
            estou desenvolvendo e também um pouco sobre mim. Sinta-se a vontade
            para explorar :)
          </p>
          <div>
            <Link
              href="#contacts"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#e04372] hover:bg-slate-400 text-white"
            >
              Meu Contato
            </Link>
            <Link
              href="https://drive.google.com/file/d/1y0D2oQ8aZ7_K8brVuOa7a_by56qMMcLK/view?usp=sharing"
              target="_blank"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-slate-700 hover:bg-slate-800 text-white mt-3"
            >
              Baixar Currículo
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Profile_Kei.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
