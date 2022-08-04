import ListContext from './context/list'
import Search from './components/List/Search/Search'



const list = [
  
  {
    id: 'item_1',
    title: 'title_1'
  },
  {
    id: 'item_2',
    title: 'title_2'
  },
  {
    id: 'item_3',
    title: 'title_3'
  },
  {
    id: 'item_4',
    title: 'title_4'
  }
  
]

function App() {



  const listContext = { list: list }


  return (
    
    <ListContext.Provider value={ listContext }>



      <Search />


      
    </ListContext.Provider>
  )

  
  
}



export default App
