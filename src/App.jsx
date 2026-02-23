// import { useState } from 'react'
import PageTitle from './components/PageTitle';
import TodoBox from './components/TodoBox';

const App = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source src="/backgrounds/background-room.mp4" type="video/mp4" />
        </video>
      </div>
      <PageTitle>Todo</PageTitle>
      <TodoBox />
    </>
  );
};

export default App;
