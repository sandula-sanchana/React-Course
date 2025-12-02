import {useState} from 'react'
import {chatbot} from 'supersimpledev'
import './InputElement.css'

export const InputElement=({massage,setMessage})=>{//component-piece of website

        let [textInput,setTextInput]=useState('');

        function getTheInput(event){//event is a object the give details about the event and the target gives the elements of it
            setTextInput(event.target.value);
        }

        async function sendChatMessages(){

            const loading_id=crypto.randomUUID()

            const  newMassages=([...massage,{
                message:textInput,
                sender:"user",
                key:crypto.randomUUID()
            },{
                message:"loading...",
                sender:"bot",
                key:loading_id
            }])

            setMessage(newMassages);

            const response=await chatbot.getResponseAsync(textInput);

            const updatedArray=newMassages.map((i)=>{//we need to make a new array cause react only render when the reference are changed,it not checks for content same with massage objects
                if(i.key===loading_id){
                    return {
                        ...i,
                        message:response,
                    }
                }else {
                    return i;
                }
            })

            setMessage(updatedArray);

            setTextInput('');
        }

        function handleKeyDown(event){
            if(event.key==="Enter"){
                sendChatMessages();
            }
        }


        return (<div className="input-container">
                  <input
                      type="text" placeholder="say something"
                      onChange={getTheInput}
                      className="input-field"
                      value={textInput}
                      onKeyDown={handleKeyDown}
                  />
                  <button className="send-button" onClick={sendChatMessages} >Send</button>
                </div>
        );
    }