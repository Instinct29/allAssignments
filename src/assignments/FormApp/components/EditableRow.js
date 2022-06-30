import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an Email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="dob"
          required="required"
          placeholder="Enter DOB"
          value={editFormData.dob}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={handleEditFormChange}
        />{" "}
        Female
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={handleEditFormChange}
        />{" "}
        Male
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={handleEditFormChange}
        />{" "}
        Other
      </td>
      <td>
        <input type="file" name="file" onChange={handleEditFormChange} />
      </td>
      <td>
        <select name="education" onChange={handleEditFormChange}>
          <option value="Junior schooling">Junior schooling</option>
          <option value="secondary schooling">secondary schooling</option>
          <option value="Higher secondary schooling">
            Higher secondary schooling
          </option>
          <option value="College">College</option>
          <option value="University">University</option>
        </select>
      </td>
      <td>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={editFormData.password}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

// <input
// type="email"
// name="email"
// required="required"
// placeholder="Enter an Email..."
// onChange={handleAddFormChange}
// />
// <input
// type="date"
// name="dob"
// required="required"
// placeholder="Enter DOB"
// onChange={handleAddFormChange}
// />
// <input type="file" name="file" onChange={handleAddFormChange} />
// <input
// type="radio"
// value="Female"
// name="gender"
// onChange={handleAddFormChange}
// />{" "}
// Female
// <input
// type="radio"
// value="Male"
// name="gender"
// onChange={handleAddFormChange}
// />{" "}
// Male
// <input
// type="radio"
// value="Other"
// name="gender"
// onChange={handleAddFormChange}
// />{" "}
// Other
// <div>
// <label>Level of Education</label>
// <select name="education" onChange={handleAddFormChange}>
//   <option value="Junior schooling">Junior schooling</option>
//   <option value="secondary schooling">secondary schooling</option>
//   <option value="Higher secondary schooling">
//     Higher secondary schooling
//   </option>
//   <option value="College">College</option>
//   <option value="University">University</option>
// </select>
// </div>
// <input
// id="password"
// type="password"
// name="password"
// placeholder="Enter Your Password"
// onChange={handleAddFormChange}
// />

// value={editFormData.fullName}
//           onChange={handleEditFormChange}
