
import './App.css'
import Resume from './components/resume.jsx'
import Section from './components/section.jsx'

function App() {
  

  return (
    <>
      <div className="container">
        <Resume 
        />
        <div className="inputContainer">
          <h2>Generate your CV here: </h2>
          <Section 
            title='Personal Details' 
            items={[
              'Full Name', 
              'Email', 
              'Phone Number'
            ]}
          />
          <Section 
            title='Education'
            items={[
              'School',
              'From date', 
              'To date'
            ]}
          />
          <Section 
            title='Practical Experience'
            items={[
              'Company',
              'From date',
              'To date'
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
