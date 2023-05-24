const ListItem = ({ task }) => {
  return (
    <div className="list-item">
      <div className="info-container">
        <p className="task-title">{task.title}</p>
      </div>
      <p>{task.title}</p>
    </div>
  );
};

export default ListItem;
