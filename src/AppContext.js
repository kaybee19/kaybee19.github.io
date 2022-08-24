import * as React from "react";

const AppContext = React.createContext();

export function useApp() {
  return React.useContext(AppContext);
}

const AppProvider = ({ children }) => {
  const [height, setheight] = React.useState(0);
  // Get height
  React.useEffect(() => {
    window.addEventListener("scroll", (x) =>
      setheight(x.target.scrollingElement.scrollTop)
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
