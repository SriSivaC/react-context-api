import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
let ExplitiveContext = React.createContext("shit");
let ContextValues = React.createContext(
  props => <h1>
    Hi {props.name}
  </h1>
);
// const OrganizationContext = React.createContext();
// const PersonContext = React.createContext();

const Exclamation = (props) => (
  <h1>Oh, {props.word}!!!</h1>
);

function ContextualExclamation() {
  return (
    <ExplitiveContext>
      {
        word => <Exclamation word={word} />
      }
    </ExplitiveContext>
  )
}

const GrandmasHouse = (props) => (
  <ExplitiveContext.Provider value="poop">
    {props.children}
  </ExplitiveContext.Provider>
)

const App = () => (
  <div>
    <h1>
      React Context
    </h1>
    <ContextualExclamation />
    <ExplitiveContext.Provider value="poop">
      <ContextualExclamation />
    </ExplitiveContext.Provider>
    <ExplitiveContext.Provider value="stink">
      <ContextualExclamation />
    </ExplitiveContext.Provider>
    <GrandmasHouse>
      <ContextualExclamation />
    </GrandmasHouse>
    <ContextValues.Consumer>
      {
        Value => <Value name="That Person" />
      }
    </ContextValues.Consumer>
  </div>
)

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
