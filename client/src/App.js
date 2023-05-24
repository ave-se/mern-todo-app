import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
const App = () => {
  const userEmail = "agnescybil.atsuah@hyperisland.se";
  const [tasks, setTasks] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();

      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getData, []);

  return (
    <div className="app">
      <ListHeader listName={"🏝 Holiday tick list"} />
    </div>
  );
};

export default App;
