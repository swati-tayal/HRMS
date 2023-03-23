import React from "react";
import {Link} from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import "./CandidateItem.css";

const CandidateItem = (props) => {
  console.log('aa', props);
  return (
    <li className="candidate-item">
      <Card className="candidate-item_content">
        <Link to={`candidate/${props.id}`}>
          <div className="candidate-item__info">
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CandidateItem;