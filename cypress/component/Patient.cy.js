import React, { useState } from "react";
import { mount } from "cypress/react18";
import { MemoryRouter } from "cypress/react18";
import { Patient } from "../../src/components/Patient";
import { PatientProvider } from "context/PatientContext";

// wrapper for provider
const PatientWrapper = ({ children }) => {
  const [patients, setPatients] = useState(false);
  return (
    <PatientProvider
      value={{
        patients,
        setPatients,
      }}
    >
      {children}
    </PatientProvider>
  );
};

describe("Patient Profile", () => {
  it("Mounts Patients ", () => {
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

    const toggleModal = () => {};
    const setModal = () => {};

    mount(
      <PatientWrapper>
        <Patient
          patients={patients}
          toggleModal={toggleModal}
          setModal={setModal}
        />
      </PatientWrapper>,
      {}
    );
  });
  it("Displays patient information and handles delete button click", () => {
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

    const toggleModal = () => {};
    const setModal = () => {};

    mount(
      <MemoryRouter initialEntries={["/patient/1"]}>
        <Patient toggleModal={toggleModal} modal={false} setModal={setModal} />
      </MemoryRouter>,
      {
        dependencies: {
          PatientContext: {
            patients: patients, // Provide the patients object in the context
            setPatients: () => {},
          },
        },
      }
    );

    cy.get("h5").should("contain", "First Name Last Name");
    cy.get("h6").should("contain", "patient@example.com");
    cy.get("CardText").should("contain", "ID: 1");
    cy.get("CardText").should("contain", "Age: 25, Male");

    cy.get("button").contains("Delete this record").click();

    // Add assertions and test the behavior after clicking the delete button
  });

  it("Handles Go Back button click", () => {
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

    const toggleModal = () => {};
    const setModal = () => {};

    mount(
      <MemoryRouter initialEntries={["/patient/1"]}>
        <Patient toggleModal={toggleModal} modal={false} setModal={setModal} />
      </MemoryRouter>,
      {}
    );

    cy.get(".badge").contains("Go Back").click();
  });
});
