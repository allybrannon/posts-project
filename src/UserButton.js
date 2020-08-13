import React from "react";

const UserButton = (props) => {
  return (
    <button onClick={() => props.WhenClicked(props.user)}>
      Limit to User: {props.user}
    </button>
  );
};

export default UserButton;
