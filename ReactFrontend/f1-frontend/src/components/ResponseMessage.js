const ResponseMessage = (props) => {
    return (
        <div style={{color: props.color}}>
            {props.message}
        </div>
    )
}

export default ResponseMessage
