import React from "react";
import './ChatWindow.css';
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, EmojiEmotionsOutlined, Mic, MoreVert } from "@mui/icons-material";

const ChatWindow=() =>{
    return(
      <div className="ChatWindowContent">
              <div className="ChatWindow_Header">
              <div className="ChatWindow_Header_Left">
                <Avatar />
                <div className="UserInfo">
                  <h3>Contact Name</h3>
                  <p>Last Seen</p>
                </div>
              </div>
              <div className="ChatWindow_Header_Right">
                <IconButton>
                  <AttachFile />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </div>
              </div>
              <div className="ChatWindow_Body">
                  <div className="ChatMessage">
                    <p>Hello! How are you?</p>
                    <p>11:03:57</p>
                  </div>
                  <div className="ChatMessage ChatMessageReciever">
                    <p>I am fine! How are you?</p>
                    <p>11:05:00</p>
                  </div>
                  <div className="ChatMessage ChatMessageReciever">
                    <p>Good! where are you now?</p>
                    <p>11:06:40</p>
                  </div>
              </div>
              <div className="ChatWindow_footer">
                   <IconButton>
                    <EmojiEmotionsOutlined />
                   </IconButton>
                   <form method="post">
                    <input type="text" placeholder="Your Message" />
                    <button type="submit">Send</button>
                   </form>
                   <IconButton>
                     <Mic />
                   </IconButton>
              </div>
      </div>
    );
}
export default ChatWindow;