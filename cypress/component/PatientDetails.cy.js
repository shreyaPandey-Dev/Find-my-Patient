import { mount } from "cypress/react18";
import { PatientDetails } from "../../src/pages/PatientDetails";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

describe("PatientDetails", () => {
  it("Renders the Patient component with correct props", () => {
    // Mock the patient ID parameter
    const patientId = "123";

    // Stub the useParams hook to return the mock patient ID
    const mockUseParams = () => ({ patientId });
    mount(
      <BrowserRouter>
        <Routes>
          <Route
            path="/Patient/:patientId"
            element={<PatientDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>,
      {
        // Provide the mockUseParams hook to the component
        preMountHook: () => {
          useParams.mockImplementation(mockUseParams);
        },
      }
    );

    // Assertions for the rendered Patient component
    cy.get("Patient")
      .should("have.length", 1)
      .should("have.prop", "patientId", patientId)
      .should("have.prop", "toggleModal")
      .should("be.a", "function")
      .should("have.prop", "modal", false)
      .should("have.prop", "setModal")
      .should("be.a", "function");
  });
});
