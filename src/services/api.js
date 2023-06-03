export const fetchPatients = (setPatients, setLoading) => {
  try {
    // fetching mock data from json
    fetch("mock_data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // check for searched data item
        const searchedPatientsJson = sessionStorage.getItem("searchedPatients");
        const deletedPatientId = sessionStorage.getItem("deleteRowId");
        if (searchedPatientsJson) {
          const searchedPatients = JSON.parse(searchedPatientsJson);
          setPatients(searchedPatients);
          setLoading(false);
        } else if (deletedPatientId) {
          //check for deleted
          const delRow = data.filter(
            (patient) => patient.patient_id !== parseInt(deletedPatientId)
          );
          setPatients(delRow);
          setLoading(false);
        } else {
          setPatients(data);
        }
      });
  } catch (error) {}
};
