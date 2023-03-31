import React from "react";

import InterviewItem from "./InterviewItem";
import Card from "../../../shared/components/UIElements/Card";
import "./InterviewsList.css";

const InterviewsList = (props) => {

    if (props.items.length === 0) {
        return (
          <div className="center">
            <Card>
              <h2>No Interviews found.</h2>
            </Card>
          </div>
        );
      }
    
      return (
        <ul className="interviews-list">
          {props.items.map((user) => (
            <InterviewItem
              key={user.id}
              id={user.id}
              title={user.title}
              interviewer={user.interviewer}
              candidate={user.candidate}
              interviewDate={user.interviewDate}
            />
          ))}
        </ul>
      );
}

export default InterviewsList;