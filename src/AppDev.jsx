import React from "react";
import data from "./components/doob.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Headers from "./components/Headers.jsx";
import HeroDev from "./components/HeroDev.jsx";
import Card from "./components/Card.jsx";
import Brands from "./components/Brands.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Blogs from "./components/Blogs.jsx";
import ContactUS from "./components/ContactUS.jsx";
import FooterMenu from "./components/FooterMenu.jsx";
import Footer from "./components/Footer.jsx";
import ChangeModal from "./components/ChangeModal.jsx";



const App = () => {
  let [Data, changeData] = React.useState(data);
  const toggleDark = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.getElementById("isDark").innerText = "light_mode";
    } else {
      document.body.classList.add("dark");
      document.getElementById("isDark").innerText = "dark_mode";
    }
  };
  
  const changeName = (name) => {
    changeData({ ...Data, name: name });
  };
  
  const toggleModalChange=(modalID)=>{
    document.getElementById(modalID).classList.toggle("hidden");
  }


  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("hidden");
    document.getElementById("sidebarOverlay").classList.toggle("hidden");
  };

  return (
    <div
      id="main_wrapper"
      className="bg-white w-screen flex flex-col font-inter dark:bg-black"
    >
      <Sidebar
        logo_img={Data['logo_img']}
        menus={Data['menus']}
        toggleSidebar={toggleSidebar}
        changeName={changeName}
      />
      <div>
        <div className="group relative">
          <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-40 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
            <button onClick={()=>toggleModalChange("menu-change-modal")} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
          <Headers
            logo_img={Data['logo_img']}
            menus={Data['menus']}
            toggleDark={toggleDark}
            toggleSidebar={toggleSidebar}
          />
        </div>
      </div>

      <HeroDev name={Data['name']} hero_img={Data['hero_img']} toggleModalChange={toggleModalChange}/>

      <div>
        <div className="group relative">
        <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden bg-teal-50a0 w-screen h-full z-10 group-hover:absolute group-hover:inline-block -top-40">
            <div className="flex flex-col justify-center items-center h-full">
            <button onClick={()=>toggleModalChange("bio-change-modal")} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <Card
        short_profession={Data['short_profession']}
        intro={Data['intro']}
        profession={Data['profession']}
        phone={Data['phone']}
        location={Data['location']}
        about_img={Data['about_img']}
        cv_link={Data['cv_link']}
      />
        </div>
      </div>
      <div>
        <div className="group relative">
          <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange('brand-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>

          <Brands brand_logo={Data['brand_logo']} />
        </div>
      </div>
      <div>
        <div className="group relative">

          <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange('projects-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <Projects projects={Data['projects']} />
        </div>
      </div>
      <div>
        <div className="group relative">
        <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange('skill-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <Skills moto={Data['moto']} skills={Data['skills']} />
        </div>
      </div>
      <div>
        <div className="group relative">
        <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange('feedback-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <Feedbacks moto={Data['moto']} feedbacks={Data['feedbacks']} />
        </div>
      </div>
      <div>
        <div className="relative group">
        <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange('blogs-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <Blogs blogs={Data['blogs']} moto={Data['moto']} />
        </div>
      </div>
      <ContactUS logo_img={Data['logo_img']} phone={Data['phone']} />
      <div>
        <div className="group relative">
        <div className="bg-opacity-50 backdrop-blur-lg absolute md:hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>toggleModalChange("footer-change-modal")} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <FooterMenu
        footer_services={Data['footer_services']}
        footer_projects={Data['footer_projects']}
      />
        </div>
      </div>
      <Footer />
      <ChangeModal toggleModalChange={toggleModalChange} Data={Data} changeData={changeData}/>
    </div>
  );
};

export default App;
