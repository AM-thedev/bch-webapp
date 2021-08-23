import './App.css';
import styled from 'styled-components'

import Chart from './components/Chart'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'


const Wrapper = styled.body`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 0;
  height: 100vh;
`

function App() {
  return (
    <Wrapper className="App">
      <Chart />
      <NewsFeed />
      <Footer />
    </Wrapper>
  );
}

export default App;
