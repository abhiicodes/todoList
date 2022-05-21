import { legacy_createStore as createStore } from "redux";

import { allReducers } from "./reducer";

export const store = createStore(allReducers,{todo:[]})