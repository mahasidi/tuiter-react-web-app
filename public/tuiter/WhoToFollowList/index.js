import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
	return (`
	<div class="list-group me-5">
		<a href="#" class="list-group-item list-group-item-action">
		<b>Who to follow</b></a>
		${who.map(who => {
			return (WhoToFollowListItem(who));
		}
	).join("")}
`);
}

export default WhoToFollowList;