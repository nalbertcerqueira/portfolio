import { motion } from "framer-motion"
import { MouseEvent, useState } from "react"

import StackList from "@/components/StackList"
import useCustomInView from "@/hooks/useCustomInView"
import { skillsVariants } from "@/libs/framer-motion"
import { BsMouse } from "@/libs/react-icons"
import { SkillsMap } from "@/types/general"
import MarkerHeading from "./MarkerHeading"

interface SkillsProps {
    skillsMap: SkillsMap
}

export default function Skills({ skillsMap }: SkillsProps) {
    const [currentId, setCurrentId] = useState<string | null>(null)
    const { isInView, ref: skillsRef } = useCustomInView({ once: true, amount: 0.25 })

    function changeCurrentId(event: MouseEvent<HTMLElement>): void {
        const target = event.target as HTMLElement
        const targetId = target.dataset.id as string | null
        if (targetId) setCurrentId(targetId)
    }

    function resetCurrentId(): void {
        setCurrentId(null)
    }

    function renderDescription(): JSX.Element {
        if (currentId) {
            return (
                <div className="skills__desc-wrapper">
                    <article>
                        <MarkerHeading
                            title={skillsMap[currentId]?.name}
                            markerClassName={currentId && `marker--${currentId}`}
                        />
                        <p className="skills__tech-desc">{skillsMap[currentId]?.description}</p>
                    </article>
                </div>
            )
        }
        return (
            <div className="skills__draft-container">
                <p className="skills__desc-draft">
                    {currentId || "Passe o cursor do mouse sobre cada uma das tecnologias para saber mais."}
                </p>
                <p className="skills__desc-draft skills__desc-draft--mobile">
                    {currentId || "Toque nos ícones das tecnologias para saber mais."}
                </p>
                <BsMouse aria-hidden="true" focusable="false" className="skills__hover-icon" />
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
                    <motion.span variants={skillsVariants.titleLine} className="skills__title-line" />
                </div>
                <motion.div variants={skillsVariants.contentWrapper} className="skills__content">
                    <StackList
                        animationConfigs={skillsVariants.content}
                        className="skills__stack-list"
                        skillsMap={skillsMap}
                        onMouseLeave={resetCurrentId}
                        onMouseMove={changeCurrentId}
                    />
                    <motion.div variants={skillsVariants.content} className="skills__description-box">
                        {renderDescription()}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
