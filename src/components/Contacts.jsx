import React from "react";

const Contacts = (props) => {
  return (
    <div>
      {props.contactUsers.map((user) => {
        return (
          <div key={user.id}>
            <h1>
              {user.name}: &#43;{user.phoneNumber} - {user.location}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
