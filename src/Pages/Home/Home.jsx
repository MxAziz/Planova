import React from 'react';
import TaskBoard from './TaskBoard';

const Home = () => {
    return (
      <div className="bg-[#F4F7FD] dark:bg-[#20212C] min-h-screen">
        <TaskBoard></TaskBoard>
      </div>
    );
};

export default Home;