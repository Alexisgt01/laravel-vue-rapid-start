import api from '@/api';

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
            return r.data;
        }
    })
}

export function logout() {
    return api.post('logout').then((r) => {
        return r.data;
    });
}


export function check() {
    return api.get('auth/check').then((r) => {
        return r.data;
    })
}
