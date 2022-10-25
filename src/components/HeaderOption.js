import React from 'react'
import "../css/HeaderOption.css"
import {Avatar} from '@material-ui/core'

function HeaderOption({Icon, title, avatar,logOut}) {

    return (
        <div className="headerOption">        

            {Icon && <Icon className="headerOption__icon" />}
            {avatar && 
                <Avatar className="headerOption__icon" src={avatar} onClick={() => logOut() } />
            }
            <h3 className="headerOption__title">{title}</h3>            
        </div>
    )
}

export default HeaderOption
