import React from "react";

import InterviewersList from "../components/InterviewersList";
import { Button } from "../../../shared/components/FormElements/Button";

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
        <>
        <div className="center">
            <Button to="/interviewers/add">Add Interviewer</Button>
        </div>
        <InterviewersList items={DUMMY_INTERVIEWERS} />
        </>
    )
}

export default Interviewers;