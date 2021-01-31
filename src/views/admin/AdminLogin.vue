<template>
    <a-row class="admin-login">
        <a-col span="8" offset="8" class="login-card">
            <div class="login-title">
                管理员登录
            </div>
            <div class="login-form">
                <a-row>
                    <a-col class="login-form-input username" span="24">
                        <a-input class="username"
                                 v-model="username"
                                 placeholder="username"
                                 size="large"/>
                    </a-col>

                    <a-col class="login-form-input pwd" span="24">
                        <a-input-password class="pwd"
                                          v-model="password"
                                          placeholder="password"
                                          size="large"/>
                    </a-col>

                    <a-col class="login-form-input submit" span="24">
                        <a-button block size="large" @click="login">
                            登录
                        </a-button>
                    </a-col>
                </a-row>
            </div>
        </a-col>
    </a-row>

</template>

<script>
    export default {
        name: "AdminLogin",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log("username:" + this.username);
                console.log("password:" + this.password);
                if (this.username === 'admin' && this.password === '123456') {
                    this.$router.push({
                        path: '/admin'
                    })
                }
            }
        }
    }
</script>

<style lang="less">
    .admin-login {
        text-align: center;
        padding-top: 7%;

        .login-title, .login-form-input {
            background-color: var(--my-cyan);
        }

        .login-title {
            color: var(--my-white);
            font-size: var(--h2);
            font-weight: bold;
            padding: 2em 1em 1em 1em;
        }

        .login-form {
            .login-form-input {
                text-align: center;
                padding: 0.8em 3em;
            }
            .submit {
                padding-bottom: 8em;
            }
        }
    }
</style>