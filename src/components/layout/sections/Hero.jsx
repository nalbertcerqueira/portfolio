import { motion } from "framer-motion"
import Image from "next/image"
import { Fragment } from "react"

import profilePicture from "@/public/imgs/profile.jpeg"
import useCustomInView from "@/src/hooks/useCustomInView"
import { heroVariants, sideLinkVariants } from "@/src/libs/framer-motion"
import SideLinks from "../../SideLinks"

export default function Hero() {
    const { isInView, ref: heroRef } = useCustomInView({ once: true })
    const titleSpans = [
        { id: 1, className: "hero__title hero__title--main", content: "Nalbert" },
        { id: 2, className: "hero__title hero__title--main", content: "Cerqueira" },
        { id: 3, className: "hero__title hero__title--sub", content: "Desenvolvedor" },
        { id: 4, className: "hero__title hero__title--sub", content: "Web" },
        { id: 5, className: "hero__title hero__title--sub", content: "Frontend" },
        { id: 6, className: "hero__title hero__title--main", content: "." }
    ]

    function renderTitleSpans() {
        return titleSpans.map((span) => (
            <Fragment key={span.id}>
                <motion.span
                    custom={span.id}
                    variants={heroVariants.leftContentItems}
                    className={span.className}
                >
                    {span.content}
                </motion.span>

                {span.id % 2 === 0 ? <br /> : <>&nbsp;</>}
            </Fragment>
        ))
    }

    return (
        <motion.section
            ref={heroRef}
            id="home"
            className="hero"
            variants={heroVariants.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="hero__inner-container">
                <div className="hero__content-wrapper">
                    <motion.div
                        variants={heroVariants.avatar}
                        className="hero__avatar-container"
                    >
                        <Image
                            sizes="(max-width: 920px) 100vw, 50vw"
                            priority={true}
                            className="hero__avatar-img"
                            src={profilePicture}
                            alt="Nalbert cerqueira - desenvolvedor frontend."
                        />
                    </motion.div>
                    <div className="hero__left-content">
                        <h1 className="hero__title">{renderTitleSpans()}</h1>
                        <motion.a
                            custom={7}
                            variants={heroVariants.leftContentItems}
                            download
                            target="_blank"
                            role="button"
                            aria-label="Obtenha uma cópia do meu CV"
                            href="/docs/cv-nalbert-cerqueira.pdf"
                            className="btn btn--download hero__btn"
                            rel="noreferrer"
                        >
                            <span className="btn--download__content">Download CV</span>
                        </motion.a>
                        <SideLinks animationConfigs={sideLinkVariants} />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
