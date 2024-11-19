import '../styles/form.css'

export default function EducationForm ({data, onChange, onSubmit}) {
    
    return (
        <>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            }
          }>
            <ul>
              <li>
              <label htmlFor="school">School Name</label> 
              <input 
                id="school"
                name = "school"
                value = {data.school}
                type = "text"
                placeholder='University of Sydney'
                onChange = {onChange}
              />
             </li>
             <li>
              <label htmlFor="degree">Degree/Program</label>
              <input 
                id="degree"
                name="degree"
                value = {data.degree}
                type='text'
                placeholder='Bachelor of Science'
                onChange={onChange}
              />
            </li>
            <li>
             <label htmlFor="startDate">Start date</label>
             <input
                id="startDate"
                name="startDate"
                value = {data.startDate}
                type='date'
                placeholder='2012-12-21'
                onChange={onChange}
              />
            </li>
            <li>
              <label htmlFor="endDate">End date</label>
              <input
                id="endDate"
                name="endDate"
                value={data.endDate}
                type='date'
                placeholder='2014-12-22'
                onChange={onChange}
              /> 
            </li>
            <button>Submit</button>
            </ul>
          </form>
        </>
    )
}