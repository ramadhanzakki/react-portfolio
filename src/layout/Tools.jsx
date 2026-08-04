import {DataTools} from '/src/data.js'

const Tools = () => {
    return (
        <>
            <div className="py-16 container mx-auto px-8 lg:px-20 flex flex-col items-center">
                <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">My Tech Toolbox</h3>
                <p className="text-base font-normal text-cozy-muted">Here are a few technologies I used when I worked</p>
                <div className="mt-14 w-full grid grid-cols-3 grid-rows-3 gap-4">

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