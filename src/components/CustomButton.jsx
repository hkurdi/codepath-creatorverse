import { useEffect } from "react";


export const CustomButton = ({
  className,
  onClick,
  text,
  textClassName,
  type,
  id,
}) => {
  useEffect(() => {
    const customButton = document.getElementById(id);

    if (customButton) {
      const customClassList = customButton.classList;
      if (
        customClassList?.contains("button-delete") ||
        textClassName?.includes("button-delete") ||
        customClassList?.contains("button-submit") ||
        textClassName?.includes("button-submit") ||
        customClassList?.contains("button-edit") ||
        textClassName?.includes("button-edit")
      ) {
        customClassList.remove("button-custom");
      }
    }
  }, []);

  return (
    <button
      className={className ? `button-custom ${className}` : "button-custom"}
      onClick={onClick}
      type={type}
      id={id}
    >
      <span className={textClassName ? textClassName : ""}> {text} </span>
    </button>
  );
};
