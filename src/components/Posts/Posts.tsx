import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { AppState } from "../../store/AppState";
import "./styles.css";

const Post = () => {
  const cards = useSelector((state: AppState) => state.tile);
  return (
    <ul className="cards">
      {(cards || []).map((card) => (
        <Card key={card.id} tile={card} />
      ))}
    </ul>
  );
};

export default Post;
