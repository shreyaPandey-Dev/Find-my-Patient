// sort by alphabetical order
export const sortPatients = (searchQuery) => {

    const result = patients.names.filter(function (e) { return e.name == searchQuery })
    console.log(result);


    return "sortedResults";
}