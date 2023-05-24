const ListItem = ({ task }) => {
  return (
    <div className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
      <p>{task.title}</p>
    </div>
  );
};

export default ListItem;
