import {useState} from 'react';
import WorkForm from './workForm';

const initialState = {
    id: crypto.randomUUID(),
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '' 
   };  


export default function AddWork({onAddWork}) {
    const [workPlace, setWorkPlace] = useState(initialState)

    return (
        <>
         <h3>Add new work experience</h3>
         <WorkForm 
            data = {{...workPlace}}
            onChange = {(e) => setWorkPlace((prevData) => ({...prevData, [e.target.name]: e.target.value}))}
            onSubmit={() => {
                setWorkPlace(initialState);
                onAddWork(workPlace);
            }} />
        </>
    );
}