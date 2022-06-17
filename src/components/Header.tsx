import PropTypes from 'prop-types'
import Button from './Button'

type Props = { title?: string }

const Header = (props: Props) => {
  const onClick = () => {
    console.log('clickedy-click!')
  }
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

// const headingStyle = { color: 'red', backgroundColor: 'black' }

export default Header