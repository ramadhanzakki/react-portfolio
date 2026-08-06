import { ProjectList } from "../data"
import { FiArrowRight } from "react-icons/fi";


const Project = () => {
    return (
        <div id="project" className="">
            <div className="container mx-auto px-8 lg:px-20 py-16 flex flex-col items-center">
                <h3 className="text-brand-amber font-semibold tracking-wider text-lg uppercase">Projects</h3>
                <p className="text-base font-normal text-cozy-muted">Some of my recent work</p>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ProjectList.map(project => (
                        <div className="flex flex-col rounded-2xl bg-cozy-card border-2 border-cozy-border overflow-hidden" key={project.id}>
                            <img src={project.image} alt="Project Image"/>
                            <div className="p-4">
                                <h4 className="text-2xl font-bold mb-3">{project.name}</h4>
                                <p className="text-base/loose font-normal text-cozy-muted mb-3 ">{project.description}</p>
                                <div className="text-sm text-brand-amber flex justify-end items-end">
                                    <div className="group flex gap-1 w-fit">
                                        <a href={project.link} target="_blank" className="hover:opacity-55">View Product</a>
                                        <FiArrowRight className="group-hover:translate-x-1 group-hover:opacity-55 transition ease-in duration-75"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project