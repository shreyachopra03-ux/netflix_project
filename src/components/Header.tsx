const Header = () => {
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
          <img src ="/netflix-logo.png"
          alt="logo"
           />
        <div className="flex p-2">
            <img src="/user-icon.png"
            className="usericon w-12 h-12"
            alt="usericon"
            />
            <button>Sign Out</button>
        </div>
        </div>
    )
}

export default Header;