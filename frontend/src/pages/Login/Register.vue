<template>
    <body class="hold-transition register-page">
        <div class="register-box">
            <div class="register-logo">
                <a href="../../index2.html"><b>Library</b>System</a>
            </div>
            <div class="register-box-body">
                <p class="login-box-msg">Register a new account</p>
                <form>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" v-focus-next-on-enter="'input2'" placeholder="User Code" v-model = "usercode">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" ref = "input2" placeholder="Email" v-model = "email">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password" v-model = "password">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Retype password" v-model = "repassword">
                        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                    </div>
                </form>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click = "register()">Register</button>
                <div style="margin-top:10px">
                    <a href="#/login/authlogin" class="text-center">I already have a account</a>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            usercode: '',
            email: '',
            password: '',
            repassword: ''
        }
    },
    methods: {
        async register(){
            if(this.usercode&&this.email&&this.password){
                if(this.repassword == this.password){
                    var res = await axios.post('/api/auth/register', {
                        usercode: this.usercode,
                        email: this.email,
                        password: this.password
                    })
                    console.log(res);
                    if(res.data.registed == true){
                        this.$router.push({//你需要接受路由的参数再跳转
                            path: '/login/authlogin'
                        });
                    } else {
                        this.$Message.error('Register Failed')
                    }
                } else {
                    this.$Message.error('Two Password Not Same')
                }
            } else {
                this.$Message.error('NotNull')
            }
        }
    }
}
</script>
<style scoped>
</style>