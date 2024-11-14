import {useState} from 'react';
import WorkForm from './workForm';

export default function WorkSection ({data, onChange, onSubmit, onDelete}) {

  return (
    <>
    <h3>Edit existing information</h3>
      <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
        {data.map((workPlace) => (
          <li key={workPlace.id}>
            <Work workPlace={workPlace} onChange={onChange} onSubmit={onSubmit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  )
}

function Work({workPlace, onChange, onSubmit, onDelete}){
  const [isEditing, setIsEditing] = useState(false);

  let workContent;
  if(isEditing) {
    workContent = (
      <>
        <WorkForm 
            data = {workPlace}
            onChange = {(e) => {
              onChange({...workPlace, [e.target.name]:e.target.value})}}
            onSubmit= {() => {
              setIsEditing(false);
              onSubmit();
            }
          }
        />
      </>
    );
  } else {
    workContent = (
      <>
        {workPlace.company} - {workPlace.position}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      {workContent}
      <button onClick={()=>onDelete(workPlace.id)}>Delete</button>
    </>  
  );
}