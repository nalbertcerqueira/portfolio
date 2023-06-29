import { IconType } from "react-icons/lib"

export interface SocialLink {
    id: number
    href: string
    ariaLabel: string
    icon: IconType
    iconStyle?: CSSProperties
    target?: "_blank" | "_parent" | "_self" | "_top"
}
