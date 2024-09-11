import { useState } from "react";

const BioChange = (props) => {
  const [bioClient, changeBioClient] = useState(props.bio);
  // const [bioImageClient, changeBioImageClient]=useState(props.bio['about_img']);
  const [imageSrc, setImageSrc] = useState(bioClient['about_img']);
  console.log(imageSrc);
  const handleImageInputChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = function(e) {
          setImageSrc(e.target.result);
          changeBioClient(prev=>({...prev, about_img: e.target.result}));
      };
      reader.readAsDataURL(file);
  };

  const handleChange=(e)=>{
    changeBioClient({...bioClient, [e.target.name]: e.target.value});
    console.log(bioClient);
  }
  const discard = () => {
    changeBioClient(props.bio);
    props.toggleModalChange("bio-change-modal");
};
const save = () => {
    props.changeBio(bioClient);
    props.toggleModalChange("bio-change-modal");
  };
  return (
    <div className="fixed w-screen h-screen hidden z-30" id="bio-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col max-h-8/10 overflow-y-scroll">
          <div className="flex flex-col items-center justify-center p-9 gap-4 md:gap-">
            <div>
            <input type="file" accept="image/*" onChange={handleImageInputChange} />
            {imageSrc && <img className="self-center w-full" src={imageSrc} alt="Preview" />}
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Name</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.name} name="name" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Short Profession</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.short_profession} name="short_profession" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Intro</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.intro} name="intro" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Profession</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.profession} name="profession" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Phone</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.phone} name="phone" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Location</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.location} name="location" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>CV Link</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={bioClient.cv_link} name="cv_link" onChange={handleChange}/>
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
  );
};

export default BioChange;
