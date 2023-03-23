import React from "react";

import InterviewerItem from "./InterviewerItem";
import Card from "../../../shared/components/UIElements/Card";
import "./InterviewersList.css";

const InterviewersList = (props) => {

    if (props.items.length === 0) {
        return (
          <div className="center">
            <Card>
              <h2>No Interviewers found.</h2>
            </Card>
          </div>
        );
      }
    
      return (
        <ul className="interviewrs-list">
          {props.items.map((user) => (
            <InterviewerItem
              key={user.id}
              id={user.id}
              name={user.name}
              interviewCount={user.interviews.length}
            />
          ))}
        </ul>
      );
}

export default InterviewersList;