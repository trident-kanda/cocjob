import { getSkill } from "../graphql/query";
import { jobs } from "../option/jobs";
type props = {
  skillSet: (inputSkill: string[]) => void;
  jobSet: (inputJob: string) => void;
};
const JobList = ({ skillSet, jobSet }: props) => {
  const clickJob = async (id: number) => {
    const skill = await getSkill(id);
    jobSet(jobs[id - 1]);
    skillSet(skill);
  };
  return (
    <div className="p-5 bg-white rounded-lg mb-5">
      <h2 className="text-4xl border-b-2 border-black">JobList.</h2>
      <a className="text-gray-400">確認したい職業をクリック</a>
      <div className="flex flex-wrap ">
        {jobs.map((job, number) => {
          return (
            <div
              key={number}
              className="text-base  p-2  sm:text-lg pb-4 w-1/3 flex justify-center sm:w-1/4 md:w-1/5 "
            >
              <a
                className="border-b-2 border-black hover:text-red-500 cursor-pointer"
                onClick={() => {
                  clickJob(number + 1);
                }}
              >
                {job}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobList;
