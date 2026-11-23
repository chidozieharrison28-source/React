

function StudentCard() {
    return (
        <div className="px-10">
            <h3>Student Name</h3>
            <p>Student email</p>
            <p>Course Enrolled: Computer Science</p>

            <label htmlFor="firstname" className="px-4 py-5 text-2xl text-red-500">Firstname: 
               

            </label>
             <input type="text" placeholder="Enter firstname"/>
            
        </div>
    )
}

export default StudentCard;