import './App.css'
import Cards from './Cards'
import ChildComponent from './ChildComponent'

function App() {
  // const [count, setCount] = useState(0)

   const CardProps={CardTitle:"My Card",
                    CardText:"invitation card to party",
                    CardOperation:"Acceptance"
   }

  return (
   <>
   <ChildComponent name="Ankit"/>
    <h1 className='font-sans font-bold text-red-500'>Hello World CSS !!!</h1>
    <Cards cards={CardProps}/>
   </>
  )
}

export default App
