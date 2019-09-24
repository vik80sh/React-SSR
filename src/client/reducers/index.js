import { combineReducers } from "redux";
import usersReduces from "./usersReduces";

export default combineReducers ({
    users : usersReduces
});