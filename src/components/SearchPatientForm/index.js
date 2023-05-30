import { searchPatient } from "Helper/searchPatient";
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



    watch((data, { name }) => {

        setTimeout(() => {
            const searchedPatients = searchPatient(data, { name }, patients);
            setPatients(searchedPatients);
        }, 5000);
    })
    // console.log(data, name, type))}	 // watch input value by passing the name of it




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
            <input type="submit" />
        </form>
    );
};

