export default function WorkForm ({data, onChange, onSubmit}) {
    
    return (
        <>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            }
          }>
            <label>
              Company Name
              <input 
                name = "company"
                value = {data.company}
                type = "text"
                placeholder='Walmart'
                onChange = {onChange}
              />
            </label>
            <label>
              Position
              <input 
                name="position"
                value = {data.position}
                type='text'
                placeholder='Desk Manager'
                onChange={onChange}
              />
            </label>
            <label>
              Start date
              <input
                name="startDate"
                value = {data.startDate}
                type='date'
                placeholder='2012-12-21'
                onChange={onChange}
              />
            </label>
            <label>
              End date
              <input
                name="endDate"
                value={data.endDate}
                type='date'
                placeholder='2014-12-22'
                onChange={onChange}
              /> 
            </label>
            <label>
              Job Description
              <input
                name="description"
                value={data.description}
                type='text'
                placeholder='Answer questions from staff and customers'
                onChange={onChange}
              /> 
            </label>
            <button>Submit</button>
          </form>
        </>
    )
}