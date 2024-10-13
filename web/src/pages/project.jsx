import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getProject } from "../http/getProject"
import dayjs from "dayjs"

export default function Project(){

    const {idProject} = useParams()

    const {isLoading,error, data} = useQuery({
        queryKey: ['project', idProject],
        queryFn: ()=> getProject(idProject),
        staleTime: 1000 * 5
    })


    return(
        <div className="px-6 py-4 max-w-7xl m-auto">
            {
                isLoading ? (
                    <div className='py-10 text-center'>
                        <h1 className='text-xl font-bold'>Carregando Projeto</h1>
                        <div className="flex py-10 align-top justify-center h-screen">
                            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-cyan-900"> </div>
                        </div>
                    </div>
                ) : error ? (
                    <p>{error.message}</p>
                ) : (
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-cyan-950 mb-4 ">{data.name}</h1>
                        <div className="flex justify-center gap-2 items-start mb-4">
                            <span>{data.progress}%</span>
                            <div className="w-[80%] bg-white rounded-full h-4">
                                <div className="bg-cyan-900 rounded-full h-4" style={{ width: `${data.progress}%` }}> </div>
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <div className="flex sm:justify-evenly mt-5 items-center sm:flex-row sm:gap-0 flex-col gap-4">
                            <p className="text-cyan-600">Data de início: {dayjs(data.term).format('DD/MM/YYYY')}</p>
                            {
                                data.status === 'pendente' ? (
                                    <div className="flex items-center gap-2">
                                        <span>Status:</span>
                                        <div className="border-solid border-[1px] border-red-600 bg-red-600 rounded-md px-3 py-1 ">
                                            <p className="text-lg text-white">Pendente</p>
                                        </div>
                                    </div>
                                ) : data.status === 'em andamento' ? (
                                    <div className="flex items-center gap-2">
                                        <span>Status:</span>
                                        <div className="border-solid border-[1px] border-cyan-800 bg-cyan-800 rounded-md px-3 py-1 ">
                                            <p className="text-lg text-white">Em Andamento</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Status:</span>
                                        <div className="border-solid border-[1px] border-green-800 bg-green-800 rounded-md px-3 py-1 ">
                                            <p className="text-lg text-white">Concluído</p>
                                        </div>
                                    </div>
                                ) 
                            }
                        </div>
                        <div className="flex sm:flex-row justify-evenly mt-5 flex-col">
                            <div className=" text-start">
                                <h3 className="text-xl font-bold text-cyan-950">Responsáveis</h3>            
                                <li >Carlos</li>
                                <li>Rafaela</li>
                                <li>Camila</li>
                                
                            </div>
                            <div className=" text-start">
                                <h3 className="text-xl font-bold text-cyan-950">Tarefas</h3>            
                                <li >Mudar Design</li>
                                <li>Rodar integração</li>
                                <li>Ativar modo turbo</li>
                                
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}