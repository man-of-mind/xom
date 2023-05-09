import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-blue-100 p-6 flex flex-row justify-between">
            <p className="text-red-800 font-bold text-3xl cursor-pointer" onClick={() => navigate("/")}>ExxonMobil</p>
            <p className="text-3xl font-medium">Wells Engineering</p>
        </div>
    )
}

export default Header;
