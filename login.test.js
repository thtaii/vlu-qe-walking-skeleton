const login = require("./login");

// Test hàm đăng nhập
describe("Login Function", () => {

    test("Đăng nhập đúng tài khoản", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập sai username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Đăng nhập sai password", () => {
        expect(login("admin", "456")).toBe(false);
    });

});
