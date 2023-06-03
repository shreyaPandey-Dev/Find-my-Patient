import { createContext, useState, useMemo } from "react";

// Context Provider to make
// patients data avaialble everywhere in code
export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ patients, setPatients }),
    [patients, setPatients]
  );

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  );
};
