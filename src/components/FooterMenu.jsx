const FooterMenu = (props) => {
  const footer_services = props.footer_services;
  const footer_projects = props.footer_projects;
  return (
    <div className="w-10/12 mx-auto border-b-2 py-7">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <span className="text-xl pt-10 dark:text-white">Services</span>
          <div className="flex flex-col" id="service-list">
            {footer_services.map((service, index) => (
              <a
                key={index}
                className="py-1 text-md text-gray-500 hover:text-gray-200"
                href={service["href"]}
              >
                {service["title"]}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl pt-10 dark:text-white">Projects</span>
          <div className="flex flex-col" id="project-list">
            {footer_projects.map((project, index) => (
              <a
                key={index}
                className="py-1 text-md text-gray-500 hover:text-gray-200"
                href={project["href"]}
              >
                {project["title"]}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center dark:text-white mt-10">
          <h1>Stay With Us.</h1>
          <span className="my-5">
            2000+ Our clients are subscribe Around the World
          </span>
          <div>
            <i
              className="fab fa-facebook fa-3x px-2"
              id="facebook"
              aria-hidden="true"
            ></i>
            <i
              className="fab fa-twitter fa-3x px-2"
              id="twitter"
              aria-hidden="true"
            ></i>
            <i
              className="fab fa-linkedin-in fa-3x px-2"
              id="linkedin-in"
              aria-hidden="true"
            ></i>
            <i
              className="fab fa-instagram fa-3x px-2"
              id="instagram"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
