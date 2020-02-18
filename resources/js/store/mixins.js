/**
 * lots of use
 * Global mixins
 */

export default {
    methods: {
        /**
         *
         * @param e {object} error object . status:422 = form errors / status:401 other errors
         */
        showError(e) {
            let p = '';
            if (e.response && e.response.status === 422) {
                p = `${this.__('commons.error.post')}. `;
                let forms = e.response.data.message;
                forms.forEach((el) => {
                    p += `${el.field}: ${el.message}  `;
                });
            } else {
                p = e.response ? e.response.data.message : e.message;
            }
            this.$store.dispatch('events/showAlert', {
                show: true,
                text: p,
                color: 'error',
            })
        },

        showSuccess(r) {
            this.$store.dispatch('events/showAlert', {
                show: true,
                text: r.message,
                color: 'success',
            });
        },

        showAlertText(t, color = 'error') {
            this.$store.dispatch('events/showAlert', {
                show: true,
                text: t,
                color,
            });
        },

        keyChanger(target = 'global', accept = 'all') {
            this.$store.dispatch('events/changeKey', {
                target,
                accept,
            })
        }
    }
}
