import './Home.css'

import {Header} from './header/Header'
import {Main1} from './main/index'


function Home() {
  return (
    <div className="Home">
      <div className='background-image'>
        {
          <Header/>
        }

        {
          <Main1/>
        }
        
      </div>
      
    </div>
  )
}

export default Home
