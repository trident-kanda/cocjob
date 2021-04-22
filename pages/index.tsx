import Head from "next/head";
import { useCallback, useState } from "react";
import Container from "../component/Container";
import Header from "../component/Header";
import JobList from "../component/JobList";
import Skill from "../component/Skill";
export default function Home() {
  const [skill, setSkill] = useState<string[]>([]);
  const [job, setJob] = useState("未設定");
  const [load, setload] = useState(false);
  const skillSet = useCallback(
    (inputSkill: string[]): void => {
      setSkill(inputSkill);
    },
    [setSkill]
  );

  const loadSet = useCallback(
    (inputState: boolean) => {
      setload(inputState);
    },
    [setload]
  );

  const jobSet = useCallback(
    (inputJob: string): void => {
      setJob(inputJob);
    },
    [setJob]
  );

  return (
    <div>
      <Head>
        <title>CoCJob</title>
      </Head>
      <Header />
      <Container>
        <JobList skillSet={skillSet} jobSet={jobSet} loadSet={loadSet} />
        <Skill skill={skill} job={job} load={load} />
      </Container>
    </div>
  );
}
