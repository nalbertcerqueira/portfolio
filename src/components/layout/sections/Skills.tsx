"use client"

import { motion } from "framer-motion"
import { BsMouse } from "@/libs/react-icons"
import { skillsVariants } from "@/libs/framer-motion"
import { MouseEvent, useState } from "react"

import StackList from "@/components/StackList"
import { SkillsMap } from "@/types/general"
import MarkerHeading from "./MarkerHeading"
import MotionContainer from "../MotionContainer"

interface SkillsProps {
    skillsMap: SkillsMap
}

export default function Skills({ skillsMap }: SkillsProps) {
    const [currentId, setCurrentId] = useState<string | null>(null)

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
                <div aria-live="polite" aria-atomic="true" className="skills__desc-wrapper">
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
            <div aria-live="polite" aria-atomic="true" className="skills__draft-container">
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
        <MotionContainer
            amount={0.25}
            once={true}
            elementType="section"
            elementProps={{
                id: "skills",
                className: "skills",
                initial: "hidden",
                variants: skillsVariants.container
            }}
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
        </MotionContainer>
    )
}
