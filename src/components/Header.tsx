const Header = () => {
    return (
        <div className="absolute w-6 px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
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