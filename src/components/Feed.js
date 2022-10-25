import React, {useState, useEffect} from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import InputOption from '../components/InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import axios from 'axios'
import FlipMove from 'react-flip-move';
// docker run -p 27017:27017 -v /Users/ellarnol/linkedInDB:/data/db  mongo:latest


export default function Feed({user}) {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState([])
    const [newData, setNewData] = useState(false)
        
    useEffect(() => {
        const url = process.env.REACT_APP_GET_POSTS
        // const url = "http://localhost:9000/v1/linkedIn/posts"
        axios.get(url).then(data => {console.log(data); setPosts(data.data)})
        setNewData(false)
    }, [newData] )


    const sendPost = (e) => {
        e.preventDefault();
        const isoDateString = new Date().toISOString();
        // const url = "http://localhost:9000/v1/linkedIn/addPost"
        const url = process.env.REACT_APP_ADD_POST
        const data = {
            message: input,
            description: user.email,
            username: user.username,
            userImage: user.userImage,
            timeStamp: isoDateString

        }
     
        axios.post(url,data).then(data => {setNewData(true) ;
          
        setInput('');
        
        console.log(data)})       
      

    }

   const handleChange = (e) => {
       e.preventDefault()
       setInput(e.target.value)
       
   }

    return (
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed__input" >
                        <CreateIcon />
                        <form>
                            <input onChange={handleChange} value={input} type="text"/>
                            <button 
                            onClick={sendPost}
                            type="submit">SEND</button>


                        </form>
                </div>
                <div className="feed__inputOptions">
               
               <InputOption Icon={ImageIcon} color={"#70B5f9"} title="Photo" />
   
               <InputOption Icon={SubscriptionsIcon} color={"#E7A33E"} title="Video" />

               <InputOption Icon={EventNoteIcon} color={"gray"} title="Event" />

               <InputOption Icon={CalendarViewDayIcon} color={"#7FC15E"} title="Write Article" />
                
                
               </div>
            </div>
           <FlipMove>
           {posts.map((post) => 
             <Post 
                key={post._id}
                image={post.userImage}
                name={post.username}
                description={post.email}
                message={post.message} 
                user={user}
                />).reverse()}

           </FlipMove>
           
                

          
        </div>
    )
}

