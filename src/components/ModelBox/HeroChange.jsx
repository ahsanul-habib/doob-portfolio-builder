import {useState} from 'react';

const HeroChange=(props)=>{
    const [nameClient, changeNameClient]=useState(props.name);
    const [heroImageClient, changeHeroImageClient]=useState(props.hero_img);
    const [imageSrc, setImageSrc] = useState(props.hero_img || '');
    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            setImageSrc(e.target.result);
            changeHeroImageClient(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleNameChange=(changedName)=>{
        changeNameClient(changedName);
    }

    const discard = () => {
        props.toggleModalChange("hero-change-modal");
    };

    const save = () => {
        props.changeName(nameClient);
        props.changeHeroImage(heroImageClient);
        props.toggleModalChange("hero-change-modal");
        console.log(nameClient);
    };

    return (
        <div className="fixed w-screen hidden h-screen z-20" id="hero-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col items-center p-5 gap-3 max-h-8/10 overflow-y-scroll">
            <h1 className='text-3xl font-bold'>Hero Section</h1>
            <div className="flex flex-row justify-center items-center gap-4">
                <span className='text-xl'>Name: </span>
                <input className="flex-grow rounded-lg h-8 px-2 text-center" defaultValue={props.name} type="text" onBlur={(e)=>handleNameChange(e.target.value)}/>
            </div>
            <div>
            <input type="file" accept="image/*" onChange={handleImageInputChange} />
                        {imageSrc && <img className="self-center w-full" src={imageSrc} alt="Preview" />}
            </div>
            <div>

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
    )
}

export default HeroChange;