import {useState} from 'react';
import EducationForm from './educationForm';

export default function EducationSection ({data, onChange, onSubmit, onDelete}) {

  return (
    <>
    <h3>Edit existing information</h3>
      <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
        {data.map((education) => (
          <li key={education.id}>
            <Education education={education} onChange={onChange} onSubmit={onSubmit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  )
}

function Education({education, onChange, onSubmit, onDelete}){
  const [isEditing, setIsEditing] = useState(false);

  let educationContent;
  if(isEditing) {
    educationContent = (
      <>
        <EducationForm 
            data = {education}
            onChange = {(e) => {
              onChange({...education, [e.target.name]:e.target.value})}}
            onSubmit= {() => {
              setIsEditing(false);
              onSubmit();
            }
          }
        />
      </>
    );
  } else {
    educationContent = (
      <>
        {education.school} - {education.degree}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      {educationContent}
      <button onClick={()=>onDelete(education.id)}>Delete</button>
    </>  
  );
}