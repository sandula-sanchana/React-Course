import {useRef,useEffect} from 'react'

import { ChatMessages } from './ChatMessages';

import './MessageElement.css'

export const MassageElement=({massage})=>{
        let element=useRef(null);//INITIAL VALUE
        useEffect(()=>{// only run once after elemnt crrated or updated
           console.log('updated');
           console.log(element.current);// in here because we need to wait till it created before fetch it
            const messageElem=element.current;
            if(messageElem){
                messageElem.scrollTop = messageElem.scrollHeight;
            }
        },[massage])//dependancy array to avoid it runiing to often
        return (
            <div className="app-container" ref={element}>
                {massage.map(obj => (
                    <ChatMessages
                        key={obj.key}
                        message={obj.message}
                        sender={obj.sender}
                    />
                ))}
            </div>
        );
    }