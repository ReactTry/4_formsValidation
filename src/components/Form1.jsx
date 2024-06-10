import React, { useState } from "react";

const Form1 = () => {
  let error = {
    firstname: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
    skill: "",
  };
  const [validstatus, setValidstatus] = useState({ error });

  let validationStatus = true;
  const [fields, setFields] = useState({
    skill: [],
    firstname: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
  });


  function validateFields() {
    let errorObj = {};

    if (fields.skill.length === 0) {
      errorObj.skill = "Select atleast one skill";
      validationStatus = false;
    }
    if (fields.firstname === "") {
      errorObj.firstname = "Name should be entered";
      validationStatus = false;
    }
    if (fields.email === "") {
      errorObj.email = "Email should be entered";
      validationStatus = false;
    }

    if (fields.gender === "") {
      errorObj.gender = "Gender not selected";
      validationStatus = false;
    }

    if (fields.country === "") {
      errorObj.country = "Couuntry Not selected";
      validationStatus = false;
    }

    if (fields.dob === "") {
      errorObj.dob = "Dob should entered";
      validationStatus = false;
    }

    setValidstatus({ ...errorObj });
  }

  const formSubmit = (event) => {
    setValidstatus({ error });
    event.preventDefault();

    validateFields();
    validationStatus && alert("Submitted Successfully");
  };

  const handleChange = (event) => {
    
    if (event.target.name == "skills") {
      if (event.target.checked) {
        setFields((prev) => ({
          ...prev,
          skill: [...prev.skill, event.target.value],
        }));
      } else {
        setFields((prev) => ({
          ...prev,
          skill: prev.skill.filter((skill) => skill != event.target.value),
        }));
      }
    } else {
      setFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };
  // console.log(fields);
  return (
    <>
      <div>
        <form onSubmit={formSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstname">First Name :</label>
                </td>

                <td>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {!fields.firstname && (
                    <span className="span">{validstatus.firstname}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="">Email :</label>
                </td>
                <td>
                  <input type="email" name="email" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {!fields.email && (
                    <span className="span">{validstatus.email}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="">Gender</label>
                </td>
                <td>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </td>
                <td>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  {!fields.gender && (
                    <span className="span">{validstatus.gender}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Skills :</td>
                <td>
                  <label htmlFor="java">Javascript </label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="java"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="css">Css </label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="css"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="ht">Html </label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="html"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="php">Php </label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="php"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  {!fields.skill.length && (
                    <span className="span">{validstatus.skill}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="dob">DOB : </label>
                </td>

                <td>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {!fields.dob && (
                    <span className="span">{validstatus.dob}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="country">Country : </label>
                </td>
                <td>
                  <select name="country" id="country" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="india">India</option>
                    <option value="pak">Pakistan</option>
                    <option value="bangla">Bangladesh</option>
                    <option value="nepal">Nepal</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {!fields.country && (
                    <span className="span">{validstatus.country}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button> Submit Form 1</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div></div>
        </form>
      </div>
    </>
  );
};

export default Form1;
