import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className ="post">
            <div className="post-header">
                <Avatar 
                    className="post-avatar"
                    alt="user"
                    
                />
                <h3>User</h3>
            </div>

        </div>
    )
}