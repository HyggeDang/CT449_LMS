<script>
export default {
    components: {},
    data: () => {
        return {
            SoDienThoai: '',
            password: '',
        };
    },
    methods: {
        routeBookCheck() {
            return this.$router.currentRoute._value.name;
        },
        submit() {
            this.$emit('handleSubmit', {
                SoDienThoai: this.SoDienThoai,
                password: this.password,
            });
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="loginContainer">
            <div class="loginBox">
                <div>
                    <img src="../assets/img/logo.jpg" class="logo" />
                </div>
                <div class="flex gap-1 m-4">
                    <input
                        type="text"
                        class="form-control mt-4"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Số điện thoại"
                        v-model="SoDienThoai"
                    />
                    <input
                        type="password"
                        class="form-control mt-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Mật khẩu"
                        v-model="password"
                    />
                </div>
                <button type="button" class="btn btn-primary" @click="submit">Đăng nhập</button>
                <span v-if="routeBookCheck() != 'loginmanager'" class="mt-4"
                    >Nếu chưa có tài khoản? <router-link to="/signup"><span>Đăng ký</span></router-link></span
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container {
    .loginContainer {
        min-width: 800px;
        min-height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .loginBox {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 120px 100px;
            border-radius: 20px;
            background-image: linear-gradient(to right, #3064e6, #8551ff);
            .logo {
                width: 80px;
                border-radius: 15px;
            }
            .btn-primary{
                border: 2px solid white;
                background-color: transparent;
            }
            .btn-primary:hover{
                background-color: white;
                color: black;
            }

            .input {
                border: 1px solid white;
            }

            span{
                color: white;
                text-decoration: none;

            }
        }
    }
}
</style>
