<template>
    <div class="body">
        <SignUpForm @handleSubmit="login"></SignUpForm>
    </div>
</template>

<style lang="scss">
main {
}
</style>
<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
    name: 'Login Manager',
    components: {
        SignUpForm,
    },
    methods: {
        login(data) {
            // Login manager
            console.log(data);
        },
    },
};
</script>
