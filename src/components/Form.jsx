import { useEffect, useState } from "react";

export const Form = () => {
  document.title = 'FoodBox - SignIn'
  const user_details = {
    fname: "",
    lname: "",
    email: "",
    pword: "",
    cnfpword: "",
  };
  const [user, setUser] = useState(user_details);
  const [allError, setAllError] = useState({})

  const handleInput = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
    
  };

  const handleValidation = (values) => {
    const error ={}

  if(values.fname==''){
    error.fname="First name cannot be null"
  }
  else if(values.fname.length>20){
    error.fname="First name cannot be more than 20 letters"
  }
  if(values.lname==''){
    error.lname="Last name cannot be null"
  }
  else if(values.lname.length>20){
    error.lname="Last name cannot be more than 15 letters"
  }
  if(values.email==''){
    error.email="Email cannot be null"
  }
  else if(!values.email.includes('@')){
    error.email="Email not in proper format"
  }
  if(values.pword==''){
    error.pword="Password can't be null"
  }
  else if(values.pword.length<6){
    error.pword ="Password must be greater than 6 characters"
  }
  if(values.cnfpword==''){
    error.cnfpword="Confirm Password can't be null"
  }
  else if(values.cnfpword!=values.pword){
    error.cnfpword = "Both Passwords don't match"
  } 
  return error;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllError(handleValidation(user))
  }

  useEffect(()=>{
    if(Object.keys(allError).length==0){
    }

  },[allError])

  return (
    <>
      <div className="form_container">
        <form action="" onSubmit={handleSubmit}>
          <div className="first_name">
            <div className="sign_up">Sign Up !</div>
            <div className="label">
              <label htmlFor="fname">First Name</label>
            </div>
            <input
              className="input_area"
              name="fname"
              type="text"
              value={user.fname}
              onChange={handleInput}
              placeholder="First Name"
            />
            <div className="error_msg">{allError.fname}</div>
          </div>
          <div className="last_name">
            <div className="label">
              <label htmlFor="lname">Last Name</label>
            </div>
            <input
              className="input_area"
              name="lname"
              type="text"
              value={user.lname}
              onChange={handleInput}
              placeholder="Last Name"
            />
            <div className="error_msg">{allError.lname}</div>
          </div>

          <div className="email">
            <div className="label">
              <label htmlFor="email">Email</label>
            </div>
            <input
              className="input_area"
              name="email"
              type="text"
              onChange={handleInput}
              placeholder="Email ID"
            />
            <div className="error_msg">{allError.email}</div>
          </div>
          <div className="password">
            <div className="label">
              <label htmlFor="pword">Password</label>
            </div>
            <input
              className="input_area"
              name="pword"
              type="password"
              onChange={handleInput}
              placeholder="Password"
            />
            <div className="error_msg">{allError.pword}</div>
          </div>
          <div className="cnf_password">
            <div className="label">
              <label htmlFor="cnfpword">Confim Password</label>
            </div>
            <input
              className="input_area"
              name="cnfpword"
              type="password"
              onChange={handleInput}
              placeholder="Confirm Password"
            />
            <div className="error_msg">{allError.cnfpword}</div>
          </div>
          <div>
            <button className="submit_btn_form">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

