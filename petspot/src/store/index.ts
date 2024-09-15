import { reactive, readonly } from "vue";

// Definir o estado reativo
const state = reactive({
  user: null as string | null,
  isAuthenticated: false,
});

// Funções para manipular o estado
const setUser = (user: string) => {
  state.user = user;
  state.isAuthenticated = !!user;
};

const logout = () => {
  state.user = null;
  state.isAuthenticated = false;
};

export default {
  state: readonly(state),
  setUser,
  logout,
};
