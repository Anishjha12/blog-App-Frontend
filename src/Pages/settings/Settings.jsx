import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account </span>

                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="writeImg"
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Anish jha"/>
                    <label>Email</label>
                    <input type="email" placeholder="jhaanish891@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>)
}   
