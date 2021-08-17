import { Link } from 'react-router-dom';
import './styles.css';

const Home = () =>{
    return(
        <div className="home-container">
            <h1>Github API</h1>
                <Link to="/search">
            <button className="btn btn-primary">Começar</button>
            </Link>
        </div>
    )
}

export default Home;