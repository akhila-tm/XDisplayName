import { useState } from "react";

function DisplayName() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submitVal, setSubmitVal] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!firstName.trim() || !lastName.trim()) {
        return;
      }
  
      setSubmitVal(true);
    };
  
    return (
      <>
        <h1 className="text-xl font-bold mb-4">Full Name Display</h1>
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block">First Name:</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setSubmitVal(false);
              }}
              className=""
            />
          </div>
          <div className="mb-4">
            <label className="block">Last Name:</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setSubmitVal(false);
              }}
              className=""
            />
          </div>
          <div>
            <button
              type="submit"
              className=""
            >
              Submit
            </button>
          </div>
        </form>
        <div className="">
          {firstName && lastName && submitVal && (
            <p className="text-lg font-semibold">Full Name: {firstName} {lastName}</p>
          )}
        </div>
      </>
    );
  }
  

export default DisplayName;
