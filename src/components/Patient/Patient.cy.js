import React from "react";
import { mount } from "cypress/react18";
import { MemoryRouter } from "react-router-dom";
import { Patient } from "../Patient";

describe("Patient Profile", () => {
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
        stylesheets: "path/to/your/styles.css",
        // Provide any additional dependencies or context required by the component
        // e.g., patient context or router context
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
      {
        stylesheets: "path/to/your/styles.css",
        // Provide any additional dependencies or context required by the component
        // e.g., patient context or router context
      }
    );

    cy.get(".badge").contains("Go Back").click();

    // Add assertions and test the behavior after clicking the Go Back button
  });
});
