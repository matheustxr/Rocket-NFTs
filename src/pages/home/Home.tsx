import './Home.css'

import {Header} from './components/header/Header'
import {Main1} from './components/main1/index'
import {Galery} from './components/galery/index'


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
        
        {
          <Galery/>
        }
      </div>
      
    </div>
  )
}

export default Home
