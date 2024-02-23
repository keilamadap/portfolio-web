import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Rede Social para Cachorros",
    description:
      "Este projeto foi desenvolvido seguindo o curso da Origamidi usando React e Vite com a finalidade de criar uma rede social para cachorros, foram usados conceitos fundamentais relacionados ao React Hooks, display grid e requisições de APIs REST. Na página de login é possível acessar a aplicação usando credenciais padrão de admin/senha: 'dog', mas também pode-se fazer o registro de um novo usuário. Uma vez logado, o usuário pode postar fotos e visualizar o feed de imagens, ao clicar em uma foto é exibido um modal onde permite a exclusão da foto caso o autor da postagem seja igual ao usuário atual.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/dogs-project",
    previewUrl: "https://keilamadap.github.io/dogs-project/",
  },
  {
    id: 2,
    title: "Pokedex",
    description:
      "Este projeto foi desenvolvido consumindo os dados da API REST disponibilizada pela PokeApi, desta forma é exibida uma listagem dos cards nas páginas iniciais e ao clicar em um card o usuário é direcionado para a página de detalhes do respectivo Pokemon. Foram utilizados hooks do React como Contexto para distribuição de dados de forma global, além de hooks essenciais como useState e useEffect. Ao favoritar um Pokemon seu valor é armazenado no localStorage exibindo os itens favoritados no indíce no topo da página.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/myfavpokedex",
    previewUrl: "https://keilamadap.github.io/myfavpokedex/",
  },

  {
    id: 4,
    title: "Sistema Financeiro",
    description:
      "Sistema financeiro criado em React, TypeScript e Styled-components para estilização dos componentes. Neste sistema, você pode facilmente adicionar suas despesas e receitas. O sistema fará automaticamente o cálculo subtraindo as despesas do valor total das receitas e exibirá o saldo resultante na tela, destacando-o em vermelho se for negativo e em verde se for positivo.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/expenses-project",
    previewUrl: "https://keilamadap.github.io/expenses-project/",
  },

  {
    id: 3,
    title: "Dropmail Tech Challenge ",
    description:
      "Aplicação desenvolvida em React/TypeScript que consome os dados da API Dropmail para exibição de email temporário, desta forma os usuários podem utilizar serviços sem expor seu email real. Foi utilizado a biblioteca de componentes Material UI e Styled-Components para estilização dos elementos, utilizei GraphQL para comunicação com a API, hooks do React e localStorage para armazenamento da sessão.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/keilamadap/dropmail",
    previewUrl: "https://dropmail-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Landing page - ESM",
    description:
      "Com intuito de aumentar o SEO do cliente essa landing page foi criada utilizando NextJS, TypeScript e Styled-components, feita integração com a API para recebimento de e-mails através do formulário de contato.",
    image: "/images/projects/esm.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://esmenezes.com.br/",
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
