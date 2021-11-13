import React from "react";
import mock from "../mock";
import Button from "../components/Button";

const App = () => {
  
  const handleClick = (id) => {
    console.log('Deletar Cliente')
    alert(`O id do Cliente é: ${id}`)
  }

   
  const renderCustomers = (customer, index) => {
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <Button onClick = {() => handleClick(customer.id)}><p>Deletar o Cliente</p> </Button></li>
        {customer.skills.map(renderSkills)} 
      </div>          
    ) 
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{paddingLeft:'30px'}} key={`customer-${skill}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div className="App">
        <p>Digital Innovation One</p> 
        <p>Seja bem vindo!</p>        
        <div>
          <ul>
            {mock.map(renderCustomers)}
          </ul>
        </div>
    </div>
  )

};

export default App;