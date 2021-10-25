import '../styling/Button.css'

const Button = ({btnStyle, text, onClick}) => {
    return (
        <button className={btnStyle} onClick={onClick}>
            {text}
        </button>
    )
}
Button.defaultProps = {
    btnStyle: 'btn_default'
}

export default Button
