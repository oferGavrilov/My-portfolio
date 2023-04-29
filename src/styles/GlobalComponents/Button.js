/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const Button = (props) => {
  return (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
  )
}

export default Button
