// const Header = () => {
//     return (
//         <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
//           <img src ="/netflix-logo.png"
//           alt="logo"
//            />
//         <div className="flex p-2">
//             <img src="/user-icon.png"
//             className="usericon w-12 h-12"
//             alt="usericon"
//             />
//             <button>Sign Out</button>
//         </div>
//         </div>
//     )
// }

// export default Header;


// const Header = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full px-8 py-2 flex justify-between items-center bg-gradient-to-b from-black z-20">
      
//       <img
//         src="/netflix-logo.png"
//         alt="logo"
//         className="w-44"
//       />

//       <div className="flex items-center gap-4">
//         <img
//           src="/user-icon.png"
//           className="w-10 h-10 rounded-md"
//           alt="usericon"
//         />

//         <button className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700">
//           Sign Out
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Header;

interface HeaderProps {
  showUser?: boolean;
}

const Header = ({ showUser = false }: HeaderProps) => {
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black z-20">

      <img
        src="/netflix-logo.png"
        alt="logo"
        className="w-40"
      />

      {showUser && (
        <div className="flex items-center gap-4">
          <img
            src="/user-icon.png"
            className="w-10 h-10 rounded-md"
            alt="usericon"
          />

          <button className="bg-red-600 px-4 py-1 rounded text-white hover:bg-red-700">
            Sign Out
          </button>
        </div>
      )}

    </div>
  );
};

export default Header;