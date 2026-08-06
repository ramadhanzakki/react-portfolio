import {DataTools} from '/src/data.js'

const Tools = () => {
    return (
        <>
            <div id="skill" className="py-16 container mx-auto px-8 lg:px-20 flex flex-col items-center">
                <h3 className="text-brand-amber font-semibold tracking-wider text-lg uppercase">My Tech Toolbox</h3>
                <p className="text-base font-normal text-cozy-muted">Here are a few technologies I used when I worked</p>
                <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {DataTools.map(tool => (
                        <div className="flex items-center gap-3 p-3 border border-cozy-border rounded-md hover:bg-zinc-800 group" key={tool.id}>
                            <img src={tool.image} alt="Tool Image" className="w-14"/>
                            <h4 className='text-lg font-medium text-cozy-text'>{tool.toolName}</h4>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Tools