import * as React from "react";

const AppContext = React.createContext();

export function useApp() {
  return React.useContext(AppContext);
}

const AppProvider = ({ children }) => {
  const [height, setHeight] = React.useState(0);
  const [globalColor, setColor] = React.useState(0);
  // Get height
  React.useEffect(() => {
    window.addEventListener("scroll", (x) =>
      setHeight(x.target.scrollingElement.scrollTop)
    );
  }, [height]);

  const [width, setwidth] = React.useState(window.innerWidth);
  // Set Width
  React.useEffect(() => {
    window.addEventListener("resize", (x) => setwidth(x.target.innerWidth));
  }, [width]);

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        globalColor,
        setColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
