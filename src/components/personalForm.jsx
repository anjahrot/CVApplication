import '../styles/form.css'

export default function PersonalForm({data, onChange, onSubmit}){

    const {fullname, birthday, email, phone} = data; 


    return (
        <>
          <form onSubmit={(e)=> {
            e.preventDefault();
            onSubmit()
            }
          }>
            <ul>
             <li> 
              <label htmlFor="fullname"> Full name </label>           
              <input 
                id="fullname"
                name = "fullname"
                value = {fullname}
                type = "text"
                placeholder='John Doe'
                onChange = {onChange}
              />           
            </li> 
            <li>
             <label htmlFor="birthday">Date of Birth</label>
              <input
                id="birthday"
                name="birthday"
                value = {birthday}
                type='date'
                placeholder='23-05-1995'
                onChange={onChange}
              />
            </li>
            <li>
             <label htmlFor="email">Email adress</label>
              <input
                id="email"
                name="email"
                value = {email}
                type='email'
                placeholder='jd@not-real.com'
                onChange={onChange}
              />
            </li>
            <li>
            <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                value={phone}
                type='text'
                placeholder='555-5555'
                onChange={onChange}
              /> 
             </li>
             <button>Submit</button> 
            </ul>
          </form>
        </>
    )
}