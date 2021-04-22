import ReactLoading from "react-loading";
type props = {
  skill: string[];
  job: string;
  load: boolean;
};
const Skill = ({ skill, job, load }: props) => {
  return (
    <div className="p-5 bg-white rounded-lg mb-5">
      <div>
        <h2 className="text-4xl inline-block">Skill.</h2>
        <a className="ml-4 text-2xl inline-block">{job}</a>
        {load && (
          <div className="inline-block">
            <ReactLoading type={"spin"} color="gray" height={20} width={20} />
          </div>
        )}
      </div>
      <div className="border-b-2 border-black"></div>
      <a className="text-gray-400">*付きは好きな技能を2つ選択</a>
      <div className="flex flex-wrap ">
        {skill.map((job: string, number: number) => {
          return (
            <div
              key={number}
              className="text-base  p-2  sm:text-lg pb-4 w-1/3 flex justify-center sm:w-1/4 md:w-1/5 "
            >
              <a className="border-b-2 border-black ">{job}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
