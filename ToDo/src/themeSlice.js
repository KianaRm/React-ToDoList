import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "dark"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme:(state  )=>{
            console.log("Theme changed")
            state.status = state.status === "dark" ? "light": "dark";

        }

    },
});
export const {changeTheme  } = themeSlice.actions;
export default themeSlice.reducer;