import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="bg-stone-700 mx-6">
        <div className="flex items-center justify-between py-4 ml-2 text-slate-50 font-bold"> 
            <div className="text-xl bg-gradient-to-t from-rose-400 to-orange-200 bg-clip-text tracking-tight text-transparent">Profile Rungthiwa Teja</div>
            <div className="font-mono text-slate-400 no-underline">
                <Link to='/' className="mx-4 hover:text-rose-300 hover:">Home</Link>
                <Link to='/AboutMe' className="mx-4 hover:text-rose-300 ">AboutMe</Link>
                <Link to='/Experience' className="mx-4 hover:text-rose-300">Experience</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav
