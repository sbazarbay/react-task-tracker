import PropTypes from 'prop-types'
import { MouseEventHandler } from 'react'

type Props = {
  color?: string,
  text?: string,
  onClick?: MouseEventHandler
}

const Button = (props: Props) => {
  return <button onClick={props.onClick} className="btn" style={{ backgroundColor: props.color }}>{props.text}</button>
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Button',
  onClick: () => { console.log("It works!") }
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button