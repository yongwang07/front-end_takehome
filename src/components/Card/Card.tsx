import React from "react";
import { Tile } from "../../reducer";
import "./styles.css";

interface Props {
  tile: Tile;
}

const Card: React.FC<Props> = ({ tile }) => {
  const { heading, pass, summary } = tile;
  return (
    <div className="card">
      <h4>{heading}</h4>
      <h4>{pass}</h4>
      <h6>{summary}</h6>
    </div>
  );
};

export default React.memo(Card);
