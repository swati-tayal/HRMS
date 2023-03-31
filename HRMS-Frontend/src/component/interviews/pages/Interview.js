import React from "react";

import InterviewsList from "../components/InterviewsList";

const DUMMY_INTERVIEWS = [
    {
        id: "t1",
        title: "Web Interview",
        interviewerId: "i1",
        interviewer: "Ram",
        candidate: "Test",
        candidateId: "c1",
        interviewDate: "31/March/2023",
    }
]

const Interview = () => {
    return <InterviewsList items={DUMMY_INTERVIEWS} />
}

export default Interview;