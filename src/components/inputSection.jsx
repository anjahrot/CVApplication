export default function InputSection({title, children, show, setShow, setHide}){

    let content;
    if(show) {
        content = (
           <>
            <div className="topForm">
                <h2>{title}</h2>
                <button className='inputBtn' onClick={()=>setHide()}>Hide</button>
            </div>
            {children}
           </>
        )
    } else {
        content = (
            <div className="topForm">
                <h2>{title}</h2>
            <button className='inputBtn' onClick={()=>setShow()}>Edit</button> 
            </div>
        )
    }
    return(
        <div className="formSection">    
         {content}      
        </div>
    );
}
