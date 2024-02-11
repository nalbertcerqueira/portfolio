interface MarkerHeadingProps {
    title: string
    markerClassName: string
}

//Marcador utilizado em About.jsx e Skills.jsx.
export default function MarkerHeading({ title, markerClassName }: MarkerHeadingProps) {
    return (
        <div className="title-marker">
            <span className={`title-marker__marker ${markerClassName || ""}`.trim()} />
            <h3 className="title-marker__content">{title}</h3>
        </div>
    )
}
