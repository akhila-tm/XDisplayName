import { useState } from "react";

function DisplayName() {
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [submitVal,setSubmitVal]=useState(false)

   const handleSubmit=(event)=>{
    console.log(firstName,lastName)
    setSubmitVal(true)
    event.preventDefault();
   } 
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <div>
        First Name : <input type="text"required value={firstName} onChange={(e)=>{
            setFirstName(e.target.value)
            setSubmitVal(false)
            }}></input>
      </div>
      <div>
        Last Name : <input type="text" required value={lastName} onChange={(e)=>{
            setLastName(e.target.value)
            setSubmitVal(false)
        }}></input>
      </div>
      <div>
        <button type="submit" >Submit</button>
      </div>
      </form>

      <div>
        {firstName && lastName && submitVal && 
        <p> Full Name : {firstName} {lastName}
            </p>}
      </div>
    </>
  );
}
export default DisplayName;
