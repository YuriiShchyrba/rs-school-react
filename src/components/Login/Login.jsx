import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[requiredField]} placeholder={'login'} name={'email'} />
      </div>
      <div>
        <Field component={Input} validate={[requiredField]} placeholder={'password'} name={'password'} />
      </div>
      <div>
        <Field component={Input} type={'checkbox'} name={'rememberMe'} /> remember me
      </div>
      {props.error && <div className={style.formSubmitError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

const Login = (props) => {
  console.log(props.auth.isLogged)
  const onSubmit = (formData) => {
    props.loginUser(formData);
  };
  if(props.auth.isLogged){
    return <Redirect to='/profile'/>
  }
  return (
    <div>
      <h1>Login form</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};


let mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps,{loginUser})(Login);
