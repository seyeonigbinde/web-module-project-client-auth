import React from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';
import FriendList from './FriendList'

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res=>{
        this.setState({
          ...this.state,
          friends: res.data
        });
        console.log(res.data)
      })
      .catch(err=> {
        console.log(err);
      })
  };


  render() {
    return (
        <>
        <div>
        {
            this.state.friends.map(friendList=><FriendList friendList={friendList} key={friendList.id}/>)
                } 
        </div>
        </>
    );
  }
}

export default Friends;
