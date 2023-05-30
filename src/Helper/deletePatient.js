
// This removes a patient record based on given id 
export const deletePatient = (patientId, patients) => {
    console.log("patientId, patients in deletePatient", patientId, patients);
    const updatedPatients = patients.filter(patient => patient.patient_id !== patientId);
    return updatedPatients;
}