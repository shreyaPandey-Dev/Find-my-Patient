// filter by age, filter by gender
export const filterPatients = (searchQuery) => {

    const result = patients.names.filter(function (e) { return e.name == searchQuery })
    console.log(result);


    return "filterResults";
}