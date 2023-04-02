import React from "react";
import {useDispatch} from "react-redux";
import {updateLikes} from "./tuits-reducer";
import {updateTuitThunk}
	from "../../services/tuits-thunks";

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
			"disliked": false,
			"replies": 123,
			"retuits": 432,
			"likes": 2345,
			"dislikes": 890,
			"handle": "@spacex",
			"tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
		}
	}
) => {

	const dispatch = useDispatch();
	const heartElement = document.getElementById(tuit._id);

	return (
			<div className="row d-inline">
				<i className="bi bi-chat"></i>{tuit.replies}
				<i className="bi bi-arrow-repeat heart"></i>{tuit.retuits}
				<i onClick={() => dispatch( updateTuitThunk({
						...tuit,
						likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
						liked: !tuit.liked,
					})
				)
				}
					className={`bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`}
				></i>
						 {tuit.likes}
				<i onClick={() => dispatch( updateTuitThunk({
						...tuit,
						dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
						disliked: !tuit.disliked,
					})
				)
				}
				   className={`bi ${tuit.disliked ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down"}`}
				></i>
				{tuit.dislikes}
				<i className="bi bi-share"></i>
			</div>
	);
}

export default TuitStats;