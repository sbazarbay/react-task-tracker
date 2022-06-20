import { Link } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='about'>
            <h4>Version 0.1</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About