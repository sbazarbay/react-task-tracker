import PropTypes from 'prop-types'
import Button from './Button'

type Props = { title?: string, onButtonClick?: () => void, showForm?: boolean }

const Header = (props: Props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        color={props.showForm ? "firebrick" : "green"}
        text={props.showForm ? "Close Form" : "Add New Task"}
        onClick={props.onButtonClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string,
  onButtonClick: PropTypes.func,
  showForm: PropTypes.bool
}

// const headingStyle = { color: 'red', backgroundColor: 'black' }

export default Header