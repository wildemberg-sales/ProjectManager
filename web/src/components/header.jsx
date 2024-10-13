import logo from '../assets/logo.png'
export default function Header(){
    return (
            <div className='w-full grid grid-flow-col grid-cols-3 items-center px-6 py-4 gap-4 border-solid border-cyan-900 border-b-[1px] bg-white'>
                <div className='flex justify-center'>
                    <img className='w-48' src={logo} alt=""/>
                </div>
                <div className='flex justify-center'>
                    <ul className='flex gap-3 space-x-6 cursor-pointer'>
                        <li>home</li>
                        <li>produtos</li>
                        <li>usuários</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-red-500 text-white py-2 px-4 rounded-lg' type='button'>sair</button>
                </div>
            </div>
    )
}