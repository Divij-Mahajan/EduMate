import { useNavigate } from "react-router-dom";
import logo from "/logo.png"

function Header() {
    const navigate = new useNavigate()

    return (
        <div className="bg-[--secondary] fixed top-0 left-0  h-20 z-50 p-7 flex justify-between header-div" style={{ width: "100vw" }}>

            <div className="flex items-center">
                <img src={logo} width={45} />

            </div>
            {/* <div className="flex items-center gap-5 text-xl">
                {categories.map((category, i) => {
                    return <a className="hover:scale-110" href={`/${category}`}>{category}</a>
                })}
            </div> */}
            <div className="w-full h-0.5 bg-black absolute bottom-0 left-0"></div>

        </div>
    );
}

export default Header;