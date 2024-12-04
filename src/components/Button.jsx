import React from "react";

const Button = () => {
  const buttonStyles = {
    size: {
      sm: "h-[32px] w-[95px]",
      md: "h-[40px] w-[95px]",
      lg: "h-[48px] w-[95px]",
    },
    backgroundColors: {
      primary: "bg-primary",
      press: "bg-press",
      hover: "hover:bg-hover duration-150",
      disable: "border border-[#C9CFDA]",
    },
    textColors: {
      textWhite: "text-white",
      textGray: "text-[#C9CFDA]",
    },
    font: "text-[16px]",
    rounded: "rounded-md",
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        className={`${buttonStyles.rounded} ${buttonStyles.font} ${buttonStyles.size.sm} ${buttonStyles.textColors.textWhite} ${buttonStyles.backgroundColors.primary}`}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
