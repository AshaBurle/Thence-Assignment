import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
function Header() {
  let navigate = useNavigate();
  const handleChange = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="border-2 border-gray-100 pl-7 pr-4 py-3 m-8 rounded-full">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <img src={Logo} width={90} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-7 py-4 border-2 border-gray-100 p-9  rounded-full mr-6">
              <button onClick={handleChange}>Get Projects</button>
            </div>
            <div className="px-7 py-4 bg-black p-9 hover:bg-[#4E4E4E] rounded-full">
              <button className="text-white">Onboard Talent</button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Header;
