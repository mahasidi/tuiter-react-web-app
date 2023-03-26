import React from "react";

const PostSummaryItem = (
	{
		post = {
			"topic": "Space",
			"userName": "SpaceX",
			"time": "2h",
			"title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
			"image": "tesla.jpeg"

		}
	}
) => {
	return (
		<a href="#" className="list-group-item list-group-item-action d-inline-block">
			<div className="row">
				<div className="col-10">
					<p><span className="wd-lightgray-text">{post.userName} • {post.time}</span> <br/>
						<b>{post.userName}</b>
						<br/>
						 {post.title}
					</p>
				</div>
				<div className="col-2 m-auto">
					<img src={require(`../images/${post.image}`)} className="rounded-img img-sizing" width={80} height={80}/>
				</div>
			</div>
		</a>
	)
}

export default PostSummaryItem;