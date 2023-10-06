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
        <div className="socials flex items-center justify-center gap-5 mt-5 ">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            (84) 99646-3271
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
