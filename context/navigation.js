import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const router = useRouter();

  const [navigationValue, setNavigationValue] = useState(null);

  useEffect(() => {
    setNavigationValue(router.asPath.substring(2));
  });

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
