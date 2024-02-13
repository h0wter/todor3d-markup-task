import { createContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { LineUps } from "./components/line-ups/line-ups.tsx";
import { TogglePage } from "./components/toggle-page/toggle-page.tsx";
import { LeaguesList } from "./components/leagues-list/leagues-list.tsx";
import { Calendar } from "./components/calendar/calendar.tsx";
import { EventsList } from "./components/events-list/events-list.tsx";
import { type Page } from "./types";

const DESKTOP_WIDTH = 768;

type DeviceContext = {
  isMobile: boolean;
};

const initialContext = {
  isMobile: false,
};

const DeviceContext = createContext<DeviceContext>(initialContext);

const checkIsMobile = (width: number): boolean => width <= DESKTOP_WIDTH;

const pageMap: Record<Page, React.ReactNode> = {
  field: <LineUps />,
  list: <LeaguesList />,
  calendar: <Calendar />,
  events: <EventsList />,
};

function App() {
  const [isMobile, setIsMobile] = useState(checkIsMobile(window.innerWidth));
  const [activePage, setActivePage] = useState<Page>("events");

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
      <TogglePage activePage={activePage} onPageChange={handlePageChange} />
      {pageMap[activePage]}
    </DeviceContext.Provider>
  );
}

export { App, DeviceContext };
