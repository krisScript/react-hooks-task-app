import React from 'react';
const Task = props => {
  return (
    <div className="column is-one-quarter" data-testid="task">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{props.title}</p>
        </header>
        <div className="card-content">
          <div className="content">{props.description}</div>
        </div>
        <footer className="card-footer">
          <button href="#" className="card-footer-item">
            Save
          </button>
          <button href="#" className="card-footer-item">
            Edit
          </button>
          <button
            onClick={() => props.deleteTask(props.id)}
            className="card-footer-item"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};
export default Task;
