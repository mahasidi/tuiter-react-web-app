const PostSummaryItem = (post) => {
	return (`
	<a href="#" class = "list-group-item list-group-item-action d-inline-block">
		<div class="row">
			<div class="col-10">
				<p><span class="wd-lightgray-text">${post.topic}</span> <br>
				<b>${post.userName}</b> 
				<i class="fa-solid fa-circle-check"></i> <span class="wd-lightgray-text">- ${post.time}</span> <br>
				<b>${post.title}</b>
				</p>
			</div>
		<div class="col-2 m-auto">
			<img src=${post.image} class="rounded-img img-sizing" width="80" height="80" alt="react logo">
		</div>
		</div>
	</a>
	`)
}

export default PostSummaryItem;