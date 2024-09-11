const Skills = (props) => {
  const skills = props.skills;
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-9/12 flex flex-col md:flex-row border-y-2">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <span className="p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            See My All Skill.
          </span>
          <span className="font-extrabold my-8 text-5xl dark:text-white">
            My Working Skill
          </span>
          <span className="w-64 text-gray-600 dark:text-gray-300 moto">
            {props.moto}
          </span>
        </div>
        <div id="skillList" className="w-full md:w-1/2">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="w-full my-9">
                <span className="text-xl text-gray-500 dark:text-white">
                  {skill["title"]}
                </span>
                <div className="bg-gray-300 h-1 w-full rounded-full overflow-hidden mt-3">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: skill["percentage"] }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
