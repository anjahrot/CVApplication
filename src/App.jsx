
import './App.css'
import Resume from './components/resume.jsx'
import Section from './components/section.jsx'
import InputItem from './components/inputItem.jsx'

function App() {
  
  return (
    <>
      <div className="container">
        <Resume 
        />
        <div className="inputContainer">
          <h2>Generate your CV here: </h2>
          <Section title='Personal Details'>
            <InputItem 
              label="Full name"
              name = "full-name"
              placeholder='John Doe'
            />
          </Section>
          
          <Section title='Education'>
            <InputItem
              label='School name'    
              name='school'
              placeholder='University of Indiana'        
            />
          </Section>

          <Section title='Practical Experience'>


          </Section>
          
        </div>
      </div>
    </>
  )
}

export default App
