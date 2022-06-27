import React from "react";

function TodoList({ item, index }) {
      return (
            <div key={item.id}>
                  <p>
                        {index + 1}. <span>{item.title}</span>
                        <span>
                              <button style={{"margin":"10px", "padding":"4px"}}>{item.status}</button>
                        </span>
                  </p>
            </div>
      );
}

export default TodoList;
