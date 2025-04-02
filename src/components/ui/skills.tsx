import CardSkill from "./card-skill";

export default function Skills() {
  return (
    <section className="w-full flex flex-col items-center justify-center h-full">
      <CardSkill
        title="Front-End"
        left={false}
        url_img="/imgs/Front.png"
        text="Possuo experiência no desenvolvimento de interfaces modernas e responsivas utilizando React.js, Next.js, TailwindCSS e Laravel, sempre com TypeScript como linguagem principal para garantir mais segurança e escalabilidade ao código."
      />
      <CardSkill
        title="Back-End"
        left={true}
        url_img="/imgs/Back.png"
        text="Desenvolvo APIs escaláveis e eficientes utilizando Node.js, Express, Fastify e Nest.js, com suporte a bancos de dados PostgreSQL e MySQL. Além disso, utilizo Docker para garantir ambientes isolados e portáveis, sempre priorizando TypeScript para um desenvolvimento robusto e organizado."
      />
      <CardSkill
        title="Mobile"
        left={false}
        url_img="/imgs/mobile.png"
        text="No desenvolvimento mobile, trabalho com React Native e TailwindCSS, utilizando TypeScript para garantir tipagem e qualidade no código. Além disso, tenho experiência com Android Studio e Kotlin para desenvolvimento nativo."
      />
      <CardSkill
        title="Machine Learning"
        left={true}
        url_img="/imgs/machine.png"
        text="Tenho conhecimento em Machine Learning, utilizando Google Colab e Kaggle para experimentação e modelagem de dados, com Python como principal linguagem de programação."
      />
    </section>
  );
}
