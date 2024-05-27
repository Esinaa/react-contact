import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && phoneNumber.length > 0 && location.length > 0) {
      let newContact = {
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.addContact(newContact);
      console.log(name, phoneNumber, location);
      setName("");
      setPhoneNumber("");
      setLocation("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={handleNameChange}
        />
        <input
          type="number"
          name="Phone Number"
          value={phoneNumber}
          placeholder="Enter Your Phone Number"
          onChange={handlePhoneNumberChange}
        />
        <input
          type="text"
          value={location}
          placeholder="Enter Your Location"
          onChange={handleLocationChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
