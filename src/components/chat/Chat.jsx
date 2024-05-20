
import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () =>{

const [open,setOpen] =useState(false);
const [Text,setText] =useState(" ");

const endRef = useRef(null)
useEffect(() =>{
    endRef.current?.scrollIntoView({ behavior: "smooth" });
}, []);

const handleEmoji =e =>{

  setText(prev => prev +e.emoji);
  setOpen(false)
}
    return(

        <div className=" chat"> 

            <div className="top">

                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>name one</span>
                        <p> something</p>
                    </div>
                    <div ref={endRef}></div>
                    
                </div>

                <div className="icon">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>

            </div>
            <div className="center">

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">

                        <p> Hi, how are you?   
                        </p>

                        <span> 2 min ago </span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">

                        <p> Hello ! I am good.
                            
                        </p>

                        <span>1 min ago </span>
                    </div>
                </div>


                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">

                        <p> where are you?
                            
                        </p>

                        <span>1 min ago </span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">

                        <p> I am at home.
                        </p>
                        <span>1 min ago </span>
                    </div>

                </div>

                <div className="message">
                     <img src="./avatar.png" alt="" />
                    <div className="text">

                        <p> How are you doing.

                        </p>
                        <span>1 min ago </span>
                    </div>

                </div>

                <div className="message own">
                    <div className="text">

                        <p> I am doing good 
                        </p>
                        <span>1 min ago </span>

                    </div>

                </div>

                <div ref={endRef}></div>

            </div>

            <div className="bottom">

                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type message here" 
                value={Text}
                onChange={e =>setText(e.target.value)} />
                <div className="emoji">
                    <img 
                        src="./emoji.png"
                        alt="" 
                        onClick={() => setOpen(prev => !prev)} 
                    />

                    <div className="picker">

                     <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                    
                </div>
                <button className="send-button">Send</button>
            </div>
        </div>
    )
}

export default Chat 