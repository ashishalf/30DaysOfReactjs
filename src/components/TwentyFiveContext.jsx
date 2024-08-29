// Language Transale
import { createContext, useCallback, useContext, useState } from "react";

const LocalizationContext = createContext();

export const useLocal = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({ children }) {
  const [local, setLocal] = useState("en");

  const localizedString = {
    en: {
      greeting: "Hello",
      welcome: "Welcome to my app",
    },
    es: {
      greeting: "Hola",
      welcome: "mi.........",
    },
  };

  const translate = (key) => {
    return localizedString[local][key];
  };

  return (
    <LocalizationContext.Provider value={{ setLocal, local, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
}
