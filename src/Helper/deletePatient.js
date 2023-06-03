// This removes a patient record based on given id
export const deletePatient = (patientId, patients) => {
  sessionStorage.setItem("deleteRowId", patientId);
};
