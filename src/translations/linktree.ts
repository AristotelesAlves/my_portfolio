export const linktree = {
    pt: {
        title: "Aristóteles Alves",
        description: "Dev Full Stack, freelancer aos 22, criando experiências digitais do zero ao deploy.",
        portfolio: "Veja meu portfólio",
        openSource: "Meus projetos código aberto",
        lastProject: "Meu último projeto",
        copyright: "© 2025 Aristoteles Alves. Todos os direitos reservados."
    },
    en: {
        title: "Aristoteles Alves",
        description: "Full Stack Developer, freelancer at 22, creating digital experiences from scratch to deployment.",
        portfolio: "View my portfolio",
        openSource: "My open source projects",
        lastProject: "My last project",
        copyright: "© 2025 Aristoteles Alves. All rights reserved."
    }
};

export const getLanguage = () => {
    const userLanguage = navigator.language;
    return userLanguage.startsWith('pt') ? 'pt' : 'en';
}; 