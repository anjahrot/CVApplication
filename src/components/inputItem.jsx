export default function InputItem({label, name, type="text", placeholder=""}){
    return (
        <>
          <label>
            {label}
            <input name={name} type={type} placeholder={placeholder}></input> 
          </label>
        </>
    )
}