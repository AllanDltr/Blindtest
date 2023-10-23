import './App.css'
import { Room } from '../src/components/room/room.tsx'
import { Homepage } from './components/homepage/homepage.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const App =  () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/room" element={<Room/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}