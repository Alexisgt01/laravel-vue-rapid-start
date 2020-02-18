import api from '@/api';

/* eslint-disable no-console */

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                               Basic CRUD action
 * ============================================================================
 */

class Ressources {
    constructor(controller) {
        this.controller = controller;
    }

    list(query = null) {
        return api.get(`${this.controller}/list`, {
            params: query,
        }).then((r) => {
            return r.data;
        })
    }

    show(id, query = null) {
        return api.get(`${this.controller}/show/${id}`, {
            params: query
        }).then((r) => {
            return r.data;
        })
    }

    add(data) {
        return api({
            method: 'post',
            url: `${this.controller}/add`,
            data: data,
        }).then((r) => {
            return r.data;
        })
    }

    update(id, data) {
        return api({
            method: 'post',
            url: `${this.controller}/update/${id}`,
            data: data,
        }).then((r) => {
            return r.data;
        })
    }

    delete(id) {
        return api({
            method: 'post',
            url: `${this.controller}/${id}/delete`,
        })
    }

    search(query) {
        return api({
            method: 'get',
            url: `${this.controller}/search`,
            params: query,
        })
    }
}

export default Ressources;
