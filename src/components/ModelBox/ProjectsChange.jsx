import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const ProductsChange = (props) => {
    
    const [projectClient, changeProjectClient] = useState(props.projects);
    const [projectIndexClient, changeProjectIndexClient] = useState(0);

    const addAnItem2 = () => {
        changeProjectClient(prev => {
            const newProject = { title: '', img: '', category: prev[projectIndexClient]['title'], href: '#' };
            
            const updatedProjectClient = [...prev];
            updatedProjectClient[projectIndexClient]['project_list'].push(newProject);
            return updatedProjectClient;
        });
    };
    
    const addAnItem = () => {
        changeProjectClient(prev => {
            const newProject = { title: '', img: '', category: prev[projectIndexClient]['title'], href: '#' };
            const updatedProjectClient = [...prev];
            updatedProjectClient[projectIndexClient] = {
                ...updatedProjectClient[projectIndexClient],
                project_list: [...updatedProjectClient[projectIndexClient]['project_list'], newProject]
            };
            return updatedProjectClient;
        });
    };



    const deleteABox = () => {
        changeProjectClient([...projectClient.slice(0, projectIndexClient), ...projectClient.slice(projectIndexClient + 1)]);
        changeProjectIndexClient(prev => {
            if (prev === 0) return 0;
            else if (prev === projectClient.length - 1) return prev - 1;
            else return prev;
        });
    }


    const deleteItem = (index) => {
        changeProjectClient(prevProject => {
            const updatedProject = [...prevProject];
            updatedProject[projectIndexClient]['project_list'] = updatedProject[projectIndexClient]['project_list'].filter((_, i) => i !== index);
            return updatedProject;
        });
    };

    // React.useEffect(()=>{

        const EachProject = () => {
            return (<>
            {projectClient[projectIndexClient]['project_list'].map((project, index) =>{
                const [imageSrc, setImageSrc] = useState((project['img'])  ? project['img'] : '');
                const handleImageInputChange = (event) => {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = function (e) {
                        setImageSrc(e.target.result);
                        setAnImageToClient(index, e.target.result);
                    };
                    reader.readAsDataURL(file);
        
                };
                
                return (
                    <div key={uuidv4()} className="flex flex-col items-center gap-4">
                        <div className='w-full flex flex-row justify-center items-center'>
                            <span>Title:</span>
                     <input
                  type="text"
                  defaultValue={project.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  placeholder="Title"
                  className="border border-gray-400 px-3 py-2 rounded-lg flex-grow"
                  />
                        </div>
                  <div className='w-full flex flex-row justify-center items-center'>
                      <span>Link:</span>
                <input
                  type="text"
                  defaultValue={project.href}
                  onChange={(e) => handleChange(index, "href", e.target.value)}
                  placeholder="Href"
                  className="border border-gray-400 px-3 py-2 rounded-lg flex-grow"
                  />
                  </div>
                <div className="w-full relative">
                <input type="file" accept="image/*" onChange={handleImageInputChange} />
                {imageSrc && <img key={uuidv4()} className="self-center w-full p-8 rounded-lg" src={imageSrc} alt="Preview" />}
                <div className='flex flex-row items-center justify-center my-2'><button className="bg-red-500 px-6 py-2 rounded-lg text-white" onClick={()=>deleteItem(index)}>Delete Item</button></div>
                </div>
              </div>
            )})}
            </>)
          };

    const addAnEmptyBlog = () => {
        changeProjectClient([...projectClient, { title: "", project_list:[]}]);
        if(projectIndexClient!=0) changeProjectIndexClient(projectIndexClient + 1);
    }

    const handleChange = (index, name, value) => {
        changeProjectClient(prevClient=> {
            prevClient[projectIndexClient]['project_list'][index][name] = value;
            return prevClient;
        })
        }

    const setAnImageToClient = (index, img_src) => {
        changeProjectClient(prevClient=> {
            prevClient[projectIndexClient]['project_list'][index]['img'] = img_src;
            return prevClient;
        })
    }

    const handleCategoryChange = (value)=>{
        changeProjectClient(prevClient=> {
            prevClient[projectIndexClient]['title'] = value;
            prevClient[projectIndexClient]['project_list'] = prevClient[projectIndexClient]['project_list'].map((project) => {
                    return { ...project, category: value };
            });
            return prevClient;
        })
    }

    const discard = () => {
        props.toggleModalChange("projects-change-modal");
    };

    const save = () => {
        props.changeProject(projectClient);
        props.toggleModalChange("projects-change-modal");
    };

    const DisplayAProjectBox = () => {
        return (<>
            <div className="flex flex-col items-center gap-4">
                {projectClient.length !== 0 && <>
                    <span className="text-3xl">Projects - {projectIndexClient + 1}</span>
                    <div className='flex flex-row items-center justify-center gap-4 w-full px-6'>
                        <span className="text-2xl">Category:</span>
                        <textarea name="title" className='border border-gray-400 px-3 py-2 rounded-lg h-11 flex-grow' defaultValue={projectClient[projectIndexClient]['title']} onBlur={(e)=>handleCategoryChange(e.target.value)}></textarea>
                    </div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <EachProject/>

                    </div>

                </>}
                {projectClient.length!==0 && <div>
                        <button className="bg-blue-500 rounded-lg px-6 py-2 text-white" onClick={addAnItem}>Add Item</button>
                </div>}
                <div className={"flex flex-row justify-between gap-2 w-full text-white "}>
                    {projectIndexClient !== 0 && <button className="bg-blue-500 px-6 py-2 rounded-lg" onClick={() => changeProjectIndexClient(projectIndexClient - 1)}>Previous</button>}
                    {projectClient.length !== 0 && <button className="bg-red-500 px-6 py-2 rounded-lg" onClick={deleteABox}>Delete</button>}
                    {projectIndexClient !== projectClient.length - 1 && projectClient.length !== 0 && <button className={"bg-blue-500 px-6 py-2 rounded-lg " + (projectIndexClient === 0 && "ml-auto")} onClick={() => changeProjectIndexClient(projectIndexClient + 1)}>Next</button>}
                    {(projectIndexClient === projectClient.length - 1 || projectClient.length === 0) && <button className={"bg-blue-500 px-6 py-2 rounded-lg flex " + (projectIndexClient === 0 && "ml-auto")} onClick={addAnEmptyBlog}>Add More<span class="material-symbols-outlined">add_circle</span></button>}
                </div>
            </div>
                                </>
        )
    }

    return (
        <div className="fixed w-screen h-screen hidden z-20" id="projects-change-modal">
            <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
                <div className="absolute w-10/12 bg-slate-200 rounded-lg flex flex-col max-h-95 overflow-y-scroll">
                    <div className="flex flex-col p-4">
                        <DisplayAProjectBox />
                        <div className='flex flex-row justify-center items-center py-2'>
                            <button
                                onClick={discard}
                                className="text-black hover:text-white py-2 px-6 hover:bg-red-500 border-2 rounded-lg border-red-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={save}
                                className="text-white ml-2 py-2 px-8 bg-green-400 rounded-lg"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsChange;
