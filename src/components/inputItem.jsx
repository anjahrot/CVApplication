export default function InputItem({label, type, placeholder}){
    return (
        <>
          <label>{label}</label>
          <input type={type} placeholder={placeholder}></input>
        </>
    )
}