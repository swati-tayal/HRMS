import React from "react";

import InterviewersList from "../components/InterviewersList";

const DUMMY_INTERVIEWERS = [
    {
        id:"i1",
        name: "Praveen Dhakade",
        email: "praveen@test.com",
        interviews: [{
            name: "Test",
            email: "test@test.com"
        }]
    },
    {
        id: "i2",
        name: "Praveen Dhakade",
        email: "praveen@test.com",
        interviews: [{
            name: "Test",
            email: "test@test.com"
        }]
    },
]

const Interviewers = () => {
    return (
        <InterviewersList items={DUMMY_INTERVIEWERS} />
    )
}

export default Interviewers;