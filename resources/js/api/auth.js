import api from '@/api';
import router from "../routes";
export async function login(email, password) {
    return api.post('/login', {
            email: email,
            password: password,
        },
        {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            }
        }).then((r) => {
        if (r.data.auth) {
            localStorage.setItem('token', r.data.access_token);
            localStorage.setItem('user', JSON.stringify(r.data.me));
            if (localStorage.token) {
                window.location = '/dashboard';
            }
        }
    })
}

export function logout() {
    api.get('logout').then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    });
}


export function check() {
    return api.get('auth/check').then((r) => {
        return r.data;
    })
}
