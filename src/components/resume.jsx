

export default function Resume({show, data}){
    
    return (
        <div className="resume">
          <h1>CV 2024</h1>
          <h2>Personal Information</h2>
          {show.personal &&
            <div className="personalInfo">
              <h3>Full Name: {data.fullname}</h3>
              <h3>Email: {data.email} </h3>
            </div>
          }
          <h2>Education</h2>
          <h2>Work Experience</h2>
        </div>
    );
}