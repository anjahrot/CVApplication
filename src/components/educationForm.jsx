export default function EducationForm ({data, onChange, onSubmit}) {
    
    console.log(data);
     
    
    return (
        <>
          <form onSubmit={onSubmit}>
            <label>
              School Name
              <input 
                name = "school"
                value = {data.school}
                type = "text"
                placeholder='University of Sydney'
                onChange = {onChange}
              />
            </label>
            <label>
              Degree/Program
              <input 
                name="degree"
                value = {data.degree}
                type='text'
                placeholder='Bachelor of Science'
                onChange={onChange}
              />
            </label>
            <label>
              Start date
              <input
                name="startDate"
                value = {data.startDate}
                type='date'
                placeholder='12-01-2012'
                onChange={onChange}
              />
            </label>
            <label>
              End date
              <input
                name="endDate"
                value={data.endDate}
                type='date'
                placeholder='20-12-2014'
                onChange={onChange}
              /> 
            </label>
            <button>Submit</button>
          </form>
        </>
    )
}