import React from "react";
import "./styles.css";

type Props = {
  width: number;
  height: number;
  onClick: () => void;
};

const RefreshBtn = ({ width, height, onClick }: Props) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      onClick={onClick}
    >
      <path
        d="M408.67,273a146,146,0,0,1,1,17.17c0,84.83-68.83,153.5-153.67,153.5a153.55,153.55,0,0,1-17-306.15v67.31L375.5,102.31,239,0V68.83C124.33,77.66,34.17,173.31,34.17,290.17,34.17,412.67,133.5,512,256,512s221.83-99.33,221.83-221.83c0-5.83-.17-11.5-.5-17.17Zm0,0"
        fill="#fff"
      />
    </svg>
  );
};

export default React.memo(RefreshBtn);
