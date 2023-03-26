import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";

const InterviewerDetails = () => {
    const [loadedInterviewer, setLoadedInterviewer] =  useState({});
    const interviewerId = useParams().interviewerId;

    useEffect(() => {
        const requestInterviewer = async () => {
            let response;
            try {
                response = await fetch(`http://localhost:5000/api/interviewers/interviewer/${interviewerId}`);
                const data = await response.json();
                setLoadedInterviewer(data.interviewer);
            } catch (err) {
                console.log(err)
            }
        };
        requestInterviewer();
    }, [interviewerId]);

    return (
        <div className="center">
        <Card>
            <div>
            <h1>{loadedInterviewer.name}</h1>
            <p>{loadedInterviewer.description}</p>
            </div>
        </Card>
        </div>
    )
}

export default InterviewerDetails;