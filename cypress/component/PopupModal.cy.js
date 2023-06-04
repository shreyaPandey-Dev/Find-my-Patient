import { mount } from "cypress/react18";
import { PopupModal } from "../../src/components/PopupModal";
import { PatientContext } from "../../src/context/PatientContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

describe("PopupModal", () => {
  it("Displays the delete confirmation modal and handles delete action", () => {
    // Mock the patient data and necessary functions
    const patients = [
      // mock patient data
    ];
    const setPatients = cy.stub().as("setPatients");
    const toggleModal = cy.stub().as("toggleModal");
    const setModal = cy.stub().as("setModal");
    const patientId = 1;

    // Mock the useNavigate function
    const mockNavigate = cy.stub();
    mount(
      <PatientContext.Provider value={{ patients, setPatients }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PopupModal
                  toggleModal={toggleModal}
                  modal={true}
                  patientId={patientId}
                  setModal={setModal}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </PatientContext.Provider>,
      {
        // Provide the mockNavigate function to the component
        preMountHook: () => {
          useNavigate.mockReturnValue(mockNavigate);
        },
      }
    );

    // Assertions for the modal content
    cy.contains("Deletion Confirmation").should("be.visible");
    cy.contains(
      `Are you sure you want to delete the patient with ID ${patientId}?`
    ).should("be.visible");

    // Simulate a click on the "Delete" button
    cy.get("button")
      .contains("Delete")
      .click()
      .then(() => {
        // Assertions for the function calls and state updates
        expect(setPatients).to.be.calledOnce;
        expect(setPatients).to.be.calledWith(/* expected updated patients */);
        expect(setModal).to.be.calledOnce;
        expect(setModal).to.be.calledWith(false);

        // Assertions for the navigation
        expect(mockNavigate).to.be.calledOnce;
        expect(mockNavigate).to.be.calledWith("/");
      });

    // Simulate a click on the "Cancel" button
    cy.get("button")
      .contains("Cancel")
      .click()
      .then(() => {
        // Assertions for the function calls and state updates
        expect(toggleModal).to.be.calledOnce;
      });
  });
});
