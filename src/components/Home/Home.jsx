import { IoMdPersonAdd, IoIosListBox,IoMdCash  } from "react-icons/io";
import './Home.css';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className='home-container'>

            <Link to="/adduser" >
                <div className='option-container'>
                    <IoMdPersonAdd className="icon"/>
                    <p>Agregar Cliente</p>
                </div>
            </Link>

            <Link to="/users" >
                <div className='option-container'>
                    <IoIosListBox className="icon"/>
                    <p>Lista de Clientes</p>
                </div>
            </Link>

            <Link to="/adduser" >
                <div className='option-container'>
                    <IoMdCash className="icon"/>
                    <p>Agregar Abono</p>
                </div>
            </Link>

        </div>
    )
}

export default Home;