import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
	return (`
	<div class="row">
		<div class="col-11">
		<!-- Search Bar -->
			<div class="input-group mb-3">
			<i class="fa-solid fa-search wd-top-padding-spe pe-2 ps-3 border-search  bg-white"></i>
			<input type="text" class="form-control no-border-left border-right-round" placeholder="Search Twitter">
			</div>
		</div>
		<div class="col-1">
			<i class="fa-solid fa-gear fa-2x gear-icon-color pt-1"></i>
		</div>
		<!-- Tabs -->
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a class="nav-link active" href="#">For You</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Trending</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">News</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Sports</a>
			</li>
			<li class="nav-item">
				<a class="nav-link d-none d-md-block hide-screen" href="#">Entertainment</a>
			</li>
		</ul>
		<!-- Main Picture -->
		<ul class="list-group ">
			<a href="#" class="list-group-item list-group-item-action p-0 no-border-only-bottom col-12">
			<img src="images/space-x.jpeg" class="pt-2 col-12" alt="Pictured: Space-x's starship"/>
			<h2 class="carousel-caption img-text">SpaceX's Starship</h2>
			</a>
			${PostSummaryList()}
		</ul>
</div>`)
}

export default ExploreComponent;