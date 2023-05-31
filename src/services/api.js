export const fetchPatients = async (setPatients) => {
    const searchedPatientsStr = sessionStorage.getItem("searchedPatients");
    if (searchedPatientsStr) {
        const searchedPatients = JSON.parse(searchedPatientsStr);
        setPatients(searchedPatients);
    } else {
        await fetchPatients(setPatients);
    }

    try {
        const response = await fetch("mock_data.json");
        if (response.status === 200) {
            const patients = await response.json();
            setPatients(patients);
            return patients;
        } else if (response.status === 304) {
            // Handle the case when the resource is not modified
            console.log("Resource not modified");
            return null;
        } else {
            // Handle other response status codes if needed
            throw new Error("Failed to fetch patients. Status code: " + response.status);
        }
    } catch (error) {
        console.error("Error fetching patients:", error);
        // setModal(true);
        throw error; // Rethrow the error to be caught by the caller if necessary
    } finally {
        // setLoading(false);
    }
};