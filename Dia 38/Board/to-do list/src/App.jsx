import {React, useState} from "react";
import Input from './components/input';

function App() {
  
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4 bg-[url('https://i.ibb.co/3TJQ4V1/wallpaper.jpg')] bg-cover bg-center min-h-screen">
      <h1 className="text-4xl font-bold text-white">TODO LIST @iemstudies</h1>
      
      <Input taskList={taskList} setTaskList={setTaskList} />

      <div className="text-white">
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;