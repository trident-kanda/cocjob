import Head from "next/Head";
import { useCallback, useState } from "react";
import Container from "../component/Container";
import Header from "../component/Header";
import JobList from "../component/JobList";
import Skill from "../component/Skill";
export default function Home() {
  const [skill, setSkill] = useState([]);
  const [job, setjob] = useState(["未設定"]);
  return (
    <div>
      <Head>
        <title>COCjob</title>
      </Head>
      <Header />
      <Container>
        <JobList setSkill={setSkill} setjob={setjob} />
        <Skill skill={skill} job={job} />
      </Container>
    </div>
  );
}
