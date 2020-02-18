import {check, logout} from "@/api/auth";
import router from "@/routes";

export function checkAuth() {
    return check().then((auth) => {
        if (!auth || auth.user !== JSON.parse(localStorage.user).id || !localStorage.user || !localStorage.token) {
            return logout();
        } else {
            return true;
        }
    });
}

export function checkIfNotAuth() {
    return check().then((auth) => {
        if (auth && auth.user === JSON.parse(localStorage.user).id) {
            return router.push('/dashboard');
        } else {
            return true;
        }
    });
}
