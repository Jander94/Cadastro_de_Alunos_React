import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="fixo">
      <ul>
        <li>
          <Link to="/" className="link">Home</Link><br />
        </li>
        <li>
          <Link to="/tabela" className="link">Alunos</Link>
        </li>
      </ul>
      <div className='clear'></div>
    </div>
  );
}
export default Header;
