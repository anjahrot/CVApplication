import {useState} from 'react';

export default function EditSection ({type, data, onChange, onEdit, onSubmit, onDelete, Form}) {
  return (
    <>
    <h3>Edit Entries</h3>
      <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
        {data.map((element) => (
          <li key={element.id}>
            <Element element={element} type={type} onChange={onChange} onEdit={onEdit} onSubmit={onSubmit} onDelete={onDelete} Form = {Form} />
          </li>
        ))}
      </ul>
    </>
  )
}

function Element({element, type, onChange, onEdit, onSubmit, onDelete, Form}){
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit () {
    setIsEditing(true);
    onEdit();
  }

  let content;
  if(isEditing) {
    content = (
      <>
        <Form 
            data = {element}
            onChange = {(e) => {
              onChange({...element, [e.target.name]:e.target.value})}}
            onSubmit= {() => {
              setIsEditing(false);
              onSubmit();
              onEdit();
            }
          }
        />
      </>
    );
  } else {
    let inputElements;
    if(type === 'education') {
      inputElements = element.school + ' - ' + element.degree
    } else {
      inputElements = element.company + ' - ' + element.position
    }
    content = (
      <>
        {inputElements}
        <button className="listButton" onClick={() => handleEdit()}>Edit</button>
      </>
    );
  }
  return (
    <>
      {content}
      <button className="listButton" onClick={()=>onDelete(element.id)}>Delete</button>
    </>  
  );
}

