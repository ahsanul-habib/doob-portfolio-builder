import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';


const FooterMenuChange=(props)=>{

    const [isFirstSection,changeSection]=useState(true);

    const toggleSectionChange=()=>{
        changeSection(!isFirstSection);
    }

    const [footerServicesClient, changeServicesClient] = useState(props.footer_services);
    const [footerProjectsClient, changeProjectsClient] = useState(props.footer_projects);

    // const handleServicesLinkChanged=(index, changedValue)=>{
    //     changeServicesClient()
    // }

    const handleServicesTitleChange = (index, newValue) => {
        changeServicesClient(prevServices => {
            return prevServices.map((service, i) => {
                if (i === index) {
                    return { ...service, title: newValue };
                }
                return service;
            });
        });
    }

    const handleServicesLinkChange = (index, newValue) => {
        changeServicesClient(prevServices => {
            return prevServices.map((service, i) => {
                if (i === index) {
                    return { ...service, href: newValue };
                }
                return service;
            });
        });
    }

    const handleProjectsTitleChange = (index, newValue) => {
        changeProjectsClient(prevProject => {
            return prevProject.map((project, i) => {
                if (i === index) {
                    return { ...project, title: newValue };
                }
                return project;
            });
        });
    }

    const handleProjectsLinkChange = (index, newValue) => {
        changeProjectsClient(prevProjects => {
            return prevProjects.map((project, i) => {
                if (i === index) {
                    return { ...project, href: newValue };
                }
                return project;
            });
        });
    }

    const addAServiceBox=(title,href)=>{
        changeServicesClient([...footerServicesClient,{"title":title,"href":href}]);
      }

    const addAProjectBox=(title,href)=>{
        changeProjectsClient([...footerProjectsClient,{"title":title,"href":href}]);
      }

    const deleteAServiceBox = (index) => {
        let updatedServices = footerServicesClient.filter((_, i) => i!== index)
        changeServicesClient(updatedServices);
    }
    const deleteAProjectBox = (index) => {
        let updatedProjects = footerProjectsClient.filter((_, i) => i!== index)
        changeProjectsClient(updatedProjects);
    }

    const FooterProjectOptions=()=>{
        return (                <div className="w-full border-2 border-black flex flex-col items-center gap-6 md:gap-4 p-8">
        <span className="text-2xl font-bold">Projects</span>
        {footerProjectsClient.map((footerProject,index)=>
                <div key={uuidv4()} className="flex flex-col md:flex-row justify-evenly items-center gap-2 w-full">
                    <div className="flex flex-row items-center justify-center w-full">

                    <span>
                        Title:
                    </span>
                    <textarea name="hello" className="h-8 rounded-lg text-center flex-grow" defaultValue={footerProject['title']} onBlur={(e)=>handleProjectsTitleChange(index,e.target.value)}></textarea>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">

                    <span>
                        Link:
                    </span>
                    <textarea name="hello" className="h-8 rounded-lg text-center flex-grow" defaultValue={footerProject['href']} onBlur={(e)=>handleProjectsLinkChange(index,e.target.value)}></textarea>
                    </div>
                    <button className="px-6 py-2 bg-red-500 rounded-lg text-white" onClick={()=>deleteAProjectBox(index)}>Delete</button>
                </div>
            )}
                <button onClick={()=>addAProjectBox('','#')} className="text-white px-6 py-2 bg-blue-500 rounded-lg flex flex-row gap-2">Add More<span class="material-symbols-outlined">add_circle</span></button>
            <button className="bg-blue-500 text-white py-2 rounded-lg px-10 flex flex-row" onClick={toggleSectionChange}><span class="material-symbols-outlined">arrow_back</span><span>Services</span></button>
    </div>);
    }
    const FooterServiceOptions=()=>{
        return (
            <div className="w-full border-2 border-black flex flex-col items-center gap-2 p-8">
            <span className="text-2xl font-bold">Services</span>
            {footerServicesClient.map((footerService,index)=>
                    <div key={uuidv4()} className="flex flex-col md:flex-row justify-evenly items-center gap-3 w-full">
                        <div className="flex flex-row items-center justify-center w-full">
                        <span>
                            Title:
                        </span>
                        <textarea name="title" className="h-8 rounded-lg text-center flex-grow" defaultValue={footerService['title']} onBlur={(e)=>handleServicesTitleChange(index,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-row items-center justify-center w-full">
                        <span>
                            Link:
                        </span>
                        <textarea name="href" className="h-8 rounded-lg text-center flex-grow" defaultValue={footerService['href']} onBlur={(e)=>handleServicesLinkChange(index,e.target.value)}></textarea>
                        </div>
                        <button className="px-6 py-2 bg-red-500 rounded-lg text-white" onClick={()=>deleteAServiceBox(index)}>Delete</button>
                    </div>
                )}
        <button onClick={()=>addAServiceBox('','#')} className="text-white px-6 py-2 bg-blue-500 rounded-lg flex flex-row gap-2">Add More<span class="material-symbols-outlined">add_circle</span></button>
        <button className="bg-blue-500 text-white py-2 rounded-lg px-10 flex flex-row" onClick={toggleSectionChange}><span>Projects</span><span class="material-symbols-outlined">arrow_forward</span></button>
        </div>
        );
    }
    
    const discard = () => {
        props.toggleModalChange("footer-change-modal");
    };
    const save = () => {
        props.changeFooterSections(footerServicesClient,footerProjectsClient);
        props.toggleModalChange("footer-change-modal");
      };

    return(
        <div className="hidden fixed w-screen h-screen z-20" id="footer-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-10/12  bg-slate-200 rounded-lg flex flex-col max-h-8/10 overflow-y-scroll">
            <div className="flex flex-col items-center justify-center p-9 gap-3">
              <div className="w-full flex flex-row justify-evenly gap-7 ">
                {isFirstSection&&<FooterServiceOptions/>}
                {!isFirstSection&&<FooterProjectOptions/>}
                {/* <div className="w-full border-2 border-black flex flex-col items-center">
                <span className="text-2xl font-bold">Footer Projects</span>
                </div> */}
              </div>
              <div>
  
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

export default FooterMenuChange;