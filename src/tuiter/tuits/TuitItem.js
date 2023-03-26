import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
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
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
	}

	return (
		<a href="#" className="list-group-item list-group-item-action d-inline-block">
			<div className="row">
				<div className="col-1">
				<img src={`../../images/${tuit.image}`} width={40} height={40} className="rounded-circle"/>
				</div>
				<div className="col-11">
					<i className="bi bi-x-lg float-end"
					   onClick={() => deleteTuitHandler(tuit._id)}></i>
					<span><b>{tuit.userName}</b> {tuit.handle} • {tuit.time}</span><br/>
					{tuit.tuit}<br/>
					<TuitStats tuit={tuit}/>
				</div>
			</div>
		</a>
	);
}

export default TuitItem;