const WhoToFollowListItem = (who) => {
	return (`
		<a href="#" class = "list-group-item list-group-item-action d-inline-block"> 
			<div class="row"> 
				<div class="col-2"> 
					<img src=${who.avatarIcon} width="40px" height="40px" class="rounded-circle">
				</div> 
				<div class="col-8"> 
					${who.userName} <i class="fa-solid fa-circle-check"></i><br/>@${who.handle} 
				</div> 
		        <div class="col-2"> 
					<button type="button" class="btn btn-primary rounded-pill ps-3 pe-3 float-end">Follow</button> 
		        </div> 
		    </div> 
		 </a>
	`)
}
export default WhoToFollowListItem;