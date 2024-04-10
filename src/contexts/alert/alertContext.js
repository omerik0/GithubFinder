import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";

export const alertContext = createContext();
const initialState = null;

function AlertProvider({ children }) {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  function setAlertMessage(msg, type) {
    dispatch({ type: "Set_Alert", payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: "Remove_Alert" });
    }, 3000);
  }
  return (
    <alertContext.Provider
      value={{
        alert: state,
        setAlertMessage,
      }}
    >
      {children}
    </alertContext.Provider>
  );
}

export default AlertProvider;
