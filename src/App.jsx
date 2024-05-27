import { useState } from "react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import { v4 as uuid } from "uuid";

function App() {
  const [contactUsers, setContactusers] = useState([
    {
      name: "Serwaa Akuffo",
      phoneNumber: 2763573870,
      location: "Oyarifa",
      id: uuid(),
    },
    {
      name: "Anita Ocloo",
      phoneNumber: 2452234345,
      location: "Kumasi",
      id: uuid(),
    },
    {
      name: "Dennis Quancey",
      phoneNumber: 2098353341,
      location: "Takoradi",
      id: uuid(),
    },
    {
      name: "Patrick",
      phoneNumber: 2099986657,
      location: "Tarkwa",
      id: uuid(),
    },
  ]);

  const handleAddContact = (newContact) => {
    setContactusers([...contactUsers, newContact]);
  };

  return (
    <div>
      <ContactForm addContact={handleAddContact} />
      <Contacts key={contactUsers.id} contactUsers={contactUsers} />
    </div>
  );
}

export default App;
