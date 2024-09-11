import MenuChange from './ModelBox/MenuChange';
import BioChange from './ModelBox/BioChange';
import SkillChange from './ModelBox/SkillChange';
import FooterChange from './ModelBox/FooterChange';
import BlogsChange from './ModelBox/BlogsChange';
import FeedbackChange from './ModelBox/FeedbackChange';
import BrandChange from './ModelBox/BrandChange';
import ProjectsChange from './ModelBox/ProjectsChange';
import HeroChange from './ModelBox/HeroChange';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const changeModal=(props)=>{
    const changeMenu = (updatedMenus) => {
        props.changeData({ ...props.Data, menus: updatedMenus });
        toast.success("Menu successfully updated");
    };
    
    const changeBio=(updatedBio)=>{
        props.changeData({...props.Data, ...updatedBio });
        toast.success("Bio successfully updated");
    }

    const changeMoto=(updatedMoto)=>{
        props.changeData({...props.Data, moto:updatedMoto });
        toast.success("Moto successfully updated");
    }
    
    const changeSkill=(updatedSkill)=>{
        props.changeData({...props.Data,skills:updatedSkill });
        toast.success("Skills successfully updated");
    }
    
    const changeFooterSections=(updatedFooterServices,updatedFooterProjects)=>{
        props.changeData({...props.Data,footer_services:updatedFooterServices,footer_projects:updatedFooterProjects});
        toast.success("Footer services and projects successfully updated");
    }
    
    const changeBlog=(updatedBlog)=>{
        props.changeData({...props.Data,blogs:updatedBlog });
        toast.success("Blogs successfully updated");
    }
    
    const changeFeedback=(updatedFeedback)=>{
        props.changeData({...props.Data,feedbacks:updatedFeedback });
        toast.success("Feedbacks successfully updated");
    }
    
    const changeBrand=(updatedBrand)=>{
        props.changeData({...props.Data, brand_logo:updatedBrand});
        toast.success("Brands successfully updated");
      }
      
      const changeProject=(updatedProject)=>{
           props.changeData({...props.Data,projects:updatedProject });
           toast.success("Projects successfully updated");
    }
    
        const changeName=(updatedName)=>{
            props.changeData(data=>{
                data['name'] = updatedName;
                    return data;
                });
                toast.success("Name successfully updated");
            }
            
            const changeHeroImage=(updatedHeroImage)=>{
                props.changeData({...props.Data,hero_img:updatedHeroImage });
                toast.success("Hero image successfully updated");
            }
            
            return(
                <>
        <MenuChange toggleModalChange={props.toggleModalChange} menus={props.Data["menus"]} changeMenu={changeMenu}/>
        <BioChange toggleModalChange={props.toggleModalChange} changeBio={changeBio} bio={{name:props.Data["name"], profession:props.Data["profession"], short_profession:props.Data["short_profession"], intro:props.Data["intro"], phone:props.Data["phone"], location:props.Data["location"], cv_link:props.Data["cv_link"], about_img:props.Data["about_img"]}}/>
        <SkillChange toggleModalChange={props.toggleModalChange} changeSkill={changeSkill} skills={props.Data["skills"]} moto={props.Data['moto']} changeMoto={changeMoto}/>
        <FooterChange toggleModalChange={props.toggleModalChange} changeFooterSections={changeFooterSections} footer_services={props.Data["footer_services"]} footer_projects={props.Data["footer_projects"]} />
        <BlogsChange toggleModalChange={props.toggleModalChange} blogs={props.Data["blogs"]} changeBlog={changeBlog} />
        <FeedbackChange toggleModalChange={props.toggleModalChange} feedbacks={props.Data["feedbacks"]} changeFeedback={changeFeedback} />
        <BrandChange toggleModalChange={props.toggleModalChange} brand_logo={props.Data["brand_logo"]} changeBrand={changeBrand}/>
        <ProjectsChange toggleModalChange={props.toggleModalChange} projects={props.Data["projects"]} changeProject={changeProject}/>
        <HeroChange toggleModalChange={props.toggleModalChange} name={props.Data["name"]} hero_img={props.Data["hero_img"]} changeName={changeName} changeHeroImage={changeHeroImage}/>
        <ToastContainer
        theme='colored'
        />
        </>
    );
}

export default changeModal;