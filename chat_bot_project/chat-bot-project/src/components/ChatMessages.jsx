import user_img from '../assets/user.png'
import bot_img from '../assets/bot.png'
import './ChatMessages.css'

export const ChatMessages = (props) => {
        return (
            <div className={props.sender === "user" ? "user-msg" : "bot-msg"}>

                {props.sender === "bot" && (
                    <img src={bot_img} alt="pic" width="40" height="40" />
                )}

                <div className={
                    props.sender === "user"
                        ? "message-bubble user-bubble"
                        : "message-bubble bot-bubble"
                }>
                    {props.message}
                </div>

                {props.sender === "user" && (
                    <img src={user_img} alt="pic" width="40" height="40" />
                )}
            </div>
        );
    };