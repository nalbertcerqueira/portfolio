import { motion } from "framer-motion"
import Image from "next/image"

import Link from "@/components/Link"
import useCustomInView from "@/hooks/useCustomInView"
import { aboutVariants } from "@/libs/framer-motion"
import profilePicture from "../../../../public/imgs/social.png"
import { SocialLink } from "../types"
import MarkerHeading from "./MarkerHeading"

import { SiGmail, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "@/libs/react-icons"

const linksList: SocialLink[] = [
    {
        id: 1,
        href: "https://github.com/nalbertcerqueira",
        ariaLabel: "Meu perfil no github",
        icon: SlSocialGithub
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/nalbert-cerqueira-53981a162/",
        ariaLabel: "Meu perfil no LinkedIn",
        icon: SlSocialLinkedin
    },
    {
        id: 3,
        href: "https://www.instagram.com/ncerqueiraa/",
        ariaLabel: "Meu instagram pessoal",
        icon: SlSocialInstagram
    },
    {
        id: 4,
        href: "mailto:nalbertc.p@gmail.com",
        ariaLabel: "Email para contato",
        icon: SiGmail,
        target: "_self"
    }
]

export default function About() {
    const { isInView, ref: aboutRef } = useCustomInView({ amount: 0.25, once: true })

    return (
        <motion.section
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={aboutVariants.container}
            ref={aboutRef}
            id="about"
            className="about"
        >
            <div className="about__inner-container">
                <div className="about__title-box">
                    <motion.h2 variants={aboutVariants.title} className="about__title">
                        Sobre mim
                    </motion.h2>
                    <motion.span variants={aboutVariants.titleLine} className="about__title-line" />
                </div>
                <motion.div variants={aboutVariants.contentWrapper} className="about__content-wrapper">
                    <motion.div variants={aboutVariants.avatar} className="about__avatar-container">
                        <Image
                            className="about__avatar-img"
                            src={profilePicture}
                            placeholder="blur"
                            alt="Nalbert cerqueira - desenvolvedor frontend."
                        />
                    </motion.div>
                    <div className="about__right-content">
                        <motion.div variants={aboutVariants.textContent} className="about__content-division">
                            <article>
                                <MarkerHeading markerClassName="about__marker" title="Apresentação" />
                                <p className="about__text">
                                    Olá ! Meu nome é Nalbert, sou um recém formado em engenharia química que
                                    está em transição de carreira para o setor de tecnologia como
                                    Desenvolvedor Web Front-end.
                                </p>
                                <br />
                                <p className="about__text">
                                    Atualmente possuo experiência em tecnologias como: React, Next.js, SASS,
                                    TypeScript, JavaScript, TailwindCSS, APIs Rest, Mongodb, Node.js dentre
                                    outras. Como desenvolvedor, venho me dedicando na construção de interfaces
                                    e aplicações web com foco em responsividade, otimizações de SEO,
                                    acessibilidade e performance. Nas próximas sessões você encontrará alguns
                                    projetos desenvolvidos por mim e as principais tecnologias que utilizo.
                                </p>
                            </article>
                        </motion.div>
                        <motion.div variants={aboutVariants.textContent} className="about__content-division">
                            <MarkerHeading markerClassName="about__marker" title="Onde me encontrar" />
                            <div className="about__social-wrapper">
                                {linksList.map((link) => (
                                    <Link
                                        key={link.id}
                                        className="about__social-link"
                                        href={link.href}
                                        ariaLabel={link.ariaLabel}
                                        target={link.target}
                                    >
                                        <link.icon
                                            className="about__social-icon"
                                            aria-hidden="true"
                                            focusable="false"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
