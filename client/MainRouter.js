import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import About from './core/About'
import WordPage from './core/wordPage'
import Categories from './core/Categories'
import createWord from './word/createWord'
import SearchResults from './core/SearchResults'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/about" component={About}/>

        <Route path="/wordPage/:postId" component={WordPage}/>

        <Route path="/categories" component={Categories}/>

        <Route path="/search/cat/:category" component={SearchResults}/>
        <Route path="/search/post/:text" component={SearchResults}/>  

        <Route path="/createWord" component={createWord}/>

        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
    
      </Switch>
    </div>)
}

export default MainRouter