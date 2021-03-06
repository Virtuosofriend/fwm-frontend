const socketLogin = async ({ commit, state }, data) => {
    try {
        let message = `{
            "authenticateuser": {
                "user_id":  ${ state.user.id },
                "token":    "${ state.user.token }"
            }
        }`;   
        return true;
    } catch(e) {
        return false;
    }
};

const logout = ({ commit }) => {
    localStorage.removeItem("bm_token");
    localStorage.removeItem("bm_user");
    localStorage.removeItem("bm_userID");
    localStorage.removeItem("bm_avatar");
    commit("session", { token: "", user: "", id: "", avatar: `${process.env.BASE_URL}img/avatars/default.png`});
};

export default {
    logout,
    socketLogin
};