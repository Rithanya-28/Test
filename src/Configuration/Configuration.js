import React, { createContext, useState } from 'react'
import Home from '../Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Formlanding from '../Formlanding/Formlanding'
import CompA from '../Home/CompA'
import Help from '../Help/Help'
import SideBar from '../SideBar/SideBar'
import TransactionHistory from '../History/TransactionHistory'
import Settings from '../Settings/Settings'
import Chart from '../Chart/Chart'
import App from '../Chart/App'
export const History = createContext();

const Configuration = () => {
  const [data,SetData] = useState([]);
  return (
    <div>
      <History.Provider value={{data, SetData}}>

        <BrowserRouter>
         
        <Routes>
            <Route path="/" element={<Formlanding/>}></Route>
            
            <Route path="/home" element={<Home/>}></Route>
            {/* <Route path="/CompA" element={<CompA/>}></Route> */}
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/history' element={<TransactionHistory/>}></Route>
            <Route path='/Chart' element={<App/>}></Route>
        </Routes>
        </BrowserRouter>
      </History.Provider>
    </div>
  )
}

export default Configuration








































































































