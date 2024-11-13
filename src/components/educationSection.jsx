import {useState} from 'react';
import EducationForm from './educationForm';

export default function EducationSection ({data, onChange, onSubmit, update, defaultData}) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAdd = () => {
        console.log(data);
        
    }

    return (
        <div className='eduSection'>
          {typeof activeIndex === 'number' ? (
            <>
              <EducationForm 
                data = {data[activeIndex]}
                onChange = {onChange}
                onSubmit = {onSubmit} 
              />
            </>
          ) : (
            <>
             <h1>This is a test</h1>
             <button onClick={() => handleAdd()}>Add New</button>    
            </>
          )
        }
        </div>
    )
}