import { useDeviceContext } from "../../hooks/context/use-device-context.hook.ts";
import { DesktopLayout } from "./components/desktop-layout/desktop-layout.tsx";
import { MobileLayout } from "./components/mobile-layout/mobile-layout.tsx";
import styles from "./styles.module.scss";

const LineUps = () => {
  const { isMobile } = useDeviceContext();

  return isMobile ? (
    <MobileLayout styles={styles} />
  ) : (
    <DesktopLayout styles={styles} />
  );
};

export { LineUps };
