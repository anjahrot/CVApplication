import InputItem from './inputItem.jsx'

export default function Section({title, items}){
    return(
        <>
         <h2>{title}</h2>
         <form>
            {items.map(item => {
                return <InputItem key={item} label={item} type='text' placeholder='John Doe'/>  
            })}
         </form>
        </>
    );
}