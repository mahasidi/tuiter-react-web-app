import React from "react";
const WhoToFollowListItem = (
	{
		who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
	}
) => {
	return (
		<a href="#" className="list-group-item list-group-item-action d-inline-block">
			<div className="row">
				<div className="col-2">
					<img src={require(`../images/${who.avatarIcon}`)} width={40} height={40} className="rounded-circle"/>
				</div>
				<div className="col-8">
					<b>{who.userName}</b><br/>@{who.handle}
				</div>
				<div className="col-2">
					<button type="button" className="btn btn-primary rounded-pill ps-3 pe-3 float-end">Follow</button>
				</div>
			</div>
		</a>
	);
};

export default WhoToFollowListItem;