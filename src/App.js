import React from "react";
import { KeyboardEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toDoSlice } from './reduxStore';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';


// ادیت هم اضافه کنم
//ست کنم بعد اضافه کردن آیتم اینپوت خالی بشه
// ست کنم با اینتر آیتم اضافه بشه

function App() {

  const [text, setText] = React.useState("");
  const { addItemTolist, toggleComplete, deleteItemfromList } = toDoSlice.actions

  const displayList = useSelector((state) => state.toDolistReducer)
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const onAddClick = () => {
    !!text && dispatch(addItemTolist(text))
    setText('')
  }

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteItemfromList(id));
  };

  const handleKeyPress = (e) => {
    e.code === "Enter" && onAddClick();
    
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={text} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="what to do" />
        <button onClick={() => onAddClick()}>Add To Do</button>
        <ul>
          to do list:
          {
            displayList.map(item => (
              <li key={item.id} >
                <span style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}>{item.text}</span>{' '}
                <button onClick={() => handleToggleComplete(item.id)}>
                  {" "}
                  {item.completed ? <CheckBoxOutlinedIcon sx={{ fontSize: 15 }} /> : <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: 15 }} />}{" "}
                </button>{" "}
                <button onClick={() => handleDeleteTodo(item.id)}> <DeleteOutlined sx={{ fontSize: 15 }} /> </button>{" "}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
