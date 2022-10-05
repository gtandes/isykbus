import React from "react";
import useForm from "react-hook-form";

import "./styles.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <div className="col-sm-12">
        <p>Hi! Let us know how we can help and we’ll respond shortly.</p>
      </div>


      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              name="Name"
              ref={register({ required: true, maxLength: 50 })}
            />
            {errors.Name &&
              errors.Name.type === "required" &&
              errorMessage(required)}
            {errors.Name &&
              errors.Name.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
        
        
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email &&
              errors.Email.type === "required" &&
              errorMessage(required)}
          </div>
        
          <div className="form-group">
            <textarea className="form-control" name="About" ref={register} rows="7"/>
          </div>


          <div
            className="form-group"
            style={{
                width:"100%",
                display: "flex",
                flex:"wrap"}}>
                
            <input
              type="checkbox"
              placeholder="Subscribe to Newsletter"
              name="Subscribe to Newsletter"
              id="customCheck1"
              ref={register}
              style={{
                  marginRight:'1rem'
                }}
            />

            <label
              htmlFor="customCheck1"
              style={{
                textAlign:'left',
                lineHeight:'1.25',
                marginTop:'1vh'}}
              > Sign up to receive email updates, announcements, and more.</label>
          </div>


          <div className="form-group" style={{textAlign:'center'}}>
            <input
                className="btn" type="submit"
                value="SEND"
                style={{
                    padding:"0.75rem 2rem",
                    backgroundColor: "#e2e2e2",
                    fontWeight: "bold",
                    marginTop: '2vh'
                    }}/>
          </div>

          <div
            className="form-group"
            style={{
              textAlign:'center',
              lineHeight:'1.5',
              marginTop:'4vh'}}>
              <p
                style={{fontSize:'.85rem'}}
              >This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
              </p>
          </div>
        </form>
      </div>
    </div>
  );
}