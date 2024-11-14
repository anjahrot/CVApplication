import {useState} from 'react';
import EducationForm from './educationForm';

const initialState = {
    id: crypto.randomUUID(),
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
   };  


export default function AddEducation({onAddEducation}) {
    const [education, setEducation] = useState(initialState)

    return (
        <>
         <h3>Add new education</h3>
         <EducationForm 
            data = {{...education}}
            onChange = {(e) => setEducation((prevData) => ({...prevData, [e.target.name]: e.target.value}))}
            onSubmit={() => {
                setEducation(initialState);
                onAddEducation(education);
            }} />
        </>
    );
}