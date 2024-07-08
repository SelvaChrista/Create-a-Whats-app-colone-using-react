import React from "react";
import './RecentChat.css';
import { Avatar } from "@mui/material";


const RecentChat =(props) =>
    {
        return(
            <div className="RecentChat">
                <Avatar />
                <div className="ContactNames">
                    <h3>{props.contactName}</h3>
                    <p>{props.lastMessage}</p>
                </div>
            </div>
        );
    }



    export default RecentChat;