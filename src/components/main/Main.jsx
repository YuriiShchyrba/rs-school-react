import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import AudiosContainer from './Audios/AudiosContainer';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initialize } from '../../redux/main-reducer';
import Preloader from '../common/Preloader';

class Main extends React.Component {

  componentDidMount () {
    this.props.initialize();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }

    return (
      <main>
        <section className="main-page">
          <div className="wrapper main-page__wrapper">
            <NavBar />
            <div className="content-wrapper">
              <Switch>
                <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
                <Route path="/messages" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/audios" render={() => <AudiosContainer />} />
                <Route path="/login" render={() => <Login />} />
              </Switch>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized : state.main.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,{initialize}))
  (Main);
