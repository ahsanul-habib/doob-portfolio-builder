import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const SkillChange = (props) => {
  const [skillClient, changeSkillClient] = useState(props.skills);
  const [motoClient, changeMotoClient] = useState(props.moto);

  const handlePercentageChange = (index, newValue) => {
    changeSkillClient(prevSkills => {
        return prevSkills.map((skill, i) => {
            if (i === index) {
                return { ...skill, percentage: `${newValue}%` };
            }
            return skill;
        });
    });
};

    const deleteABox=(index)=>{
        changeSkillClient(prevSkills => {
            return prevSkills.filter((_, i) => i!== index);
        });
    }

    const handleMotoChange=(updatedMotoClient)=>{
        changeMotoClient(updatedMotoClient);
    }

  const handleNameChange = (index, newValue) => {
    changeSkillClient(prevSkills => {
        return prevSkills.map((skill, i) => {
            if (i === index) {
                return { ...skill, title: newValue };
            }
            return skill;
        });
    });
};

const addABox=(title,percentage)=>{
    changeSkillClient([...skillClient,{"title":title,"percentage":percentage}]);
  }

  const discard = () => {
    props.toggleModalChange("skill-change-modal");
};
const save = () => {
    props.changeSkill(skillClient);
    props.changeMoto(motoClient);
    props.toggleModalChange("skill-change-modal");
  };

  return (
    <div className="fixed w-screen h-screen hidden z-20" id="skill-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col max-h-8/10 overflow-y-scroll">
          <div className="flex flex-col items-center justify-center p-9 gap-7">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
              <span>Moto</span>
              <input type="text" className="flex-grow px-3 rounded-lg" defaultValue={motoClient} name="moto" onChange={(e)=>handleMotoChange(e.target.value)}/>
            </div>
            {skillClient.map((skill,index)=>
            <div key={uuidv4()} className="w-full flex flex-col md:flex-row justify-center gap-6">
            <input className="px-2 rounded-lg" type="text" defaultValue={skill.title}  onBlur={(e) => handleNameChange(index, e.target.value)}/>
            <input type="range" className="flex-grow" min={0} max={100} defaultValue={parseInt(skill.percentage)} name={skill.title} onBlur={(e) => handlePercentageChange(index, e.target.value)}/>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteABox(index)}>Delete</button>
          </div>
                )}
            <button onClick={()=>addABox('','50%')} className="text-white px-6 py-2 bg-blue-500 rounded-lg flex flex-row gap-2">Add More<span class="material-symbols-outlined">
add_circle
</span></button>
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

export default SkillChange;
