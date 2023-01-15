import './Home.css'

import {Header} from './components/header/Header'
import {Main1} from './components/main1/index'
import {Galery} from './components/galery/index'
import {Main2} from './components/main2/index'
import {Main3} from './components/main3/index'


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
        
      {
        <Main2/>
      }

      {
        <Main3/>
      }

    </div>
  )
}

export default Home
