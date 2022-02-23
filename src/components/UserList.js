import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  console.log(props.students);
  return (
    <div>
      <h1>User list</h1>
      {props.users.map((user, index) => {
        return (
          <div key={`${user.name}-${index}`}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h5>{user.gen}</h5>
          </div>
        );
      })}
    </div>
  );
};


const sendDataAsProps = (state) => {
  return { state: state, users: state.users, students: state.students };
};



export default connect(sendDataAsProps)(UserList);
