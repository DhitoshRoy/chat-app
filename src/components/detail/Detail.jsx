
import { auth } from "../../../Lib/firebase";
import "./detail.css";
const Detail =()=>{

    return(

        <div className="detail"> 
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h3>name one</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>chat setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>shared photos</span>
                        <img src="./arrowDown.png" alt="" />

                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                src="https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="" 
                                />
                                <span>Photo_2024_3.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                src="https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="" 
                                />
                                <span>Photo_2024_4.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>

                        
                        
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="./arrowUp.png" alt="" />
                        


                    </div>
                </div>
                <button>Block user</button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>

    );
};

export default Detail