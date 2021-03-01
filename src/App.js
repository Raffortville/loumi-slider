/**** IMPORT AUTRES COMPONENTS **********/
import Title from './components/header/Title'
import Slideshow from './components/slider/Slideshow'

/**** IMPORT FIELD TEMPLATE **********/
import {headingCandidat} from './data/constants'


function App() {

  return (
    <div className="row">
      <main>
        <div className="container-slide">
          <div className="wrap-title">
            <Title title={headingCandidat}/>
          </div>
          <Slideshow/>
        </div>
      </main>
    </div>
  );
}

export default App;
