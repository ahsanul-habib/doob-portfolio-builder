import React from 'react';
import data from './components/doob.jsx';
import Sidebar from './components/Sidebar.jsx';
import Headers from './components/Headers.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import Brands from './components/Brands.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Feedbacks from './components/Feedbacks.jsx';
import Blogs from './components/Blogs.jsx';
import ContactUS from './components/ContactUS.jsx';
import FooterMenu from './components/FooterMenu.jsx';
import Footer from './components/Footer.jsx';

const {name, moto, intro, short_profession, profession, phone, location, hero_img, logo_img, about_img, brand_logo, menus, projects, skills, feedbacks, blogs, cv_link, footer_services, footer_projects}=data;


const App=()=>{
    const toggleDark=()=>{
      if(document.body.classList.contains("dark")){
          document.body.classList.remove("dark");
          document.getElementById("isDark").innerText="light_mode";
      }else{
          document.body.classList.add("dark");
          document.getElementById("isDark").innerText="dark_mode";
      }
  }

  const toggleSidebar=()=>{
      document.getElementById("sidebar").classList.toggle("hidden");
      document.getElementById("sidebarOverlay").classList.toggle("hidden");
  }

  return (<div id="main_wrapper" className="bg-white w-screen flex flex-col font-inter dark:bg-black">
    <Sidebar logo_img={logo_img} menus={menus} toggleSidebar={toggleSidebar}/>
    <Headers logo_img={data['logo_img']} menus={menus} toggleDark={toggleDark} toggleSidebar={toggleSidebar}/>
    <Hero name={name} hero_img={hero_img}/>
    <Card short_profession={short_profession} intro={intro} profession={profession} phone={phone} location={location} about_img={about_img} cv_link={cv_link}/>
    <Brands brand_logo={brand_logo}/>
    <Projects projects={projects}/>
    <Skills moto={moto} skills={skills}/>
    <Feedbacks moto={moto} feedbacks={feedbacks}/>
    <Blogs blogs={blogs} moto={moto}/>
    <ContactUS logo_img={logo_img} phone={phone}/>
    <FooterMenu footer_services={footer_services} footer_projects={footer_projects}/>
    <Footer/>
  </div>
  )};

export default App;



