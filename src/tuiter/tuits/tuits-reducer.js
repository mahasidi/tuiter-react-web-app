import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"image": "https://i.ibb.co/FDT1ngc/Screen-Shot-2023-03-26-at-3-09-36-PM.png"
};

const templateTuit = {
	...currentUser,
	"topic": "Space",
	"time": "2h",
	"liked": false,
	"replies": 0,
	"retuits": 0,
	"likes": 0,
}

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState: tuits,
	reducers: {
		createTuit(state, action) {
			state.unshift({
				...action.payload,
				...templateTuit,
				_id: (new Date()).getTime(),
			})
		},
		deleteTuit(state, action) {
			const index = state
				.findIndex(tuit =>
					tuit._id === action.payload);
			state.splice(index, 1);
		},
		updateLikes(state, action) {
			const index = state
				.findIndex(tuit =>
					tuit._id === action.payload);
			const tuit = state[index];

			const heartElement = document.getElementById(tuit._id);

			if (tuit.liked) {
				tuit.likes--;
				tuit.liked = false;
				// make empty heart
				console.log("you pressed and its been liked");
				heartElement.className = "bi bi-heart";

			} else {
				tuit.likes++;
				tuit.liked = true;
				// make full heart
				console.log("you pressed and its not been liked");
				heartElement.className = "text-danger bi bi-heart-fill";
			}
		}

	}
});

export const {createTuit, deleteTuit, updateLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;

