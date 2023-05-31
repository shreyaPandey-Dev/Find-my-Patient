
// searches for the field in array
export const searchPatient = (data, { name }, patients) => {

    const searchParam = data[name];
    // if user clears field after typing, return 300 records
    if (searchParam === "") return patients; //returns old patient data
    const finder = function (element) {
        const elementValue = element[name]?.toLowerCase();
        return elementValue.includes(searchParam);
    }
    const result = patients?.filter(finder);
    return result.length > 0 ? result : patients;
}






