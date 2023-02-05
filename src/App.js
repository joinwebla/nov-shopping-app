import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import { CompA } from './dummycomponents/CompA';
import { CompB } from './dummycomponents/CompB';
import { CompC } from './dummycomponents/CompC';
import { CompD } from './dummycomponents/CompD';

// function ChildComponent(props) {
//   console.log("child component rendered");

//   // 10K products
//   return (
//     <p>Child Component</p>
//   )
// }


// function App() {
//   const [value, setValue] = useState(0); //state

//   const handler = useCallback(() => {
//     console.log("Handler");
//   }, []);

//   const renderChild = useMemo(() => <ChildComponent onClick={handler} />, [handler]);

//   return (
//     <div style={{ margin: 100 }}>
//       <h1>Hooks in React</h1>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>Increment</button>
//       {renderChild}
//     </div>
//   );
// }

import { A, B, C, D } from './simpleComponents/index'
import ErrorBoundary from './components/ErrorBoundary';


const UserInfoProvider = (props) => {
  const response = { name: 32323 }
  return <props.component userInfo={response} />
}

function App() {
  return (
    <>
      <h1>HOC</h1>
      <ErrorBoundary>
        <UserInfoProvider component={A} />
        <UserInfoProvider component={B} />
        <UserInfoProvider component={C} />
        <UserInfoProvider component={D} />
      </ErrorBoundary>
    </>
  )
}

export default App;
