import '../styles/form.css'

export default function WorkForm ({data, onChange, onSubmit}) {
    
    return (
        <>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            }
          }>
            <ul>
             <li>
              <label htmlFor="company">Company Name</label> 
              <input
                id="company" 
                name = "company"
                value = {data.company}
                type = "text"
                placeholder='Walmart'
                onChange = {onChange}
              />
            </li>
            <li>
              <label htmlFor="position">Position</label>   
              <input 
                id="position"
                name="position"
                value = {data.position}
                type='text'
                placeholder='Desk Manager'
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
            <li>
              <label htmlFor="description">Job Description</label> 
              <textarea
                id="description"
                name="description"
                value={data.description}
                type='text'
                placeholder='Answer questions from staff and customers'
                onChange={onChange}
              /> 
            </li>
            <button>Submit</button>
            </ul>
            
          </form>
        </>
    )
}