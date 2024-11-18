import Candlestick from "./CandlestickGraph";
import { useEffect, useState } from "react";

const App = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [isResponsive, setIsResponsive] = useState<number>(0);

  const resizeHandler = () => {
    setWidth(
      window.visualViewport
        ? (window.visualViewport?.width as number)
        : window.innerWidth,
    );
    setHeight(
      window.visualViewport
        ? (window.visualViewport?.height as number)
        : window.innerHeight,
    );
    setIsResponsive(
      window.visualViewport
        ? window.visualViewport?.width < 970
          ? 1
          : 2
        : window.innerWidth < 970
          ? 1
          : 2,
    );
  };
  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  return (
    <>
    
      <Candlestick
        width={width}
        height={isResponsive === 1 ? height - 70 : height - 80}
      />
    </>
  );
};

export default App;