import React, { useState } from "react";

const Form2 = () => {
  const [fields, setFields] = useState({
    skill: [],
    firstname: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
  });

  const [currentField, setcurrentField] = useState({
    skill: "",
    firstname: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
  });

  let error = {
    firstname: "Name should be entered",
    email: "Email should be entered",
    gender: "Gender not selected",
    country: "Couuntry Not selected",
    dob: "Dob should entered",
    skill: "Select atleast one skill",
  };

  const [validstatus, setValidstatus] = useState({ ...error });

  let validationStatus = true;
  const checkStatus = () => {
    validationStatus = true;
    Object.keys(fields).forEach((key) => {
      if (fields[key] == "" || fields[key].length === 0) {
        validationStatus = false;
      }
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    checkStatus();
    validationStatus && alert("Submitted Successfully");
  };

  const handleChange = (event) => {
    if (event.target.name == "skill") {
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

    //Set Error message
    if (event.target.value == "") {
      setcurrentField({
        ...currentField,
        [event.target.name]: validstatus[event.target.name],
      });
    }

    if (fields.skill.length === 0) {
      setcurrentField({
        ...currentField,
        [event.target.name]: validstatus[event.target.name],
      });
    }
  };

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
                <td> </td>
                <td>
                  {!fields.firstname && (
                    <span className="span">{currentField.firstname} </span>
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
                    <span className="span">{currentField.email}</span>
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
                    <span className="span">{currentField.gender}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Skills :</td>
                <td>
                  <label htmlFor="java">Javascript </label>
                  <input
                    type="checkbox"
                    name="skill"
                    value="java"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="css">Css </label>
                  <input
                    type="checkbox"
                    name="skill"
                    value="css"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="ht">Html </label>
                  <input
                    type="checkbox"
                    name="skill"
                    value="html"
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <label htmlFor="php">Php </label>
                  <input
                    type="checkbox"
                    name="skill"
                    value="php"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  {fields.skill.length == 0 && (
                    <span className="span">{currentField.skill}</span>
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
                    <span className="span">{currentField.dob}</span>
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
                    <span className="span">{currentField.country}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button> Submit Form 2</button>
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
export default Form2;
