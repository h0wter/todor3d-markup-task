import { useContext } from "react";
import { DeviceContext } from "../../App.tsx";

const useDeviceContext = () => useContext(DeviceContext);

export { useDeviceContext };
