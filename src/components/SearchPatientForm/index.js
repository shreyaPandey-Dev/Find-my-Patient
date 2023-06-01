import { filterPatients } from "Helper/filterPatients";
import { searchPatient } from "Helper/searchPatient";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


// search name, ID or email
// filter two filters: a sex filter (male and female) and an age filter
// An alphabetical sorting option
//  the search data should persist,


/**
 * SearchPatientForm
 * Search form to search patient
 */
export const SearchPatientForm = ({ patients, setSubmittedFormData, setPatients }) => {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = submittedData => {
        console.log("submittedData", submittedData);
        setSubmittedFormData(submittedData);
    }

    useEffect(() => {
        watch((data, { name }) => {
            setTimeout(() => {
                const searchedPatients = searchPatient(data, { name }, patients);
                setPatients(searchedPatients);
                sessionStorage.setItem("searchedPatients", JSON.stringify(searchedPatients));
                console.log("searchedPatients", searchedPatients)
                console.log("patients", patients)
            }, 5000);
        })
    }, [watch, patients, setPatients]);




    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            First Name : <input
                defaultValue=""
                {...register("first_name")}
            />
            <br />

            Last Name : <input
                defaultValue=""
                {...register("last_name")}
            />
            <br />

            ID:  <input defaultValue="" {...register("id")} /><br />

            Email id: <input defaultValue="" {...register("email")} /><br />

            <div>
                Filter results:
                <select {...register("gender")} onChange={filterPatients}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
            </div>
            {/* <input type="submit" />
            <input type="reset" />
            */}
        </form>
    );
};

