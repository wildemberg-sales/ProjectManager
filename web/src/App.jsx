import * as react from 'react'
import Header from './components/header'
import { useQuery } from '@tanstack/react-query'

function App() {
  const {data} = useQuery({
    queryKey: ['projects'],
    queryFn: async ()=>{
      const response = await fetch('http://localhost:4000/projects')
      return response.json()
    }
  })

  return (
    <div>
      <Header/>
      <div className='px-4 py-4'>
        {
          data.length?
            data.map((val)=>{
              <p>projeto X</p>
            })
          :
            <h1 className='font-semibold text-lg text-center'>Nenhum projeto encontrado</h1>
        }
      </div>
    </div>
  )
}

export default App
