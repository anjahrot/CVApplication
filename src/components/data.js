const initialStateEd = {
    id: crypto.randomUUID(),
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
   };  

const initialStateWork = {
    id: crypto.randomUUID(),
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '' 
   }; 

const initialStates = [initialStateEd, initialStateWork]

export {initialStates}