import { mount } from "cypress/react18";
import { PatientList } from "../../src/components/PatientList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("PatientList", () => {
  it("Renders the patient list table and handles click events", () => {
    // Mock the patient data
    const patients = [
      {
        patient_id: 1,
        first_name: "Gloriane",
        last_name: "Skittles",
        email: "gskittles0@google.ca",
        gender: "Male",
        age: 58,
        avatar: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
      },
      {
        patient_id: 2,
        first_name: "Lydon",
        last_name: "Dymock",
        email: "ldymock1@techcrunch.com",
        gender: "Female",
        age: 64,
        avatar: "http://dummyimage.com/221x100.png/ff4444/ffffff",
      },
    ];

    // Mount the component with the mock data
    mount(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PatientList patients={patients} />}></Route>
        </Routes>
      </BrowserRouter>
    );

    console.log(cy.get("table"));
    // Assertions for the patient rows
    cy.contains("table").should("be.visible");
    cy.contains("td", "1").should("be.visible");
    cy.contains("td", "Gloriane").should("exist");
    cy.contains("td", "Skittles").should("exist");

    // Wait for expected number of rows
    cy.get("tbody tr", { timeout: 15000 }).should("have.length", 2);

    // Simulate a click event on a patient row
    cy.get("tbody tr").first().click();

    // Assertions for the navigation
    cy.url().should("include", `/Patient/${patients[0].patient_id}`);
    cy.location("pathname").should("eq", `/Patient/${patients[0].patient_id}`);
    cy.window().its("history").its("state").should("deep.equal", {
      patients: patients,
    });
  });
});
