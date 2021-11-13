import React from "react";

const listCustomer = [
  
    {
      id: 1,
      name: 'Fábio Developed',
      skills: ['React','Node', 'CSS', 'Webpack']    
    },
    {
      id: 2,
      name: 'Aline Carneiro',
      skills: ['HTML','React Native', 'Go', 'Js']  
    },
    {
      id: 3,
      name: 'Eduardo da Silva',
      skills: ['Assembly']  
    },
    {
      id: 4,
      name: 'Bruno Carneiro',
      skills: ['Reason']
    }    
]

const App = () => {

  const renderCustomers = (customer, index) => {
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
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
            {listCustomer.map(renderCustomers)}
          </ul>
        </div>
    </div>
  )

};

export default App;

/* const renderShowHistory = (
    <div>
      <p>Clique no botão abaixo para ver o histórico dos clientes:</p>
      {buttonA}
    </div>
  )

  const renderAddCostumer = (
    <div>
      <p>Clique no botão abaixo para cadastrar o cliente:</p>
      {buttonB}   
    </div>
  )

  const showCustomer = () => {
    if (!hasCustomer) return null

    return (
      <div>
        <h1>Nome do Cliente: Fábio Developer</h1>
      </div>
    )
  } */