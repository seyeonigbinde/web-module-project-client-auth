import React from 'react';

class FriendList extends React.Component {

  render() {
      const { friendList } = this.props;
      return(
        <div className="container">
      <div key={friendList.id} >
          <h1>Name: {friendList.name}</h1>
          <h3>Age: {friendList.age}</h3>
          <h3>Email: {friendList.email}</h3>
        </div>
      </div>);
  }
}

export default FriendList;