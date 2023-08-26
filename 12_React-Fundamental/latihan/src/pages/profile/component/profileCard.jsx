import React from "react";

function ProfileCard({user}){

    return (
        <div className="profile-card">
            <img src={user.avatar} alt="avatar" />
            <div className="profile-body">
                <h4>{user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default ProfileCard;