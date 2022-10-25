import React from 'react'
import '../css/Header.css'


import HeaderOption from './HeaderOption'



import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function Header({user,logOut}) {
    const defaultAvatarUrl = "https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
    return (
        <div  className="header">              
               <div className="header__left">
               {/* image  */}
               <img src={  defaultAvatarUrl}/>


               {/* searchbar  */}
               <div className="header__search">
                   {/* search icon */}
                   <SearchIcon />
                   <input placeholder="Search" type="text"/>
               </div>
                 </div>

               <div className="header__right"> 
                    {/* home icon */}
                    <HeaderOption Icon={HomeIcon} title={"home"} />
                    
                  
                    {/* my network  */}
                    <HeaderOption Icon={GroupIcon} title={"network"} />
                    {/* jobs  */}
                    <HeaderOption Icon={WorkIcon} title={"jobs"}  />

                    {/* messaging  */}
                    <HeaderOption Icon={TextsmsRoundedIcon} title={"messaging"}  />
                    {/* notification  */}
                    <HeaderOption Icon={NotificationsActiveIcon} title={"notification"} />
                    {/* avatar  */}
                    <HeaderOption  title={"me"} logOut={logOut} avatar={user.userImage} />
                    {/* work */}
                    
               
                </div>
        </div>
    )
}


export default Header
