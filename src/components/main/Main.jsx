import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import AudiosContainer from './Audios/AudiosContainer';

const Main = () => {
  return (
    <main>
      <section className="main-page">
        <div className="wrapper main-page__wrapper">
          <NavBar />
          <div className="content-wrapper">
            <Switch>
              <Route
                exact
                path="/profile"
                render={() => <ProfileContainer />}
              />
              <Route path="/messages" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/audios" render={() => <AudiosContainer />} />
            </Switch>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
