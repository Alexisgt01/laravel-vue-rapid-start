<template>
    <v-content>
        <alert></alert>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>{{__('auth.login.title')}}</v-toolbar-title>
                            <v-spacer/>
                        </v-toolbar>
                        <v-card-text>
                            <v-form lazy-validation ref="form" v-model="formValidation">
                                <v-text-field :error="loginFail" :rules="[...requiredRules, ...emailRules]"
                                    v-model="email" :label="__('commons.form.email')" prepend-icon="fa fa-user"
                                    type="email"/>
                                <v-text-field :error="loginFail" v-model="password" :rules="[...requiredRules]"
                                    :label="__('commons.form.password')" prepend-icon="fa fa-lock" type="password"/>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn color="primary" @click="login(email, password)">{{__('commons.form.submit')}}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import rules from '@/directive/rules';
    import alert from "@/components/layout/alert";

    export default {
        name: "login",
        mixins: [rules],
        components: {alert},
        data() {
            return {
                email: '',
                password: '',
                loginFail: false,
                render: false,
            }
        },
        created() {
            let self = this;
        },
        methods: {
            login() {
                let formRules = this.$refs.form.validate();
                if (formRules) {
                    this.$store.dispatch('auth/login', {email: this.email, password: this.password}).then((r) => {
                        this.showSuccess(r);
                    }).catch((e) => {
                        this.showError(e);
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>
