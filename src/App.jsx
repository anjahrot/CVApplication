import {useState} from 'react'
import './App.css'
import Resume from './components/resume.jsx'
import InputSection from './components/inputSection.jsx'
import PersonalForm from './components/personalForm.jsx'
import EducationSection from './components/educationSection.jsx'
import AddEducation from './components/addEducation.jsx'

function App() {
  const [showResume, setShowResume] = useState(
    {
     personal: false, 
     education: false,
     work: false
    } 
  )
  const [personalInfo, setPersonalInfo] = useState(
      {
        fullname: '', 
        birthday: '',
        email: '',
        phone: ''
      }
    )
  
  const handleSubmit = (section) => { 
    setShowResume((prevData) => ({...prevData, [section]: true}));
  }
    
  const handleChangePersonal = (e) => {
    const {name, value} = e.target;
    setPersonalInfo((prevData) => ({...prevData, [name]: value}))
  }

  const [educationInfo, setEducationInfo] = useState(
    [
      {
        id: crypto.randomUUID(),
        school: 'University of Sydney',
        degree: 'Bachelor of Science',
        startDate: '2012-12-21',
        endDate: '2015-01-22'
      },
    ]
  );
 
 function handleChange(education){
  setEducationInfo(
    educationInfo.map((ed) => {
      if (ed.id === education.id){
        return education
      } else {
        return ed;
    }
  })
  );  
} 

  function handleAddEducation (education) {
    setEducationInfo([
      ...educationInfo, 
    {
      id: education.id,
      school: education.school,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate
    },
  ]);
}

 function handleDeleteEducation (educationId) {
  setEducationInfo(educationInfo.filter((ed) => ed.id !== educationId));
 }


  return (
    <>
      <div className="container">
        <Resume 
          show = {{...showResume}}
          data = {{...personalInfo}}
        />
        <div className="inputContainer">
          <h2>Generate your CV here: </h2>
          <InputSection title='Personal Details'>
            <PersonalForm  
              data = {{...personalInfo}} 
              onChange= {handleChangePersonal}
              onSubmit={() => {
                handleSubmit('personal')}}
            />
          </InputSection>
          
          <InputSection title='Education'>
            <AddEducation 
                onAddEducation={handleAddEducation}
                />
            <EducationSection
              data = {[...educationInfo]}
              onChange = {handleChange}
              onSubmit = {(e) => {
                handleSubmit(e, 'education')}}
              onDelete = {handleDeleteEducation}
            />
          </InputSection>

          <InputSection title='Practical Experience'>

          </InputSection>
          
        </div>
      </div>
    </>
  )
}

export default App
