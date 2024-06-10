import { useState } from "react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import { v4 as uuid } from "uuid";
import { Container, Row, Col } from "react-bootstrap";

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

  const editContact = (contactId, newContactDetails) => {
    let newArray = contactUsers.map((contact) => {
      if (contact.id === contactId) {
        return newContactDetails;
      } else {
        return contact;
      }
    });
    setContactusers(newArray);
  };

  const deleteContact = (contactId) => {
    let newArray = contactUsers.filter((contact) => contact.id !== contactId);
    setContactusers(newArray);
  };
  return (
    <Container>
      <Row>
        <Col>
          <ContactForm addContact={handleAddContact} />
        </Col>
        <Col>
          <Contacts
            editContact={editContact}
            deleteContact={deleteContact}
            contactUsers={contactUsers}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
