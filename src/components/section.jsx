export default function Section({title, children}){
    return(
        <>
         <h2>{title}</h2>
         <form>
            {children}
            <button type='submit'>Submit</button>
         </form>
        </>
    );
}