export default {
    name: "directiveRules",
    data() {
        return {
            formValidation: false,
            requiredRules: [
                v => !!v || this.__('commons.form.validation.require'),
            ],

            selectRequiredRules: [
                v => Object.keys(v).length !== 0 || this.__('commons.form.validation.require'),
            ],

            emailRules: [
                v => /.+@.+\..+/.test(v) || this.__('commons.form.validation.email'),
            ],

            comboRequiredRules: [
                v => (!!v && v.length !== 0) || this.__('commons.form.validation.minBox').replace(':nb', 1),
            ],

            numericRules: [
                v => !isNaN(v) || this.__('commons.form.validation.numeric'),
            ]
        }
    },
    methods: {
        maxLengthRules(v, x = 100) {
            return [
                (v) => v.length <= x || this.__('commons.form.validation.maxLength').replace(':nb', x),
            ];
        },
        minLengthRules(v, x = 100) {
            return [
                (v) => v.length >= x || this.__('commons.form.validation.minLength').replace(':nb', x),
            ];
        },
        maxSelectRules(v, x = 1) {
            return [
                v => Object.keys(v).length <= x || this.__('commons.form.validation.maxBox').replace(':nb', x),
            ]
        },
        minSelectRules(v, x = 1) {
            return [
                v => Object.keys(v).length >= x || this.__('commons.form.validation.minBox').replace(':nb', x),
            ]
        },
        maxComboRules(v, x = 2) {
            return [
                v => (v.length <= x) || this.__('commons.form.validation.maxBox').replace(':nb', x),
            ]
        },
        minComboRules(v, x = 1) {
            return [
                v => (v.length >= x) || this.__('commons.form.validation.minBox').replace(':nb', x),
            ]
        },

    }
}

