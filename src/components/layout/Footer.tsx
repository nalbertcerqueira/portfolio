import { BsGithub, BsLinkedin, FaInstagramSquare, SiGmail } from "../../libs/react-icons"
import Link from "../Link"
import { SocialLink } from "./types"

const socialLinks: SocialLink[] = [
    {
        id: 1,
        href: "https://github.com/nalbertcerqueira",
        ariaLabel: "Meu perfil no github",
        icon: BsGithub
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/nalbert-cerqueira-53981a162/",
        ariaLabel: "Meu perfil no LinkedIn",
        icon: BsLinkedin
    },
    {
        id: 3,
        href: "mailto:nalbertc.p@gmail.com",
        ariaLabel: "Email para contato",
        icon: SiGmail,
        target: "_self"
    },
    {
        id: 4,
        href: "https://www.instagram.com/ncerqueiraa/",
        ariaLabel: "Meu instagram pessoal",
        icon: FaInstagramSquare,
        iconStyle: { height: "1.5rem", width: "1.5rem" }
    }
]

export default function Footer() {
    function renderLinkList(): JSX.Element[] {
        return socialLinks.map((link) => (
            <li key={link.id}>
                <Link
                    className="footer__social-link"
                    href={link.href}
                    ariaLabel={link.ariaLabel}
                    target={link.target}
                >
                    <link.icon
                        aria-hidden="true"
                        focusable="false"
                        className="footer__social-icon"
                        style={link.iconStyle}
                    />
                </Link>
            </li>
        ))
    }

    return (
        <footer className="footer">
            <div className="footer__inner-container">
                <div className="footer__social">
                    <ul className="footer__social-wrapper">{renderLinkList()}</ul>
                    <a
                        className="footer__mailto-link"
                        aria-label="Email para contato"
                        href="mailto:nalbertc.p@gmail.com"
                    >
                        nalbertc.p@gmail.com
                    </a>
                </div>
                <div className="footer__attributions">
                    <p className="footer__copyright">
                        Copyright © 2023{" "}
                        <Link
                            className="footer__link-bottom"
                            href="https://nalbertdev.com"
                        >
                            nalbertdev.com.
                        </Link>{" "}
                        Todos os direitos reservados.
                    </p>
                    <p className="footer__author">
                        Desenvolvido por{" "}
                        <Link
                            className="footer__link-bottom"
                            href="https://github.com/nalbertcerqueira"
                            ariaLabel="Link para meu perfil no github"
                        >
                            Nalbert Cerqueira
                        </Link>{" "}
                        ✌
                    </p>
                </div>
            </div>
        </footer>
    )
}
