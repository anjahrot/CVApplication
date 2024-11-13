import {useState} from 'react'
import './App.css'
import Resume from './components/resume.jsx'
import InputSection from './components/inputSection.jsx'
import PersonalForm from './components/personalForm.jsx'
import EducationSection from './components/educationSection.jsx'

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
  
  const handleSubmit = (e, section) => { 
    e.preventDefault();
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
        startDate: '21-12-2012',
        endDate: '22-1-2015'
      },
    ]
  );

  //Method for change in input fields of an education
  const handleChange = (e, index) => {
    const prevData = educationInfo;
    const {name, value} = e.target;
    prevData[index] = {...prevData[index], [name]: value };
    
    setEducationInfo(prevData);
  }

  const update = (newState) => {
    setEducationInfo(newState);
  }

  const defaultEducationInput = {
    id: crypto.randomUUID(),
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  };


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
              onSubmit={e => {
                handleSubmit(e, 'personal')}}
            />
          </InputSection>
          
          <InputSection title='Education'>
            <EducationSection
              data = {{...educationInfo}}
              onChange = {handleChange}
              onSubmit = {e => {
                handleSubmit(e, 'education')}}
              update = {update}
              defaultData = {defaultEducationInput}
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
