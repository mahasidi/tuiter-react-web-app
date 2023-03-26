import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home/index.js"

import {Routes, Route} from "react-router";
import whoReducer
	from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
	from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
	{reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
	return(
		<Provider store={store}>
		<div className="row mt-2">
			<Nav/>
			<div className="col-2 col-md-2 col-lg-1 col-xl-2">
			<NavigationSidebar active="home"/>
			</div>
			<div className="col-10 col-lg-7 col-xl-6">
				<Routes>
				<Route path="/" element={<HomeComponent/>}/>

				</Routes>
			</div>
			<div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
			<WhoToFollowList/>
			</div>
		</div>
			</Provider>
	)
}
export default Tuiter