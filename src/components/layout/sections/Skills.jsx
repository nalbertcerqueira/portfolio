import { motion } from "framer-motion"
import { useState } from "react"

import StackList from "@/src/components/StackList"
import Subtitle from "@/src/components/Subtitle"
import useCustomInView from "@/src/hooks/useCustomInView"
import { skillsVariants } from "@/src/libs/framer-motion"
import { BsMouse } from "@/src/libs/react-icons"
import { skillsMap } from "@/src/utils/skills"

export default function Skills() {
    const [currentId, setCurrentId] = useState(null)
    const { isInView, ref: skillsRef } = useCustomInView({ once: true, amount: 0.25 })

    function changeCurrentId(event) {
        const currentId = event.target.dataset.id
        if (currentId) setCurrentId(currentId)
    }
    function resetCurrentId() {
        setCurrentId(null)
    }

    function renderDescription() {
        if (currentId) {
            return (
                <div className="skills__desc-wrapper">
                    <article>
                        <Subtitle
                            subtitle={skillsMap[currentId]?.name}
                            markerClassName={currentId && `marker--${currentId}`}
                        />
                        <p className="skills__tech-desc">
                            {skillsMap[currentId]?.description}
                        </p>
                    </article>
                </div>
            )
        }
        return (
            <div className="skills__draft-container">
                <p className="skills__desc-draft">
                    {currentId ||
                        "Passe o cursor do mouse sobre cada uma das tecnologias para saber mais."}
                </p>
                <p className="skills__desc-draft skills__desc-draft--mobile">
                    {currentId || "Toque nos ícones das tecnologias para saber mais."}
                </p>
                <BsMouse
                    aria-hidden="true"
                    focusable="false"
                    className="skills__hover-icon"
                />
            </div>
        )
    }

    return (
        <motion.section
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={skillsVariants.container}
            ref={skillsRef}
            id="skills"
            className="skills"
        >
            <div className="skills__inner-container">
                <div className="skills__title-box">
                    <motion.h2 variants={skillsVariants.title} className="skills__title">
                        Tecnologias que utilizo
                    </motion.h2>
                    <motion.span
                        variants={skillsVariants.titleLine}
                        className="skills__title-line"
                    />
                </div>
                <motion.div
                    variants={skillsVariants.contentWrapper}
                    className="skills__content"
                >
                    <StackList
                        animationConfigs={skillsVariants.content}
                        className="skills__stack-list"
                        onMouseLeave={resetCurrentId}
                        onMouseMove={changeCurrentId}
                    />
                    <motion.div
                        variants={skillsVariants.content}
                        className="skills__description-box"
                    >
                        {renderDescription()}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
