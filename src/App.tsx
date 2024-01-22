import { createContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { LineUps } from "./components/line-ups/line-ups.tsx";
import { TogglePage } from "./components/toggle-page/toggle-page.tsx";
import { LeaguesList } from "./components/leagues-list/leagues-list.tsx";
import { Page } from "./types";

const DESKTOP_WIDTH = 1440;

type DeviceContext = {
  isMobile: boolean;
};

const initialContext = {
  isMobile: false,
};

const DeviceContext = createContext<DeviceContext>(initialContext);

const checkIsMobile = (width: number): boolean => width <= DESKTOP_WIDTH;

function App() {
  const [isMobile, setIsMobile] = useState(checkIsMobile(window.innerWidth));
  const [activePage, setActivePage] = useState<Page>("field");

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

  const handlePageChange = (page: Page) => () => setActivePage(page);

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
      }}
    >
      <TogglePage onPageChange={handlePageChange} />
      {activePage === "field" ? <LineUps /> : <LeaguesList />}
    </DeviceContext.Provider>
  );
}

export { App, DeviceContext };
