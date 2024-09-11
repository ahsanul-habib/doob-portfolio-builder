import {useState} from 'react';

const BlogsChange=(props)=>{
    
    const [blogsClient,changeBlogsClient]=useState(props.blogs);
    const [blogIndexClient,changeBlogIndexClient]=useState(0);

    const deleteABox=()=>{
        changeBlogsClient([...blogsClient.slice(0,blogIndexClient),...blogsClient.slice(blogIndexClient+1,blogsClient.length)]);
        changeBlogIndexClient(prev=>{
            if(prev===0) return 0;
            else if(prev===blogsClient.length-1) return prev-1;
            else return prev;
        });
    }
    
    const addAnEmptyBlog=()=>{
        changeBlogsClient([...blogsClient,{"img_src":"","href":"","category":'',"title":''}]);   
        if(blogsClient.length!=0) changeBlogIndexClient(blogIndexClient+1);
    }
    
    const handleChange=(index,name,value)=>{
        changeBlogsClient(blogsClient.map((blog,i)=>{
            if(i===index){
                return {...blog, [name]:value}
            }
            return blog;
        }));
    }

    const setAnImageToClient=(index,img_src)=>{
        changeBlogsClient(blogsClient.map((blog,i)=>{
            if(i===index){
                return {...blog, img_src:img_src}
            }
            return blog;
        }));
    }

    const discard = () => {
        props.toggleModalChange("blogs-change-modal");
    };
    const save = () => {
        props.changeBlog(blogsClient);
        props.toggleModalChange("blogs-change-modal");
      };
    
    
    const DisplayABlog=()=>{
        const [imageSrc, setImageSrc] = useState((blogsClient.length > 0 && blogsClient[blogIndexClient]['img_src'])  ? blogsClient[blogIndexClient]['img_src'] : '');
        const handleImageInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                setImageSrc(e.target.result);
                setAnImageToClient(blogIndexClient, e.target.result);
            };
            reader.readAsDataURL(file);

        };
        return (
            <div className="flex flex-col items-center gap-4">
                {blogsClient.length!==0&&<>
                        <span className="text-2xl">Blog - {blogIndexClient+1}</span>
                        <input type="file" accept="image/*" onChange={handleImageInputChange} />
                        {imageSrc && <img className="self-center w-36" src={imageSrc} alt="Preview" />}
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Title:
                        </span>
                        <textarea name="title" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['title']} onBlur={(e)=>handleChange(blogIndexClient,e.target.name,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Category:
                        </span>
                        <textarea name="category" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['category']} onBlur={(e)=>handleChange(blogIndexClient,e.target.name,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Date:
                        </span>
                        <textarea name="date" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['date']} onBlur={(e)=>handleChange(blogIndexClient,e.target.name,e.target.value)}></textarea>
                        </div>
                        </>}
                        <div className={"flex flex-row justify-between gap-2 w-full text-white "}>
                            {blogIndexClient!==0 && <button className="bg-blue-500 px-6 py-2 rounded-lg" onClick={()=>changeBlogIndexClient(blogIndexClient-1)}>Previous</button>} 
                            {blogsClient.length!==0 && <button className="bg-red-500 px-6 py-2 rounded-lg" onClick={deleteABox}>Delete</button>}
                            {blogIndexClient!==blogsClient.length-1 && blogsClient.length!=0 && <button className={"bg-blue-500 px-6 py-2 rounded-lg "+(blogIndexClient===0&&"ml-auto")} onClick={()=>changeBlogIndexClient(blogIndexClient+1)}>Next</button>}
                            {(blogIndexClient===blogsClient.length-1 ||  blogsClient.length===0) && <button className={"bg-blue-500 px-6 py-2 rounded-lg flex "+(blogIndexClient===0&&"ml-auto")} onClick={addAnEmptyBlog}>Add More<span class="material-symbols-outlined">add_circle</span></button>}
                        </div>
            </div>
        )
    }

    return(
        <div className="fixed w-screen h-screen hidden z-20" id="blogs-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-11/12 md:w-7/12  bg-slate-200 rounded-lg flex flex-col max-h-8/10 overflow-y-scroll">
            <div className="flex flex-col p-4">
            <DisplayABlog/>
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

export default BlogsChange;