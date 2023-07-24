import toast from "react-hot-toast";

export const ProjectItem = ({ProjectName, ProjectTechno, ProjectURL, titleSize, ProjectImg}) => {
    const handleLocation = () => {
        if (ProjectURL === '') return toast.error('This project is not available yet', {
            style: {
                fontFamily: 'Poppins'
            }
        })

        toast.success('Redirecting to the project', {
            style: {
                fontFamily: 'Poppins'
            }
        });
        setTimeout(() => {
            window.open(ProjectURL, '_blank')
        }, 1000)
    }
    return (
        <section>
            <img src={ProjectImg} alt=""/>
            <footer onClick={handleLocation}>
                <h1 className={titleSize}>{ProjectName}</h1>
                <div className="project_techno_container">
                    {ProjectTechno.map((techno, index) => {
                        return <div key={index} className="project_techno">{techno}</div>
                    })}
                </div>
            </footer>
        </section>
    )
}