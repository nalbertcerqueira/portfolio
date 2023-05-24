import propTypes from "prop-types"

//Componente de título das sessões, utilizado em Hero, About, Projects e Skills.jsx.
export default function Subtitle({ subtitle, markerClassName }) {
    return (
        <div className="subtitle">
            <span className={`subtitle__marker ${markerClassName || ""}`.trim()} />
            <h3 className="subtitle__content">{subtitle}</h3>
        </div>
    )
}
Subtitle.propTypes = {
    subtitle: propTypes.string,
    lang: propTypes.string,
    markerClassName: propTypes.string
}
