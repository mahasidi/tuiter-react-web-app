import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"image": "nasa.png",
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

			if (tuit.liked) {
				tuit.likes--;
				tuit.liked = false;
				// make empty heart
			} else {
				tuit.likes++;
				tuit.liked = true;
				// make full heart
			}
		}

	}
});

export const {createTuit, deleteTuit, updateLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;

