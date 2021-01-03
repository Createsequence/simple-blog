<template>
    <div class="admin-login">
        <div class="login-title">
            管理员登录
        </div>
        <a-row class="login-form">

            <a-col class="login-form-input username" :xs="{span:8, offset:8}">
                <a-input class="username"
                         v-model="username"
                         placeholder="username"
                         size="large"/>
            </a-col>

            <a-col class="login-form-input pwd" :xs="{span:8, offset:8}">
                <a-input-password class="pwd"
                                  v-model="password"
                                  placeholder="password"
                                  size="large"/>
            </a-col>

            <a-col class="login-form-input submit" :xs="{span:4, offset:10}">
                <a-button block size="large" @click="login">
                    登录
                </a-button>
            </a-col>

        </a-row>
    </div>
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
        padding-top: 10%;

        .login-title {
            font-size: var(--h2);
            font-weight: bold;
            padding-bottom: 1em;
        }

        .login-form-input {
            text-align: center;
            padding: 0.5em 3em;
        }
    }
</style>