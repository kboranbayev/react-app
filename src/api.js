import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/users", { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post("/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/auth/validate_token", { token }),
    resetPassword: data => axios.post("/auth/reset_password", { data }),
    sendMessage: data => axios.post("/auth/send_message", { data }).then(res => res.data)
  }
};
