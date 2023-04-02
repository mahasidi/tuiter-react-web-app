import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk}
	from "../../services/tuits-thunks";

const initialState = {
	tuits: [],
	loading: false
}


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
	initialState,
	extraReducers: {
		[findTuitsThunk.pending]:
			(state) => {
				state.loading = true
				state.tuits = []
			},
		[findTuitsThunk.fulfilled]:
			(state, { payload }) => {
				state.loading = false
				state.tuits = payload
			},
		[findTuitsThunk.rejected]:
			(state, action) => {
				state.loading = false
				state.error = action.error
			},
		[deleteTuitThunk.fulfilled] :
			(state, { payload }) => {
				state.loading = false
				state.tuits = state.tuits
					.filter(t => t._id !== payload)
			},
		[createTuitThunk.fulfilled]:
			(state, { payload }) => {
				state.loading = false
				state.tuits.push(payload)
			},

		[updateTuitThunk.fulfilled]:
			(state, { payload }) => {
				state.loading = false
				const tuitNdx = state.tuits
					.findIndex((t) => t._id === payload._id)
				state.tuits[tuitNdx] = {
					...state.tuits[tuitNdx],
					...payload
				}
			}

	},
	reducers: { }
});


export const {createTuit, deleteTuit, updateLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;

