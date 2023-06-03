export const filterPatientsGender = (patients, searchQuery) => {
  sessionStorage.removeItem("genderFilter");

  const filteredResults = patients.filter((patient) => {
    return patient?.gender?.toLowerCase() === searchQuery?.toLowerCase();
  });
  return filteredResults;
};
