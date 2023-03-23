import React from "react";

import CandidateList from "../components/CandidateList"

const DUMMY_CANDIDATES = [
    {
        id:"c1",
        name: "Praveen Dhakade",
        email: "praveen@test.com",
    },
    {
        id: "c2",
        name: "Praveen Dhakade",
        email: "praveen@test.com",
    },
]
const Candidates = () => {
 return <CandidateList items={DUMMY_CANDIDATES} />
}

export default Candidates;