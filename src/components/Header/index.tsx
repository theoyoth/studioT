import Logo from './Logo'
import Bar from './Bar'

const Navbar = () => {
  return (
    <div className='relative pt-2 flex justify-between items-center'>
      <Logo />
      <Bar />
    </div>
  )
}

export default Navbar