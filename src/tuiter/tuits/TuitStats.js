import React from "react";
import {useDispatch} from "react-redux";
import {updateLikes} from "./tuits-reducer";

const TuitStats = (
	{
		tuit =  {
			"_id": 234,
			"topic": "Space",
			"userName": "SpaceX",
			"time": "2h",
			"title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
			"image": "spacex.jpeg",
			"liked": true,
			"replies": 123,
			"retuits": 432,
			"likes": 2345,
			"handle": "@spacex",
			"tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
		}
	}
) => {

	const dispatch = useDispatch();
	const updateLikesHandler = () => {
		dispatch(updateLikes());
	}

	return (
			<div className="row d-inline">
				<img src={`message-circle.svg`} alt={'comment button'}/>{tuit.replies}
					<img src={`tuits/images/repeat.svg`} alt={'retweet button'}/>{tuit.retuits}
						 <img src={`./images/heart.svg`} alt={'like button'}
						      onClick = {() => updateLikesHandler()}
						 />{tuit.likes}
				<img src={`./images/share.svg`} alt={'share button'}/>
			</div>
	);
}

export default TuitStats;