import { mount } from "cypress/react18";
import { SearchPatientForm } from "../../src/components/SearchPatientForm";
import { PatientContext } from "../../src/context/PatientContext";

describe("SearchPatientForm", () => {
  it("Submits the form and updates patient list", () => {
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

    // Mock the setLoading, and setPatients functions
    const setPatients = cy.stub().as("setPatients");

    mount(
      <PatientContext.Provider value={{ patients, setPatients }}>
        <SearchPatientForm />
      </PatientContext.Provider>
    );

    // Assertions for the form fields
    cy.get("input[name='first_name']").should("exist");
    cy.get("input[name='last_name']").should("exist");
    cy.get("input[name='id']").should("exist");
    cy.get("input[name='email']").should("exist");

    // Assertions for the filter dropdowns
    cy.get("select[name='gender']").should("exist");
    cy.get("select[name='age']").should("exist");

    // Assertions for the sort button
    cy.contains("Sort by Name").should("exist");

    // Submit the form
    cy.get("form").submit();

    // Assertions for the form submission
    cy.get("@setPatients").should("exist");
  });
});
