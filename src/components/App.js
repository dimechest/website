import Home from './home/home';
import About from './about/about';
import Services from './services/services';
import Projects from './projects/projects';
import Stacks from './stacks/stacks';
import Team from './team/team';
import Partners from './partners/partners';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="container-fluid px-0">
      <Home />
      <About />
      <Services />
      <Projects />
      <Stacks />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
