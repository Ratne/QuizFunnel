import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const steps = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}
export default steps;