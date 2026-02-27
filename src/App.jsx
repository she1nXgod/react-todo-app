// import { useState } from 'react'
import PageTitle from './components/PageTitle';
import TodoBox from './components/TodoBox';
import { TaskProvider } from './context/TaskProvider';

const App = () => {
  return (
    <TaskProvider>
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source src="/backgrounds/background-room.mp4" type="video/mp4" />
        </video>
      </div>
      <PageTitle>Todo</PageTitle>
      <TodoBox />
    </TaskProvider>
  );
};

export default App;
