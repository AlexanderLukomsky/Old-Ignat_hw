import s from './Message.module.scss'
type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: propsType) {
    return (
        <div className={s.message}>
            <div className={s.message__image} >
                <img src={props.avatar} alt="" />
            </div>
            <div className={s.message__box}>
                <div className={s.message__title}>
                    {props.name}
                </div>
                <p className={s.message__text}>
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
