import { createContext, useEffect, useState } from "react";
import { LineUps } from "./components/line-ups/line-ups.tsx";
import debounce from "lodash.debounce";

const MOBILE_BREAKPOINT = 375;

type DeviceContext = {
  isMobile: boolean;
};

const initialContext = {
  isMobile: false,
};

const DeviceContext = createContext<DeviceContext>(initialContext);

const checkIsMobile = (width: number): boolean => width <= MOBILE_BREAKPOINT;

function App() {
  const [isMobile, setIsMobile] = useState(checkIsMobile(window.innerWidth));

  useEffect(() => {
    const handleResize = debounce(
      () => setIsMobile(checkIsMobile(window.innerWidth)),
      300
    );

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
      }}
    >
      <LineUps />
    </DeviceContext.Provider>
  );
}

export { App, DeviceContext };
