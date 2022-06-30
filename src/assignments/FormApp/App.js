import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./FormApp.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import NavBar from "../../components/navBar/NavBar";

const FormApp = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    file: "",
    education: "",
    password: ""
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    file: "",
    education: "",
    password: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    // console.log(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      dob: addFormData.dob,
      gender: addFormData.gender,
      file: addFormData.file,
      education: addFormData.education,
      password: addFormData.password
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      dob: editFormData.dob,
      gender: editFormData.gender,
      file: editFormData.file,
      education: editFormData.education,
      password: editFormData.password
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      dob: contact.dob,
      gender: contact.gender,
      file: contact.file,
      education: contact.education,
      password: contact.password
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    
    <div className="app-container">
      <NavBar />
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>File</th>
              <th>Education</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an Email..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="dob"
          required="required"
          placeholder="Enter DOB"
          onChange={handleAddFormChange}
        />
        <input type="file" name="file" onChange={handleAddFormChange} />
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Female
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Male
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Other
        <div>
          <label>Level of Education</label>
          <select name="education" onChange={handleAddFormChange}>
            <option value="Junior schooling">Junior schooling</option>
            <option value="secondary schooling">secondary schooling</option>
            <option value="Higher secondary schooling">
              Higher secondary schooling
            </option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormApp;
