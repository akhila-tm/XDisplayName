import { useState } from "react";

function DisplayName() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submitVal, setSubmitVal] = useState(false);
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!firstName.trim()) {
        setError("First Name is required.");
        return;
      }
    
      if (!lastName.trim()) {
        setError("Last Name is required.");
        return;
      }
    
      setError("");
      setSubmitVal(true);
    };
  
    return (
      <>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setSubmitVal(false);
              }}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text" required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setSubmitVal(false);
              }}
            />
          </div>
          {/* {error && <p>{error}</p>} */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* <div> */}
          {firstName && lastName && submitVal && (
            <p>Full Name: {firstName} {lastName}</p>
          )}
        {/* </div> */}
      </>
    );
  }
  

export default DisplayName;
