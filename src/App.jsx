import {useState} from 'react'
import './App.css'
import Resume from './components/resume.jsx'
import InputSection from './components/inputSection.jsx'
import PersonalForm from './components/personalForm.jsx'
import EducationSection from './components/educationSection.jsx'
import AddEducation from './components/addEducation.jsx'
import AddWork from './components/addWork.jsx'
import WorkSection from './components/workSection.jsx'

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

  const [workInfo, setWorkInfo] = useState(
    [
      {
        id: crypto.randomUUID(),
        company: 'ABB',
        position: 'R&D Engineer',
        startDate: '2016-01-29',
        endDate: '2019-03-20',
        description: 'Testing, labwork, reporting'
      }
    ]
  )
 
 function handleChange (education) {
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

  function handleChangeWork (work) {
    setWorkInfo(
      workInfo.map((w) => {
        if(w.id === work.id) {
          return work;
        } else {
          return w;
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

  function handleAddWork (work) {
    setWorkInfo([
      ...workInfo,
    {
      id: crypto.randomUUID(),
      company: work.company,
      position: work.position,
      startDate: work.startDate,
      endDate: work.endDate,
      description: work.description 
    }
    ])
  }

  function handleDeleteEducation (educationId) {
      setEducationInfo(educationInfo.filter((ed) => ed.id !== educationId));
  }

  function handleDeleteWork (workId) {
    setWorkInfo(workInfo.filter((w) => w.id !== workId));
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
            <AddWork 
                onAddWork={handleAddWork}
                />
            <WorkSection
              data = {[...workInfo]}
              onChange = {handleChangeWork}
              onSubmit = {(e) => {
                handleSubmit(e, 'work')}}
              onDelete = {handleDeleteWork}
            />   
          </InputSection>
          
        </div>
      </div>
    </>
  )
}

export default App
