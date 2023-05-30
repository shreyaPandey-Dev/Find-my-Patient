

// returns patient data by id
export const getPatientById = (patientId, patients) => {
    console.log("getPatientById", patientId, patients)
    debugger;
    const patientRecord = patients?.find(patient => patient.patient_id === parseInt(patientId));
    console.log("patientRecord--------getPatientById----------------------------", patientRecord);
    return patientRecord || null;
}






