import { useQuery } from '@tanstack/react-query'
import { ProjectComponent } from './components/ProjectComponent'
import { getProjects } from './http/getProjects'

function App() {
  const {isLoading, data} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 1000 * 5
  })

  return (
    <div>
      {
        isLoading ?
          <div className='py-10 text-center'>
            <h1 className='text-xl font-bold'>Buscando Projetos</h1>
            <div className="flex py-10 align-top justify-center h-screen">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-cyan-900"> </div>
            </div>
          </div>
        :
          <div className='flex flex-1 justify-center'>
            <div className='px-6 py-4 gap-3 max-w-7xl flex flex-wrap flex-1 justify-between'>
              {
                data ?
                  data.map((val)=>{
                    return(
                    <ProjectComponent key={val.id} 
                      id={val.id} 
                      name={val.name}
                      description={val.description}
                      progress={val.progress}
                      status={val.status}
                      term={val.term}
                    />
                  )})
                :
                  <h1 className='font-semibold text-2xl text-center'>Nenhum projeto encontrado</h1>
              }
            </div>
          </div>
      }
    </div>
  )
}

export default App
