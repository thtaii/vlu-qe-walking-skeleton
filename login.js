function login(user, pass) {
    if (user === "admin" && pass === "1234") {
        return true;
    }

    return false;
}

// Cho phép sử dụng hàm trong Jest (Node.js)
if (typeof module !== "undefined") {
    module.exports = login;
}
