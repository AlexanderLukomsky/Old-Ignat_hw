type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: propsType) {
    return (
        <div className={'hw1__message message'}>
            <div className={'message__image'} >
                <img src={props.avatar} alt="" />
            </div>
            <div className={'message__box'}>
                <div className={'message__title'}>
                    {props.name}
                </div>
                <p className={'message__text'}>
                    {props.message}
                    <span>
                        {props.time}
                    </span>
                </p>

            </div>
        </div>
    )
}

export default Message
