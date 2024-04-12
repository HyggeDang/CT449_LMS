<script>
import BookForm from './BookForm.vue';

export default {
    props: {
        masach: {
            type: String,
            required: true,
        },
    },

    components: {
        BookForm,
    },

    data: () => {
        return {
            test: {},
        };
    },
};
</script>

<template>
    <div>
        <h4 class="m-4 text-center">Thêm Sách</h4>
        {{ masach }}
        <BookForm :book="test" />
        <div class="d-flex justify-content-center align-items-center">
            <el-button type="primary" plain>Thêm sách</el-button>
        </div>
    </div>
</template>

<style lang="scss"></style>
