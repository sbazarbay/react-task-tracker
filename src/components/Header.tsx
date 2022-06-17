import PropTypes from 'prop-types'

type Props = { title: string }

const Header = (props: Props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = { color: 'red', backgroundColor: 'black' }

export default Header