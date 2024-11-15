import { useState } from "react";

export default function InputSection({title, children}){
    const [show, setShow] = useState(false);  //Lift state up, to allow only one at a time
    let content;
    if(show) {
        content = (
           <>
            {children}
           </>
        )
    } else {
        content = (
            <button onClick={()=>setShow(true)}>Edit</button> 
        )
    }
    return(
        <div className="formSection">
         <h2>{title}</h2>    
         {content}      
        </div>
    );
}
