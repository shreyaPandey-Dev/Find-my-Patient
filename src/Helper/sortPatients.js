//sort patients alphabetically
export const sortPatients = (patients, setPatients) => {
  const sortedResults = [...patients].sort((a, b) => {
    const nameA = a.first_name.toLowerCase();
    const nameB = b.first_name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  setPatients(sortedResults);
  return sortedResults;
};
