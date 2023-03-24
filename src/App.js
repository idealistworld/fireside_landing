import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Landing_Fold from './components/landing_fold/landing_fold';
import Sponsor_List from './components/sponsor_list/sponsor_list';
import How_It_Works from './components/how_it_works/how_it_works';
import Join_Community from './components/join_community/join_community';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="page_content">
        <Landing_Fold></Landing_Fold>
        <Sponsor_List></Sponsor_List>
        <How_It_Works></How_It_Works>
        <Join_Community></Join_Community>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
