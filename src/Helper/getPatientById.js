

// returns patient data by id
export const getPatientById = (patientId, patients) => {
    const patientRecord = patients?.find(patient => patient.patient_id === parseInt(patientId));
    return patientRecord || null;
}






