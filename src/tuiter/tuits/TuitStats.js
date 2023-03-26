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
			"liked": false,
			"replies": 123,
			"retuits": 432,
			"likes": 2345,
			"handle": "@spacex",
			"tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
		}
	}
) => {

	const dispatch = useDispatch();
	const updateLikesHandler = (id) => {
		dispatch(updateLikes(id));
	}

	return (
			<div className="row d-inline">
				<i className="bi bi-chat"></i>{tuit.replies}
				<i className="bi bi-arrow-repeat heart"></i>{tuit.retuits}
				<i className="bi bi-heart" id={tuit._id} onClick = {() => updateLikesHandler(tuit._id)}></i>
						 {tuit.likes}
				<i className="bi bi-share"></i>
			</div>
	);
}

export default TuitStats;