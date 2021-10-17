import { connect } from "react-redux";
import { setUsersActionCreator, toggleFollowActionCreator } from "../../../redux/users-reducer";
import Users from './Users';

let mapStateToProps = (state) =>{
    return {
        usersData : state.usersData
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        toggleFollow : (usersID) =>{
            let action = toggleFollowActionCreator(usersID);
            dispatch(action);
        },
        setUsers : (users) =>{
            let action = setUsersActionCreator(users);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;