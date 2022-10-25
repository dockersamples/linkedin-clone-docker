import React, {forwardRef} from 'react'
import {Avatar} from '@material-ui/core'
import '../css/Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


const Post = forwardRef(({name, user, description, image, message}, ref) => {
   
  
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                    <Avatar src={image}/>
                    <div className="post__info">
                        <h2>{name}</h2>
                        
                        <p>{description}</p>
            </div>
            </div>
           

            <div className="post__body">
               {message}
            </div>


            <div className="post__buttons">
               

                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
                <InputOption Icon={CommentIcon} title="Comment" />
                <InputOption Icon={ShareIcon} title="Share" />
                <InputOption Icon={SendIcon} title="Send" />

              
              

            </div>
            
        </div>
    )
})

export default Post;