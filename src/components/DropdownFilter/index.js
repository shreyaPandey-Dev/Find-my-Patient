import { filterPatients } from "Helper/filterPatients";
import { PatientContext } from "context/PatientContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";


// search name, ID or email
// filter two filters: a sex filter (male and female) and an age filter
// An alphabetical sorting option
//  the search data should persist,


/**
 * DropdownFilter
 * Dropdown to filter patient
 */
export const DropdownFilter = ({ setSubmittedFormData }) => {
    const { patients, setPatients } = useContext(PatientContext);
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = submittedFilterData => {
        console.log("submittedData", submittedFilterData);
        setSubmittedFormData(submittedFilterData);
    }

    useEffect(() => {
        const selectedGender = watch("gender"); // Get the selected gender value
        const selectedAgeGroup = watch("ageGroup"); // Get the selected age group value

        console.log("selectedGender", selectedGender);
        console.log("selectedAgeGroup", selectedAgeGroup);

        const filteredGenderResult = filterPatients(selectedGender, patients);
        const filteredAgeGroup = filterPatients(selectedAgeGroup, patients);

    }, [watch]);


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
            </select>

            <select {...register("ageGroup")}>
                <option value="18-30">“18 - 30”</option>
                <option value="31-45"> “31 - 45”</option>
                <option value="45"> “ {">"} 45”</option>
            </select>
        </form>
    );
};

