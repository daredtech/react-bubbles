import React, { useState } from "react";
// import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth ";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    console.log('saving editing:', colorToEdit)
 
    axiosWithAuth()
    .put('http://localhost:5000/api/colors/:id', colorToEdit)
    .then(request => {
        console.log('posted: ', request.data);
        console.log('new list of colors: ', colors);

        updateColors(colors.map(c => (
          c.id === colorToEdit.id ? colorToEdit : c
        )));
      }
        )

    .catch(error => {
        console.log('error ', error);
    })
  };

  const deleteColor = color => {
    console.log('delete was triggered with the following color: ', color);
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/{color.id}`)
 
    .then(response => {
      console.log('delete response: ', response);
      updateColors(colors.filter(c => (c.id != color.id ) ));
    })
    .catch(error => {
      console.log('unable to delete: ', error)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>



      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;

