import { ProjectList } from "../data"


const Project = () => {
    return (
        <div className="bg-cozy-card">
            <div className="container mx-auto px-8 lg:px-20 py-16">
                <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">Projets</h3>
                <p className="text-base font-normal text-cozy-muted">Some of my recent work</p>
                <div>
                    {ProjectList.map(project => (
                        <div className="" key={project.id}>
                            <img src={project.image} alt="Project Image" />
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <a href={project.link}>View Product</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project