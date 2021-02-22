import React, { useEffect } from 'react'
import { login, logout, selectUser, user } from './features/userSlice';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    dispatch(login({
uid:userAuth.uid,
email:userAuth.email
    }))

  }else{
dispatch(logout())
  }
 
})
return  unsubscribe
 

  },[dispatch])
  return (
    <div className="app">
     
      <Router>
        {!user?(
          <LoginScreen/>
        ):(
          <Switch>
          <Route path="/profile">
           <ProfileScreen/>
          </Route>
          {/* <Route path="/users">
           
          </Route> */}
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        </Switch>
        )}
     
        </Router>
    </div>
  );
}

export default App;
