
// filter by age, filter by gender
export const filterPatients = (searchQuery, patients) => {


    const filteredResults = patients.filter((patient) => {
        return patient.gender.toLowerCase() === searchQuery.toLowerCase();
    });

    console.log(filteredResults);

    return filteredResults;
}