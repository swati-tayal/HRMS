import React, { useState, useEffect } from "react";

import InterviewersList from "../components/InterviewersList";
import { Button } from "../../../shared/components/FormElements/Button";

const Interviewers = () => {
  const [loadedInterviewers, setLoadedInterviewers] = useState([]);

  useEffect(() => {
    const requestInterviewers = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/interviewers`);
        const data = await res.json();
        setLoadedInterviewers(data.interviewers);
      } catch (err) {}
    };
    requestInterviewers()
  }, []);

  return (
    <>
      <div className="center">
        <Button to="/interviewers/add">Add Interviewer</Button>
      </div>
      <InterviewersList items={loadedInterviewers} />
    </>
  );
};

export default Interviewers;

// const DUMMY_INTERVIEWERS = [
//     {
//       id: "i1",
//       name: "Praveen Dhakade",
//       email: "praveen@test.com",
//       description: "Manager",
//       interviews: [
//         {
//           name: "Test",
//           email: "test@test.com",
//         },
//       ],
//     },
//     {
//       id: "i2",
//       name: "Praveen Dhakade",
//       email: "praveen@test.com",
//       description: "Technical Lead",
//       interviews: [
//         {
//           name: "Test",
//           email: "test@test.com",
//         },
//       ],
//     },
//   ];