interface Logo {
    value: string;
    url: string;
    icon: string;
}

interface LogoCardProps {
    logoName: string;
    width?: number;
    height?: number;
}

export default function LogoCard({ logoName, width = 30, height = 30 }: LogoCardProps) {
    const logos: Logo[] = [
        {
            value: 'react',
            url: 'https://reactjs.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            value: 'nextjs',
            url: 'https://nextjs.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
            value: 'typescript',
            url: 'https://www.typescriptlang.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
            value: 'tailwindcss',
            url: 'https://tailwindcss.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        },
        {
            value: 'java',
            url: 'https://www.java.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
            value: 'kotlin',
            url: 'https://kotlinlang.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        },
        {
            value: 'androidstudio',
            url: 'https://developer.android.com/studio',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        },
        {
            value: 'php',
            url: 'https://www.php.net/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        },
        {
            value: 'vue',
            url: 'https://vuejs.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        },
        {
            value: 'devops',
            url: 'https://aws.amazon.com/devops/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
        {
            value: 'docker',
            url: 'https://www.docker.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            value: 'kubernetes',
            url: 'https://kubernetes.io/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
            value: 'nodejs',
            url: 'https://nodejs.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
            value: 'javascript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
            value: 'python',
            url: 'https://www.python.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
            value: 'golang',
            url: 'https://go.dev/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        },
        {
            value: 'machinelearning',
            url: 'https://en.wikipedia.org/wiki/Machine_learning',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        },
        {
            value: 'nestjs',
            url: 'https://nestjs.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
        },
        {
            value: 'vercel',
            url: 'https://nestjs.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        },
        {
            value: 'postgresql',
            url: 'https://www.postgresql.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
            value: 'prisma',
            url: 'https://www.prisma.io/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        },
        {
            value: 'zod',
            url: 'https://zod.dev/',
            icon: 'https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg', // Zod não está no Devicon, usei o logo oficial
        },
        {
            value: 'aws',
            url: 'https://aws.amazon.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
        {
            value: 'expo',
            url: 'https://expo.dev/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        },
        {
            value: 'linux',
            url: 'https://www.linux.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
        {
            value: 'git',
            url: 'https://git-scm.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
            value: 'threejs',
            url: 'https://threejs.org/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
        },
        {
            value: 'mysql',
            url: 'https://www.mysql.com/',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
    ];

    const selectedLogo = logos.find((logo) => logo.value === logoName);

    if (!selectedLogo) {
        return <div>Logo not found</div>;
    }

    return (
        <div>
            <img
                src={selectedLogo.icon}
                alt={selectedLogo.value}
                width={width}
                height={height}
                className=""
                style={{
                    filter: logoName === 'vercel' ? 'invert(1)' : undefined,
                }}
            />


        </div>
    );
}