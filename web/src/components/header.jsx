import logo from '../assets/logo.png'
export default function Header(){
    return (
        <div className='flex flex-1 flex-wrap justify-center items-center border-solid border-cyan-900 border-b-[1px] bg-white'>
            <div className='max-w-6xl flex flex-1 flex-wrap justify-between items-center px-6 py-4 gap-3'>
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
        </div>
    )
}