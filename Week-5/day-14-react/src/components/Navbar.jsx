function Navbar(){
    return(
        <div className="flex justify-between bg-gray-400 p-6">
            <h1>LOGO</h1>
            <ul className="flex gap-10">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Register</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;