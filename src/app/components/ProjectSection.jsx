import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Rede Social de Cachorros",
    description:
      "Este projeto foi elaborado utilizando React e Vite, com a finalidade de aprimorar e aplicar conceitos fundamentais relacionados aos React Hooks. Nesta rede social para cachorros, é viável executar operações como registro do usuário, a redefinição de senha e, após um login bem-sucedido, os usuários tem acesso à sua conta pessoal, ao feed de conteúdo e à sessão de postagem de fotos. Para viabilizar essas funcionalidades, o front foi integrado às APIs REST disponibilizadas pela plataforma Origamidi.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/dogs-project",
    previewUrl: "https://keilamadap.github.io/dogs-project/",
  },
  {
    id: 2,
    title: "Pokedex",
    description:
      "O desenvolvimento do aplicativo Pokedex foi integrado a API PokeApi e exibe uma lista de cards na página inicial com a proposta de selecionar os cards desejados e salvá-los em um índice de favoritos no topo da página. Neste projeto optei por utilizar o conceito do Context para tornar possível a transmissão dos dados de forma simplificada entre todos os componentes e utilizei LocalStorage para armazenar os Pokemons favoritados, também foi adicionado uma página de detalhes correspondente a cada pokemon!",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/myfavpokedex",
    previewUrl: "https://keilamadap.github.io/myfavpokedex/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
