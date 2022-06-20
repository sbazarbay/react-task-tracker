import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer