import React, { FC } from "react";

type CustomButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

const CustomButton: FC<CustomButtonProps> = ({
  text,
  type = "submit",
  color = "bg-ambar-light-input",
  onClick,
}) => {
  const hoverColor = color + "/80";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2 px-4 w-full my-5 h-[50px] rounded-md text-white font-medium transition-all hover:bg-ambar-light-input/80 ${color}`}
    >
      <p className="font-black text-lg">{text}</p>
    </button>
  );
};

export default CustomButton;
