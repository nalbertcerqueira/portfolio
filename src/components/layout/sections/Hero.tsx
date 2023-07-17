import { motion } from "framer-motion"
import Image from "next/image"
import { Fragment } from "react"

import SideLinks from "@/components/SideLinks"
import useCustomInView from "@/hooks/useCustomInView"
import { heroVariants, sideLinkVariants } from "@/libs/framer-motion"
import profilePicture from "../../../../public/imgs/profile.jpeg"

interface TitleSpan {
    id: number
    className: string
    content: string
}

const titleSpans: TitleSpan[] = [
    { id: 1, className: "hero__title hero__title--main", content: "Nalbert" },
    { id: 2, className: "hero__title hero__title--main", content: "Cerqueira" },
    { id: 3, className: "hero__title hero__title--sub", content: "Desenvolvedor" },
    { id: 4, className: "hero__title hero__title--sub", content: "Web" },
    { id: 5, className: "hero__title hero__title--sub", content: "Front-end" },
    { id: 6, className: "hero__title hero__title--main", content: "." }
]

export default function Hero() {
    const { isInView, ref: heroRef } = useCustomInView({ once: true })

    function renderTitleSpans(): JSX.Element[] {
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
                    <motion.div variants={heroVariants.avatar} className="hero__avatar-container">
                        <Image
                            sizes="(max-width: 920px) 100vw, 50vw"
                            placeholder="blur"
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
                            href="https://assets.ctfassets.net/1esf6nnkgil4/5Wxachw5dbXufCFqnYSxBj/80951bc8fb2b3b554043a11a49cae10d/CV_-_Nalbert_Cerqueira.pdf"
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
