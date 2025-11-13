import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteCompletedTodos, deleteTodo } from "./toDoSlice";



  const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all'); // Local state for current filter

    const filteredTodos = todos.filter(todo => {
      if (filter === 'completed') {
        return todo.completed;
      }
      if (filter === 'active') {
        return !todo.completed;
      }
      return true; // 'all'
    });
  
    const handleInputChange = (e) => {
      setText(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (text) {
        dispatch(addTodo(text));
        setText("");
      }
    };
  
    const handleToggleComplete = (id) => {
      dispatch(toggleComplete(id));
    };
  
    const handleCompletedTodos = (id) => {
      dispatch(deleteCompletedTodos(id));
      setTodo(todo.filter(todo => !todo.completed));
    };

    const handleDeleteTodo = (id) =>{
      dispatch(deleteTodo(id));

    }

    const completedNumber = todos.filter(todo => filter ==='all').length;


    return (
      <div className="main">
        
        <div className="list">
            <div className="current">
                <input id="checkbox" type="checkbox" ></input>
                <input id="text" type="text" value={text}  onChange={handleInputChange} ></input>
                <span onClick={handleAddTodo}>Add</span>
            </div>
            <div className="previous">
                <ul>
                {" "}
                  {filteredTodos.map((todo) => (
                    <li className="todo"
                    on
                      key={todo.id}
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "hsl(233, 14%, 35%)":"",
                      }}
                    >
                      <input type="checkbox" onClick={() => handleToggleComplete(todo.id)} />
                      {todo.text}{" "}
                      <img className="todo-img" src="images/icons8-x-50.png" onClick={() => handleDeleteTodo(todo.id)}/>
                    </li>

                  ))}{" "}
                    </ul>{" "}
                <div className="controlbar">
                  <div className="items">{completedNumber} items</div>
                  <div className="status">
                    <span onClick={() => setFilter('all')}>All</span>
                    <span onClick={() => setFilter('active')}> Active</span>
                    <span onClick={() => setFilter('completed')}>completed</span>
                  </div>
                   <span className="clear" onClick={handleCompletedTodos}>Clear Completed</span>
                </div>
            </div> 
        </div>
        
       
      </div>
    );
  }
  
  
  export default Todo;