import { useState, useEffect } from "react";

const useIsMouseDown = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleGlobalMouseDown = () => setIsMouseDown(true);
    const handleGlobalMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousedown", handleGlobalMouseDown);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleGlobalMouseDown);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return isMouseDown;
};

export default useIsMouseDown;
