import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function Footer(){
    return(
        <footer className="flex justify-center items-center p-5 flex-col gap-3 text-white">
            <ul className="flex gap-4">
                <li>
                    <a href="">
                        <InstagramLogo size={32} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <LinkedinLogo size={32} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <GithubLogo size={32} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <WhatsappLogo size={32} />
                    </a>
                </li>
            </ul>
            <p>
                Aristóteles © 2023
            </p>
        </footer>
    )
}