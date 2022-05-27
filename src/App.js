import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
