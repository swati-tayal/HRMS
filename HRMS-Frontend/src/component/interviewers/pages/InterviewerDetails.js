import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import { Button } from "../../../shared/components/FormElements/Button";
import "./InterviewDetails.css";

const InterviewerDetails = () => {
  const [loadedInterviewer, setLoadedInterviewer] = useState({});
  const interviewerId = useParams().interviewerId;

  useEffect(() => {
    const requestInterviewer = async () => {
      let response;
      try {
        response = await fetch(
          `http://localhost:5000/api/interviewers/interviewer/${interviewerId}`
        );
        const data = await response.json();
        setLoadedInterviewer(data.interviewer);
      } catch (err) {
        console.log(err);
      }
    };
    requestInterviewer();
  }, [interviewerId]);

  return (
    <div className="center">
      <Card>
        <div className="interviewer_info">
          <h1 className="title">{loadedInterviewer.name}</h1>
          <p className="description">{loadedInterviewer.description}</p>
          <div className="inteviews">
            <h3>
                Number of Interviews:
            </h3>
            <Button>
                Schedule an Interview
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InterviewerDetails;
