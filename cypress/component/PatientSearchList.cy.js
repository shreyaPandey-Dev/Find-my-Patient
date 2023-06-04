import { mount } from "cypress/react18";
import { PatientSearchList } from "../../src/pages/PatientSearchList";
import { PatientContext } from "../../src/context/PatientContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

it("Displays search form and patient list", () => {
  // Mock the patients data
  const patients = [
    {
      patient_id: 1,
      first_name: "First Name",
      last_name: "Last Name",
      email: "patient@example.com",
      age: 25,
      gender: "Male",
      avatar: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
    },
  ];

  mount(
    <PatientContext.Provider value={{ patients, setPatients: () => {} }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PatientSearchList />} />
        </Routes>
      </BrowserRouter>
    </PatientContext.Provider>
  );

  // Assertions for the loader
  cy.contains("Loading...").should("not.exist");

  // Assertions for the search form
  cy.get("input[name='first_name']").should("exist");
  cy.get("button[type='submit']").should("not.exist");

  // Assertions for the patient list
  cy.get("ul").should("exist");
});
