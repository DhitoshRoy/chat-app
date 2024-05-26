


// import ChatList from "./Chatlist/ChatList";
// import Userinfo from "./userInfo/Userinfo";

// import "./list.css";

// const List =()=>{

//     return(

//         <div className="list ">  
//             <Userinfo/>
//             <ChatList/>
            
        
//         </div>
//     )
// }

// export default List

import ChatList from "./Chatlist/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List