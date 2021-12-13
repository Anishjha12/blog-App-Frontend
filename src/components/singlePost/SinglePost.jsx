import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
                    alt=""
                    className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fas fa-edit"></i>
                        <i class="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Anish Jha</b>
                    </span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Maxime sequi facilis mollitia deleniti 
                quas, minima delectus repellat eveniet aperiam 
                reiciendis eius quos, in expedita voluptas quia 
                tempora porro ipsa amet.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Maxime sequi facilis mollitia deleniti 
                quas, minima delectus repellat eveniet aperiam 
                reiciendis eius quos, in expedita voluptas quia 
                tempora porro ipsa amet.Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Maxime sequi facilis mollitia deleniti 
                quas, minima delectus repellat eveniet aperiam 
                reiciendis eius quos, in expedita voluptas quia 
                tempora porro ipsa amet.Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Maxime sequi facilis mollitia deleniti 
                quas, minima delectus repellat eveniet aperiam 
                reiciendis eius quos, in expedita voluptas quia 
                tempora porro ipsa amet.Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Maxime sequi facilis mollitia deleniti 
                quas, minima delectus repellat eveniet aperiam 
                reiciendis eius quos, in expedita voluptas quia 
                tempora porro ipsa amet.
                </p>
            </div>
        </div>
    )
}
