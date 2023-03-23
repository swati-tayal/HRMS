import React from "react";

import CandidateItem from "./CandidateItem";
import Card from "../../shared/components/UIElements/Card";
import "./CandidateList.css";

const CandidateList = (props) => {
    if (props.items.length === 0) {
        return (
          <div className="center">
            <Card>
              <h2>No Candidates found.</h2>
            </Card>
          </div>
        );
      }
    
      return (
        <ul className="candidates-list">
          {props.items.map((user) => (
            <CandidateItem
              key={user.id}
              id={user.id}
              name={user.name}
            />
          ))}
        </ul>
      );
}

export default CandidateList;