import React from "react";
import ProfileCard from "./component/profileCard";
import Navbar from "./component/navbar";

function ProfilePage({users}){
    return (
        <div>
            <header>
            <Navbar text="Profile Page" />
            </header>
            <main className="profil-body">
            {users.map((user) => 
                <ProfileCard user={user} key={user.id} />
            )}
            </main>
        </div>
    )
}

export default ProfilePage;