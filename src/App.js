import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import {Person, Test} from './Person/Person';

class App extends Component {
  state={
    persons : [
      {name:"Tayouth", address: 'Baluwatar'},
      {name:"Ram", address: 'Bandipur'},
      {name:"Hari", address: 'Beni'}
      
    ], 
    test: false
  }
  
  clickedme = (args) =>{
    // console.log("I was clicked");
    // this.state.persons[0].name = "Name Changed"; Wrong Method
    this.setState({
      persons : [
        {name: args},
       
      ]
    })
  }

  onChangeHandler = (event) =>{
    this.setState({
      persons : [
        {name: event.target.value},
      ]
    })
  }

  test = (e) =>{
    console.log(e);
    this.setState((previousState)=>({
      test: !previousState.test
    }))

    // this.setState({
    //   test: !this.state.test
    // })
  }

  deleteArrayElement = (personIndex) =>{
    // const arrayE = this.state.persons.slice();
    const arrayE = [...this.state.persons];
    arrayE.splice(personIndex, 1);
    this.setState({persons:arrayE});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit ',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if(this.state.test){
      persons = (
        <div>
          { this.state.persons.map((person,index)=>{
            return <Person 
            name={person.name} 
            // address={person.address}
            variable = {()=>this.deleteArrayElement (index)}/>
          })}

          {/* <Person />
          <Person 
          name={this.state.persons[0].name}
          changed={this.onChangeHandler}/>
          <Person 
          name={this.state.persons[0].name}
          variable={this.clickedme.bind(this, "Ram")}
          changed={this.onChangeHandler}>I'm currently learning react js to build the front of Lesson Plan.</Person> */}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Start off React Training</h1>
        <button onClick={this.test}>Test</button>
        <button style={style}
        onClick={()=> this.clickedme("Shikhar")}>Click me</button> 

        {persons}

        {/* { this.state.test === true ?
          <div>
          <Person />
          <Person 
          name={this.state.persons[0].name}
          changed={this.onChangeHandler}/>
          <Person 
          name={this.state.persons[0].name}
          variable={this.clickedme.bind(this, "Ram")}
          changed={this.onChangeHandler}>I'm currently learning react js to build the front of Lesson Plan.</Person>
          </div> :
          null
        } */}
      </div>
    );
    // return React.createElement('div',{className: "App"}, React.createElement('h1', null, 'Hi, I\'m a react developer'))
  }
}

export default App;


// const app = (props) =>{
//   const [personState, setpersonState] = useState({
//     persons : [
//             {name:"Tayouth"},
//             {name: "Shikhar"},
//           ]
//   });
//   const [testState, settestState] = useState(
// false
//   )
//   const clickedme = () =>{
//         // console.log("I was clicked");
//         // this.state.persons[0].name = "Name Changed"; Wrong Method
//         setpersonState({
//           persons : [
//             {name:"Name"},
//             {name: " Changed"},
//           ]
//         })
//       }
//       const test = () =>{
//         settestState (!testState);
//       }
//         return (
//           <div className="App">
//             <h1>Start off React Training</h1>
//             <button onClick={test}>Click me</button>
//             {
//               testState &&
//               <div>
//             <Person />
//             <Person name={personState.persons[0].name}/>
//             <Person name="tayouth">I'm currently learning react js to build the front of Lesson Plan.</Person>
//                 </div>
                
//             }
            
//           </div>
//         );

// }
// export default app;