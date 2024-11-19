import {useState} from 'react';


export default function AddNewEntry({initialState, Form, onAdd, show}) {
    const [newElement, setNewElement] = useState(initialState)
    if(show){
    return (
        <>
         <h3>New Entry</h3>
         <Form 
            data = {{...newElement}}
            onChange = {(e) => setNewElement((prevData) => ({...prevData, [e.target.name]: e.target.value}))}
            onSubmit={() => {
                setNewElement(initialState);
                onAdd(newElement);
            }} />
        </>
    );
  }
}