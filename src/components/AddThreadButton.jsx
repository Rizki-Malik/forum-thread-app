import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function AddButton(){
    return(
        <Link to="/new" className="add-button">
            <FaPlus/>
        </Link>
    );
}