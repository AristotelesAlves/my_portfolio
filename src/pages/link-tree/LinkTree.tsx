import { BriefcaseBusinessIcon, Instagram, Linkedin, Mail, Phone, } from "lucide-react";
import { linktree, getLanguage } from "../../translations/linktree";

export default function LinkTree() {
    const lang = getLanguage();
    const t = linktree[lang];

    return (
        <div className="flex flex-col gap-2 h-screen w-screen items-center justify-center" style={{
            backgroundImage: 'url(/imgs/background-link-tree.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%'
        }}>
            <div className="bg-black border-2 rounded-3xl border-[#303030] md:w-fit w-[90%] shadow-md h-[80%] text-white overflow-hidden">
                <div className="h-24 border-b-2 border-[#303030]" style={{
                    backgroundImage: 'url(/imgs/header-link-tree.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}></div>
                <figure className="w-full h-fit flex items-center justify-center -mt-[50px]">
                    <img className="w-[100px] h-[100px] rounded-full border-2 border-[#303030]" src="https://avatars.githubusercontent.com/u/103201579?v=4" alt="" />
                </figure>
                <div className="flex w-full flex-col">
                    <div className="flex flex-col w-full items-center justify-center gap-1 pt-4">
                        <h1 className="text-2xl text-[#CCCCCC] font-semibold">
                            {t.title}
                        </h1>
                        <p className="text-sm text-[#A6A6A6] w-[70%] text-center">
                            {t.description}
                        </p>
                    </div>

                    <nav className="w-full flex justify-between text-[#454242] px-20 py-8">
                        <a className="hover:text-green-700 transition-colors duration-150" href="https://www.instagram.com/aristoteles269/"><Linkedin /></a>
                        <a className="hover:text-green-700 transition-colors duration-150" href="https://linkedin.com/in/aristóteles-alves-ab8089226"><Instagram /></a>
                        <a className="hover:text-green-700 transition-colors duration-150" href="https://api.whatsapp.com/send?phone=5587981152947&text=Olá, tudo bem ?"><Phone /></a>
                        <a className="hover:text-green-700 transition-colors duration-150" href="mailto:aristotelesalves39@gmail.com"><Mail /></a>
                    </nav>

                    <nav className="flex flex-col w-full items-center justify-center gap-4 h-full">
                        <a className="w-[90%] flex gap-3 bg-[#191919] px-2 py-4 border-2 rounded-2xl border-[#303030] hover:border-green-700 transition-colors duration-500" href="https://aristoteles.dev.br" >
                            <BriefcaseBusinessIcon className="text-[#454242]" />
                            <span>
                                {t.portfolio}
                            </span>
                        </a>

                        <a className="w-[90%] flex gap-3 bg-[#191919] px-2 py-4 p-2 border-2 rounded-2xl border-[#303030] hover:border-green-700 transition-colors duration-500" href="https://github.com/AristotelesAlves">
                            <BriefcaseBusinessIcon className="text-[#454242]" />
                            <span>
                                {t.openSource}
                            </span>
                        </a>

                        <div className="w-[90%] flex flex-col h-full gap-3 bg-[#191919] px-2 py-4 p-2 border-2 rounded-2xl border-[#303030] hover:border-green-700 transition-colors duration-500">
                            <h2>
                                {t.lastProject}
                            </h2>
                            <img className="w-full h-[180px] border-[#303030] hover:border-green-700 border-2 rounded-xl object-cover object-[center_0%]" src="/imgs/salada.png" alt="" />
                        </div>
                    </nav>
                </div>
            </div>
            <span className="text-white italic text-sm">
                {t.copyright}
            </span>
        </div>
    )
}