import React from "react";
import {Link} from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import "./InterviewerItem.css";

const InterviewerItem = (props) => {
  return (
    <li className="interviewer-item">
      <Card className="interviewer-item_content">
        <Link to={`intererviewer/${props.id}`}>
          <div className="interviewer-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.interviewCount} {props.interviewCount === 1 ? "Interview" : "Interviews"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default InterviewerItem;
