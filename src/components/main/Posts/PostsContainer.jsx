import React from 'react';
import Posts from './Posts';
import {
  addPostActionCreator,
  changeNewPostSymbolActionCreator,
} from '../../../redux/posts-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData:state.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=>{
      let action = addPostActionCreator();
      dispatch(action);
    },
    changeNewPostSymbol: (symbol)=>{
      let action = changeNewPostSymbolActionCreator(symbol);
      dispatch(action);
    }
  };
};

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;

// const PostsContainer = (props) => {
//   let state = props.store.getState();
//   let postsData = state.postsData;
//   let onAddPost = () => {
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   };
//   let onChangeNewPostSymbol = (symbol) => {
//     let action = changeNewPostSymbolActionCreator(symbol);
//     props.store.dispatch(action);
//   };
//   return (
//     <Posts postsData={postsData} addPost={onAddPost} changeNewPostSymbol={onChangeNewPostSymbol} />
//   );
// };