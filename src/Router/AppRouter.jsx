import React, {Suspense,lazy} from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPost from '../Screens/AddPost'
import UserList from '../Screens/UserList'
// import UserData from '../Screens/UserData'
const UserData  = lazy(() => import('../Screens/UserData'))

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path = 'user-list' element = {<UserList/>}/>
            <Route path ='add-user' element = {<AddPost/>}/>

            <Route path = 'user-data' element = {<Suspense fallback={<div>Loading.......</div>}>
              <UserData/>
            </Suspense>}/>
        </Routes>
    </div>
  )
}

export default AppRouter