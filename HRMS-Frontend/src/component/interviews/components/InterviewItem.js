import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import "./InterviewItem.css";

const InterviewerItem = (props) => {
  return (
    <li className="interview-item">
      <Card className="interview-item_content">
        <Link to={`interview/${props.id}`}>
          <div className="interview-item__info">
            <h2>{props.title}</h2>
            <h3> Interviewer: {props.interviewer} </h3>
            <h3> Candidate: {props.candidate} </h3>
            <h4> Interview Date: { props.interviewDate}</h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default InterviewerItem;
