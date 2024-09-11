import {useState} from 'react';

const FeedbackChange=(props)=>{
    const [feedbacksClient,changefeedbacksClient]=useState(props.feedbacks);
    const [feedbackIndexClient,changefeedbackIndexClient]=useState(0);

    
    const deleteABox=()=>{
        changefeedbacksClient([...feedbacksClient.slice(0,feedbackIndexClient),...feedbacksClient.slice(feedbackIndexClient+1,feedbacksClient.length)]);
        changefeedbackIndexClient(prev=>{
            if(prev===0) return 0;
            else if(prev===feedbacksClient.length-1) return prev-1;
            else return prev;
        });
    }

    const addAnEmptyBlog=()=>{
        changefeedbacksClient([...feedbacksClient,{"img_src":"","href":"","category":'',"title":''}]);   
        if(feedbacksClient.length!=0) changefeedbackIndexClient(feedbackIndexClient+1);
    }
    
    const handleChange=(index,name,value)=>{
        changefeedbacksClient(feedbacksClient.map((blog,i)=>{
            if(i===index){
                return {...blog, [name]:value}
            }
            return blog;
        }));
        // console.log(feedbacksClient.map((blog,i)=>{
        //     if(i===index){
        //         return {...blog, [name]:value}
        //     }
        //     return blog;
        // }));
    }

    const setAnImageToClient=(index,img_src)=>{
        changefeedbacksClient(feedbacksClient.map((blog,i)=>{
            if(i===index){
                return {...blog, img_src:img_src}
            }
            return blog;
        }));
    }

    const discard = () => {
        props.toggleModalChange("feedback-change-modal");
    };
    const save = () => {
        props.changeFeedback(feedbacksClient);
        props.toggleModalChange("feedback-change-modal");
      };
    
    
    const DisplayAFeedback=()=>{
        const [imageSrc, setImageSrc] = useState((feedbacksClient.length > 0 && feedbacksClient[feedbackIndexClient]['img_src'])  ? feedbacksClient[feedbackIndexClient]['img_src'] : '');
        const handleImageInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                setImageSrc(e.target.result);
                setAnImageToClient(feedbackIndexClient, e.target.result);
            };
            reader.readAsDataURL(file);

        };
        return (
            <div className="flex flex-col items-center gap-4">
                {feedbacksClient.length!==0&&<>
                        <span className="text-2xl">Feedback - {feedbackIndexClient+1}</span>
                        <input type="file" accept="image/*" onChange={handleImageInputChange} />
                        {imageSrc && <img className="self-center w-36" src={imageSrc} alt="Preview" />}
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Name
                        </span>
                        <textarea name="name" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={feedbacksClient[feedbackIndexClient]['name']} onBlur={(e)=>handleChange(feedbackIndexClient,e.target.name,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Profession
                        </span>
                        <textarea name="profession" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={feedbacksClient[feedbackIndexClient]['profession']} onBlur={(e)=>handleChange(feedbackIndexClient,e.target.name,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <span>
                            Description
                        </span>
                        <textarea name="description" className="w-full h-8 rounded-lg text-center flex-grow" defaultValue={feedbacksClient[feedbackIndexClient]['description']} onBlur={(e)=>handleChange(feedbackIndexClient,e.target.name,e.target.value)}></textarea>
                        
                        </div>
                        </>}
            </div>
        )
    }

    return(
        <div className="fixed w-screen h-screen hidden z-20" id="feedback-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-10/12 md:w-7/12  bg-slate-200 rounded-lg flex flex-col max-h-8/10 overflow-y-scroll">
            <div className="flex flex-col p-4">
                {/* <span>Hello</span> */}

            <DisplayAFeedback/>
            <div className={"flex flex-row justify-between gap-2 w-full text-white mt-6"}>
                            {feedbackIndexClient!==0 && <button className="bg-blue-500 px-6 py-2 rounded-lg" onClick={()=>changefeedbackIndexClient(feedbackIndexClient-1)}>Previous</button>}
                            {feedbacksClient.length!==0 && <button className="bg-red-500 px-6 py-2 rounded-lg" onClick={deleteABox}>Delete</button>}
                            {feedbackIndexClient!==feedbacksClient.length-1 && feedbacksClient.length!=0 && <button className={"bg-blue-500 px-6 py-2 rounded-lg "+(feedbackIndexClient===0&&"ml-auto")} onClick={()=>changefeedbackIndexClient(feedbackIndexClient+1)}>Next</button>}
                            {(feedbackIndexClient===feedbacksClient.length-1 || feedbacksClient.length===0) && <button className={"bg-blue-500 px-6 py-2 rounded-lg flex "+(feedbackIndexClient===0&&"ml-auto")} onClick={addAnEmptyBlog}>Add More<span class="material-symbols-outlined">add_circle</span></button>}
                        </div>
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

export default FeedbackChange;