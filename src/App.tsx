import './App.css'
import { Room } from '../src/components/room/room.tsx'
import { Homepage } from './components/homepage/homepage.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { User } from './components/user/user.tsx';

export const App =  () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/room" element={<Room/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}