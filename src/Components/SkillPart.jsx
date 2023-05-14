export default function SkillPart({title, technoIcon}) {
    return (
        <div className="Skill_Part">
            {technoIcon}
            <h1>{title}</h1>
        </div>
    )
}