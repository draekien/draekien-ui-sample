import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Banner, Button, Navbar, Text, TextArea, Textbox, useToastContext } from "draekien-ui";

function App() {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const toastContext = useToastContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form data: ", data);
    toastContext.success({
      title: "Form submitted",
      message: "Check the console logs for form data",
    });
  };

  const handleDataChange = (e: any) => {
    let update: typeof data = { ...data };
    update[e.target.id as keyof typeof data] = e.target.value;

    setData(update);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          logo={
            <Text variant="title" color="text-white">
              DraekienUi-Sample
            </Text>
          }
          backgroundColor="b-400">
          <ul className="nav__container">
            <li className="nav__item">
              <Button href="/">Home</Button>
            </li>
            <li className="nav__item">
              <Button href="/contact">Contact</Button>
            </li>
          </ul>
        </Navbar>
        <form onSubmit={handleSubmit}>
          <Text variant="title">Example Contact Form</Text>
          <Banner variant="information" message="This form does not actually submit any information. Check the console logs for form contents on submission." />
          <Textbox id="firstname" label="first name" onChange={handleDataChange} value={data.firstname} required fullWidth />
          <Textbox id="lastname" label="last name" onChange={handleDataChange} value={data.lastname} required fullWidth />
          <Textbox id="email" label="email" icon="mail" onChange={handleDataChange} value={data.email} type="email" fullWidth />
          <Textbox id="phone" label="phone" icon="phone" onChange={handleDataChange} value={data.phone} type="phone" fullWidth />
          <TextArea id="message" label="message" onChange={handleDataChange} value={data.message} required fullWidth />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </Router>
  );
}

export default App;
