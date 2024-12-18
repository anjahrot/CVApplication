import '../styles/resume.css'

export default function Resume({show, dataPersonal, dataEducation, dataWork}){
    let personalInfo;
    let eduInfo;
    let workInfo;
    if(show.personal) {
      personalInfo = (
        <div className='personalData'>
          <div>{dataPersonal.fullname}</div>
          <div>{dataPersonal.birthday}</div>
          <div className='contactinfo'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
            <div>{dataPersonal.email}</div>
          </div>
          <div className='contactinfo'> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" /></svg>
            <div>{dataPersonal.phone}</div>
          </div> 
        </div>
      )
    }  
    if(show.education) {
      eduInfo = (
        <>
          <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {dataEducation.map((item) => (
              <li key={item.id}>
                <ListItem
                    start={item.startDate}
                    end={item.endDate}
                    title={item.school}
                    titleSec={item.degree}
                />
              </li>
            ))}
          </ul>
        </>
      )
    }
    if(show.work) {
      workInfo = (
        <>
          <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {dataWork.map((item) => (
              <li key={item.id}>
                <ListItem 
                  start={item.startDate}
                  end={item.endDate}
                  title={item.company}
                  titleSec ={item.position}
                />
                <div className='description'>
                  <Description description={item.description}/>
                </div>
              </li>
            ))}
          </ul>
        </>
      )
    }
    return (
        <div className="resume">
          <header>
            <h1>Curriculum Vitae</h1>
            {personalInfo}  
          </header>
          <div className='main'>
            <h2>Education</h2>
              {eduInfo}
            <h2>Work Experience</h2>
              {workInfo}
          </div>
        </div>
    );
};

function ListItem ({start, end, title, titleSec}) {
  return (
    start + ' - ' + end + ' ' + title + ', ' + titleSec 
  )
}


function Description ({description}) {
  return (
    'Job description: ' + description
  )
}