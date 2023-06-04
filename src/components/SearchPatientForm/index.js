import { filterPatientsGender } from "Helper/filterPatientsGender";
import { filterPatientsAge } from "Helper/filterPatientsAge";
import { searchPatient } from "Helper/searchPatient";
import { PatientContext } from "context/PatientContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sortPatients } from "Helper/sortPatients";

/**
 * SearchPatientForm
 * Search form to search patient
 * handles logic for searching, filter and sorting
 */
export const SearchPatientForm = () => {
  const { register, handleSubmit, watch } = useForm({
    mode: "onTouched",
  });
  const { patients, setPatients } = useContext(PatientContext);

  const onSubmit = (submittedData) => {
    console.log(submittedData);
  };

  useEffect(() => {
    watch((data, { name }) => {
      const selectedGender = watch("gender");
      const selectedAge = watch("age");

      if (name === "gender") {
        if (selectedGender) {
          const genderFilter = filterPatientsGender(patients, selectedGender);
          sessionStorage.setItem("genderFilter", JSON.stringify(genderFilter));
          setPatients(genderFilter);
        }
      } else if (name === "age") {
        if (selectedAge) {
          const ageFilter = filterPatientsAge(patients, selectedAge);
          sessionStorage.setItem("ageFilter", JSON.stringify(ageFilter));
          setPatients(ageFilter);
        }
      } else {
        const timer = setTimeout(() => {
          const searchedPatients = searchPatient(data, { name }, patients);
          if (searchedPatients) {
            setPatients(searchedPatients);
            sessionStorage.setItem(
              "searchedPatients",
              JSON.stringify(searchedPatients)
            );
          }
        }, 5000);

        return () => {
          //clear timeout when the component unmounts
          clearTimeout(timer);
        };
      }
    });
  }, [
    patients,
    setPatients,
    searchPatient,
    filterPatientsGender,
    filterPatientsAge,
  ]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)}>
      First Name : <input defaultValue="" {...register("first_name")} />
      <br />
      Last Name : <input defaultValue="" {...register("last_name")} />
      <br />
      ID: <input defaultValue="" {...register("id")} />
      <br />
      Email id: <input defaultValue="" {...register("email")} />
      <br />
      <div>
        Filter results: By Gender:{" "}
        <select {...register("gender")} defaultValue="">
          <option value="">Choose</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        By Age:{" "}
        <select {...register("age")} defaultValue="">
          <option value="">Choose</option>
          <option value="18-30">18-30</option>
          <option value="31-45">31-45</option>
          <option value="greaterthan45">{">"}45</option>
        </select>
        <button onClick={() => sortPatients(patients, setPatients)}>
          Sort by Name
        </button>
      </div>
    </form>
  );
};
