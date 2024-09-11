import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const MenuChange = (props) => {
  let [menusClient, changeClientMenu]=useState(props.menus);

  const deleteMenuBox = (index) => {
    const updatedMenus = menusClient.filter((_,i) => i !== index);
    changeClientMenu(updatedMenus);
  };
  

  const addABox=(title,href)=>{
    changeClientMenu([...menusClient,{"title":title,"href":href}]);
  }

  // const deleteMenuBox = (index) => {
  //   let updatedMenus = menus.filter((_, i) => {
  //     console.log(i);
  //     console.log(index);
  //     if(i==index) console.log("Found")
  //     return(i !== index)
  //   });

  //   // let updatedMenus=menus.map((menu,i)=>{
  //   //   if(index!==i) return menu;
  //   // })

  //   changeMenu(updatedMenus);
  // };


  const discardMenu=()=>{
    changeClientMenu(props.menus);
    props.toggleModalChange('menu-change-modal');
  }

  const saveMenus = () => {
    const menuBoxes = document.querySelectorAll('.menuBoxes');
    const updatedMenus = [];

    menuBoxes.forEach(menu => {
        const menuTitle = menu.querySelector('.menu-title-header').value;
        const menuHref = menu.querySelector('.menu-href-header').value.trim();

        updatedMenus.push({ title: menuTitle, href: menuHref });
    });


    props.changeMenu(updatedMenus);
    props.toggleModalChange('menu-change-modal');
};
  return (
    <div className="fixed w-screen h-screen hidden" id="menu-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-10/12 max-h-8/10 overflow-y-scroll  bg-slate-200 rounded-lg flex flex-col">
          {menusClient.map((menu, index) => (
            <div key={uuidv4()} className="flex flex-col md:flex-row justify-evenly items-center m-1 p-2 border-b-2 border-gray-300 gap-2 menuBoxes">
                <div className="flex flex-row justify-center items-center gap-3">
                <span>
                    Name:
                </span>
              <textarea name="hello" className="menu-title-header h-8 rounded-lg text-center" defaultValue={menu['title']}></textarea>

                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                <span>
                    Link:
                </span>
              <textarea name="hello" className="menu-href-header h-8 rounded-lg text-center" defaultValue={menu['href']}></textarea>

                </div>
                <button className="px-6 py-2 bg-red-500 rounded-lg text-white" onClick={() => deleteMenuBox(index)}>Delete</button>
            </div>
          ))}
          <div className="flex flex-row justify-center py-3">
          <button onClick={()=>addABox('','')} className="text-white px-6 py-2 bg-blue-500 rounded-lg flex flex-row gap-2">Add More<span class="material-symbols-outlined">
add_circle
</span></button>

          </div>
          <div className="flex flex-row justify-center m-2">
          <button onClick={discardMenu} className="text-black hover:text-white py-2 px-6 hover:bg-red-500 border-2 rounded-lg border-red-500">
            Cancel
          </button>
          <button onClick={saveMenus} className="text-white ml-2 py-2 px-8 bg-green-400 rounded-lg">
            Save
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuChange;
