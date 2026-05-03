import FnComponent from './functionComponent'
import ClassComponent from './classComponent';

function Home(){
   return (
      <>
       <h2>Home Route</h2>
       <p>This is home component</p>
       <ClassComponent />
       <FnComponent />
      </>
   )
}

export default Home;