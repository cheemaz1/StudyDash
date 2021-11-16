import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';
// import NavBarContainer from './nav/navbar_container';
// import ProfileContainer from './profile/profile_container';
import TasksContainer from './task/tasks_container';
import MainPage from './main/main_page';
import TaskComposeContainer from './task/create_task_container';

const App = () => (
    <div>
    
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/tasks" component={TasksContainer} />
            {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
            <ProtectedRoute exact path="/new_task" component={TaskComposeContainer} />
        </Switch>

    </div>
);

export default App;


    //   <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
    //   <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    //   <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />