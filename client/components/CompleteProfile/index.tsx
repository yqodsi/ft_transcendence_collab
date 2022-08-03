import React from "react"
import useState from "react"

const CompleteProfile = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    
    return (
        <div>
            <h3>complete profile</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='username'></label>
                    <input type='text' placeholder='USERNAME' id='username'/>
                </div>
                <div>
                    <input type='checkbox' id='twofa'/>
                    <label htmlFor='twofa'>Activate Tow-factor authentication via Email</label>
                </div>
                <div>
                    <label htmlFor='add-avatar'>Add Avatar</label>
                    <input type='file' id='add-avatar'/>
                </div>
                <input type='submit' value='validate' />
            </form>
        </div>
    );
}

export default CompleteProfile;