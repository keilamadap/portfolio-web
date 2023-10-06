import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contacts = () => {
  return (
    <section
      id="contato"
      className="flex items-center justify-center mt-20 mb-20"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Atualmente estou em buscar de novas oportunidades, meu inbox está sem
          disponível. Caso queira entrar em contato, sinta-se à vontade.
        </p>
        <div className="socials flex items-center justify-center gap-5">
          <Link href="https://www.github.com/keilamadap" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/keila-amada-parreira"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <div className="socials flex items-center justify-center gap-5 mt-5">
          <p className="flex items-center gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            keila.amadap@hotmail.com
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            (84) 9-96463271
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
