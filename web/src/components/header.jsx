import logo from '../assets/logo.png'
export default function Header(){
    return (
        <div className='px-4 py-2 flex flex-1 flex-wrap justify-around items-center border-solid border-cyan-900 border-b-[1px] bg-white'>
            <img className='w-48' src={logo} alt=""/>
            <ul className='flex gap-3 space-x-6 cursor-pointer'>
                <li>home</li>
                <li>produtos</li>
                <li>usuários</li>
            </ul>
            <div>
                <button className='bg-red-500 text-white py-2 px-4 rounded-lg' type='button'>sair</button>
            </div>
        </div>
    )
}