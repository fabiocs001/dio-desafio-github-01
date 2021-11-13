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
  
  const handleChange = (e, id) => {
    console.log('Deletar Cliente')
    alert(`O id do Cliente é: ${id}`)
  }

  
 
  const renderCustomers = (customer, index) => {
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}<button onClick={(e) => handleChange(e, customer.id)}>Deletar Cliente</button></li>
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