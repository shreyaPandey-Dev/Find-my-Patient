

// searches for the field in array
export const searchPatient = (data, { name }, patients) => {
    // console.log("patients------------------------------------", patients);

    console.log("helper searchQuery=", data);
    console.log("key searchQuery=", data[name]);

    const searchParam = data[name];
    console.log("helper searchQuery searchParam=", searchParam, name);

    // add argument to the filter function | element
    const finder = function (element) {
        return element[name] === searchParam.trim() //use the argument here.
    }


    const result = patients?.filter(finder);
    console.log(result);


    return result.length > 0 ? result : patients;
}






