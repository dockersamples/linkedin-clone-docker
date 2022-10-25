import React from 'react'
import '../css/Sidebar.css'
import {Avatar} from '@material-ui/core'

export default function Sidebar({user}) {

    const recentItem = (topic) => {
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <div className="sidebar">
                       <div className="sidebar__top" >

                           <img src="https://cff2.earth.com/uploads/2017/11/08174338/How-ice-forms-inside-of-clouds-768x512.jpg"></img>
                           <Avatar 
                            className="sidebar__avatar"
                                src={user.userImage} />
                                <h2>{user.username}</h2>
                                <h4>{user.email}</h4>
                            </div>

                       <div className="sidebar__stats">
                           <div className="sidebar__stat">
                            <p>Who viewed you profile</p>
                            <p className="sidebar__statNumber">8,888</p>
                               
                           </div>

                           <div className="sidebar__stat">
                           <p>Views of your post</p>
                           <p className="sidebar__statNumber">888</p>
                                
                               
                           </div>
                       </div>

                       <div className="sidebar__bottom">

                       <p>Recent</p>
                       {recentItem('ReactJS')}
                       {recentItem('NodeJS')}
                       {recentItem('Python')}
                       {recentItem('Linux')}                      
                       {recentItem('Blockchain')}

             </div>
        </div>
    )
}
