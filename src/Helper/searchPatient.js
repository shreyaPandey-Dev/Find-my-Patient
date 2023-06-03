// searches for the field in array
export const searchPatient = (data, { name }, patients) => {
  const searchParam = data[name];
  const finder = function (element) {
    const elementValue = element[name]?.toLowerCase().trim();
    return elementValue?.includes(searchParam);
  };
  const result = patients?.filter(finder);
  return result.length > 0 ? result : patients;
};
