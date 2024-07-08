import React from "react";
import './Sidebar.css';
import { Avatar, IconButton } from "@mui/material";
import { Chat, MoreVert, Search } from "@mui/icons-material";
import RecentChat from "./RecentChat";


const Sidebar = () =>
    {
        return(
                <div className="SidebarContent">
                   <div className="Sidebar_Header">
                    <Avatar src="rdj.jpg" />
                    <div className="Sidebar_Header_Controls">
                        <IconButton>
                            <Chat />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>

                    </div>
                   </div>
                   <div className="Sidebar_Search">
                    <div className="Sidebar_Search_InputHolder">
                        <input type="text"  placeholder="Search Contact or Message"/>
                        <button>
                            <Search />
                        </button>
                    </div>
                   </div>
                   <div className="Sidebar_Chats">
                    <RecentChat contactName="Selva" lastMessage="Hi" />
                    <RecentChat contactName="Pani" lastMessage="love you"/>
                    <RecentChat contactName="Geni" lastMessage="free time call me please"/>
                    <RecentChat  contactName="Pravi" lastMessage="What are you doing dear?"/>
                    <RecentChat contactName="Deeps" lastMessage="Good night"/>
                    <RecentChat contactName="Margreat" lastMessage="Hello"/>
                    <RecentChat contactName="Shanmugapriya" lastMessage="Okla" />
                    <RecentChat contactName="Course" lastMessage="Okay sir thank you"/>
                    <RecentChat contactName="Surya" lastMessage="Sahana in Chennai"/>
                    <RecentChat  contactName="Rosy" lastMessage="Thank You"/>
                    <RecentChat contactName="Akila" lastMessage="You Are Welcom"/>
                    <RecentChat contactName="Geetha" lastMessage="Enjoy da"/>
                   </div>
                </div>
        );
    }


    export default Sidebar;