import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FriendTimelineContext = createContext();
const TiemlineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const addEvent = (event) => {
    return setTimeline((prev) => [event, ...prev]);
  };
  return (
    <FriendTimelineContext.Provider value={{ timeline, addEvent }}>
      {children}
    </FriendTimelineContext.Provider>
  );
};
export default TiemlineProvider;
