import { CustomVariants } from "@/types/general"
import { matchMediaQuery } from "../utils/methods"

const { isMobile } = matchMediaQuery("(max-width: 920px)")

//Configurações de animações da biblioteca framer-motion.

//Utilizada no header da página.
export const headerVariants: CustomVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.75, delayChildren: 0.75, staggerChildren: 0.1 }
        }
    },
    navItems: {
        hidden: (i: number) => ({
            opacity: 0,
            x: `${(i + 1) * 1}rem`
        }),
        visible: {
            opacity: 1,
            x: "0rem",
            transition: { type: "spring", duration: 1.25 }
        }
    }
}

//Utilizada na sessão inicial.
export const heroVariants: CustomVariants = {
    container: {
        hidden: {},
        visible: {
            transition: { delayChildren: isMobile ? 0.5 : 1.5, staggerChildren: 0.1 }
        }
    },
    leftContentItems: {
        hidden: (i: number) => ({
            opacity: 0,
            transform: `translateY(${i * 0.75}rem)`
        }),
        visible: {
            opacity: 1,
            transform: "translateY(0rem)",
            transition: {
                type: "spring",
                duration: 1.25
            }
        }
    },
    avatar: {
        hidden: { scale: 0.75, opacity: 0, y: "4rem" },
        visible: {
            scale: 1,
            opacity: 1,
            y: "0rem",
            transition: { type: "spring", duration: 1.5 }
        }
    }
}

//Utilizada nos links laterais da sessão inicial.
export const sideLinkVariants: CustomVariants = {
    container: {
        hidden: {},
        visible: {
            transition: { delayChildren: 0.25, staggerChildren: 0.25 }
        }
    },
    line: {
        hidden: {
            height: "0rem",
            opacity: 0
        },
        visible: {
            height: "6rem",
            opacity: 1,
            transition: { duration: 0.75 }
        }
    },
    listItem: {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.75 }
        }
    }
}

//Utilizada na sessão sobre.
export const aboutVariants: CustomVariants = {
    container: {
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.1 : 0.5 } }
    },
    title: {
        hidden: { opacity: 0, transform: "translateX(-4rem)" },
        visible: {
            opacity: 1,
            transform: "translateX(0rem)",
            transition: { duration: 0.75 }
        }
    },
    titleLine: {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: "100%",
            transition: { duration: 0.75 }
        }
    },
    contentWrapper: {
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.5 : 0.25 } }
    },
    avatar: {
        hidden: { opacity: 0, x: "-4rem" },
        visible: {
            opacity: 1,
            x: "0rem",
            transition: { type: "spring", duration: 1.5 }
        }
    },
    textContent: {
        hidden: { opacity: 0, transform: "translateY(4rem)" },
        visible: {
            opacity: 1,
            transform: "translateY(0rem)",
            transition: { type: "spring", duration: 1.5 }
        }
    }
}

//Utilizada na sessão de projetos.
export const projectsVariants: CustomVariants = {
    container: {
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.1 : 0.5 } }
    },
    title: {
        hidden: { opacity: 0, transform: "translateX(-4rem)" },
        visible: {
            opacity: 1,
            transform: "translateX(0rem)",
            transition: { duration: 0.75 }
        }
    },
    titleLine: {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: "100%",
            transition: { duration: 0.75 }
        }
    },
    projectCard: {
        hidden: { opacity: 0, transform: "translateY(4rem)" },
        visible: (i: number) => ({
            opacity: 1,
            transform: "translateY(0rem)",
            transition: {
                type: "spring",
                duration: 1.5,
                delay: isMobile ? 0 : Math.abs((i - 1) * 0.25)
            }
        })
    },
    toggleButton: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { type: "spring", duration: 1.25 }
        }
    }
}

//Utilizada na sessão de tecnologias.
export const skillsVariants: CustomVariants = {
    container: {
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.1 : 0.5 } }
    },
    title: {
        hidden: { opacity: 0, transform: "translateX(-4rem)" },
        visible: {
            opacity: 1,
            transform: "translateX(0rem)",
            transition: { duration: 0.75 }
        }
    },
    titleLine: {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: "100%",
            transition: { duration: 0.75 }
        }
    },
    contentWrapper: {
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.5 : 0.25 } }
    },
    content: {
        hidden: { opacity: 0, transform: "translateX(-4rem)" },
        visible: {
            opacity: 1,
            transform: "translateX(0rem)",
            transition: { type: "spring", duration: 1.5 }
        }
    }
}
