import './App.css';
import { ProjectDashboard } from './ProjectDashboard';
import { TaskDashboard } from './TaskDashboard';

function App() {
  return (
    <div className="App">
      <main className="center">
          <ProjectDashboard/>
          <TaskDashboard/>
      </main>
    </div>
  );
}

export default App;
