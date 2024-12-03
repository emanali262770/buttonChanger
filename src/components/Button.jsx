import React, { useEffect, useState } from "react";

const Button = ({ data }) => {
  console.log(data);

  const [changeStyle, setchangeStyle] = useState("");
  useEffect(() => {
    setchangeStyle(data);
  }, [data]);

  return (
    <div className="flex justify-center mt-10">
      <button
        className={`${
          changeStyle == "hover"
            ? "hover:bg-hower  bg-blue-600 duration-300"
            : ""
        }
         ${
           changeStyle == "pressed"
             ? "hover:bg-press   duration-300"
             : "bg-primary"
         }
          ${
            changeStyle == "disable"
              ? "bg-transparent border border-gray-500"
              : "bg-primary"
          }
          ${changeStyle == "default" ? " bg-primary" : ""}
          ${
            changeStyle == "text"
              ? "bg-transparent border-none text-hower text-3xl  "
              : ""
          }

           w-[130px] h-[40px] rounded-lg
           
           `}
      >
        {changeStyle == "text" ? "Button" : ""}
      </button>
    </div>
  );
};

export default Button;
