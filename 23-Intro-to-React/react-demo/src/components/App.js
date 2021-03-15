import Header from './Header'
import { Message } from './Message'


const messageArray = [
  "some strings",
  "lorem ipsume",
  "some more string stuff",
  "some strings",
  "lorem ipsume",
  "some more string stuff",
  "some strings",
  "lorem ipsume",
  "some more string stuff",
  "some strings",
  "lorem ipsume",
  "some more string stuff"
]


function App() {
  return (
    <>
      <Header />
      { messageArray.map( text => <Message textVal={text} />) }
    </>
  );
}

export default App;
