

// searches for the field in array
export const searchPatient = (data, { name }, patients) => {

    console.log("helper searchQuery=", data);
    console.log("key searchQuery=", data[name]);

    const searchParam = data[name];
    console.log("helper searchQuery searchParam=", searchParam, name);

    const finder = function (element) {
        console.log("finder element=", element[name] === searchParam);
        return element[name] === searchParam
    }


    const result = patients?.filter(finder);
    console.log("result", result);


    return result.length > 0 ? result : patients;
}






