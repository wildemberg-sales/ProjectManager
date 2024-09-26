import {Trash2, Eye, Pencil} from 'lucide-react'
import dayjs from 'dayjs'

export function ProjectComponent(props){
    const data = {
        id:props.id,
        name:props.name,
        description:props.description,
        progress:props.progress,
        status: props.status,
        term: dayjs(props.term).format("DD/MM/YYYY")
    }

    return(
        <div className="bg-cyan-950 px-6 py-4 rounded-md text-cyan-50 lg:w-[30%] sm:w-full mb-3">
            <h3 className='text-xl font-semibold underline'>{data.name}</h3>
            <p>{data.description}</p>
            <div className='flex flex-1 gap-2 justify-between items-center'>
                <p className='text-cyan-200'>{data.term}</p>
                <div className='flex justify-end gap-4 mt-4'>
                    <a href={`${data.id}`}><Eye /></a>
                    <a href={`${data.id}`}><Pencil /></a>
                    <a href={`${data.id}`}><Trash2 /></a>
                </div>
            </div>
        </div>
    )
}