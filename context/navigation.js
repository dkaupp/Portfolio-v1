import { createContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [navigationValue, setNavigationValue] = useState(null);
  const handleNavigation = (value) => {
    return !navigationValue ? setNavigationValue(value) : "";
  };

  return (
    <NavigationContext.Provider value={{ navigationValue, handleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
