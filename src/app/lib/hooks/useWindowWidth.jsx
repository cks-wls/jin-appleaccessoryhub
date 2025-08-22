import { useState, useEffect } from "react";
//  브라우저 너비의 값을 리턴해주는 커스텀 훅
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return windowWidth;
}

export default useWindowWidth;
