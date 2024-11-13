export default function PersonalForm({data, onChange, onSubmit}){

    const {fullname, birthday, email, phone} = data; 


    return (
        <>
          <form onSubmit={onSubmit}>
            <label>
              Full name
              <input 
                name = "fullname"
                value = {fullname}
                type = "text"
                placeholder='John Doe'
                onChange = {onChange}
              />
            </label>
            <label>
              Date of Birth
              <input 
                name="birthday"
                value = {birthday}
                type='date'
                placeholder='23-05-1995'
                onChange={onChange}
              />
            </label>
            <label>
              Email adress
              <input
                name="email"
                value = {email}
                type='email'
                placeholder='jd@not-real.com'
                onChange={onChange}
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                value={phone}
                type='text'
                placeholder='555-5555'
                onChange={onChange}
              /> 
            </label>
            <button>Submit</button> 
          </form>
        </>
    )
}