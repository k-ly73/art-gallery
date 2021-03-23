import React from 'react';
import '../assets/css/post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post-header">
                {/*Header avatar and username */}
                <Avatar 
                    className="post-avatar"
                    alt="profile"    
                />
                <h3>Username</h3>

            </div> 

            {/* image */}
            <img className="post-image"src="../assets/images/turtle-rock-hill.jpg"/>

            {/* username + caption */}
            <h4 className="post-text"><strong>kevinly1</strong> caption</h4>

        </div>
    )
}
export default Post