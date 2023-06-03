// returns based on filtered age group
export const filterPatientsAge = (patients, selectedAge) => {
  let filteredResults = [];

  switch (selectedAge) {
    case "18-30":
      filteredResults = patients.filter(
        (patient) => patient.age >= 18 && patient.age <= 30
      );
      break;
    case "31-45":
      filteredResults = patients.filter(
        (patient) => patient.age >= 31 && patient.age <= 45
      );
      break;
    case "greaterthan45":
      filteredResults = patients.filter((patient) => patient.age > 45);
      break;
    default:
      filteredResults = patients;
      break;
  }

  return filteredResults;
};
