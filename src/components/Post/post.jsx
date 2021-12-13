import "./post.css"

export default function post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem numquam adipisci.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus cupiditate, possimus sit quis quae eaque asperiores ipsa, corporis, quaerat accusamus cum suscipit dolorem error vero? Mollitia vitae impedit beatae corrupti.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorum delectus saepe alias in ea vitae nihil dolores modi officia libero magni nam! Saepe inventore, magni ducimus maiores quisquam sunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est a aspernatur ipsum alias voluptatem ratione quidem in delectus, odio aut necessitatibus? Laudantium quibusdam eum assumenda quam temporibus provident quae.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum laborum a, hic iure explicabo quae reiciendis eveniet amet dignissimos est recusandae perferendis dolores quod, placeat sit facilis repudiandae animi.</p>

            </div>
        </div>
    )
}
