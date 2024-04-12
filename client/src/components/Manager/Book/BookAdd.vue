<script>
import BookForm from './BookForm.vue';

export default {
    components: {
        BookForm,
    },

    data: () => {
        return {
            data: {},
        };
    },
    methods: {
        addBook(data) {
            console.log(data);
        },
    },
};
</script>

<template>
    <div>
        <h4 class="m-4 text-center">Thêm Sách</h4>
        <BookForm :book="data" @handleSubmit="addBook" />
    </div>
</template>

<style lang="scss"></style>
