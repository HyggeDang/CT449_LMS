<script>
import BookItem from '@/components/Home/BookItem.vue';

export default {
    name: 'BookList',
    components: {
        BookItem,
    },
};
</script>

<template>
    <div class="container BookList">
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
    </div>
    <div class="pagination"><el-pagination background layout="prev, pager, next" :total="1000" /></div>
</template>

<style lang="scss">
.BookList {
    min-height: 75vh;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px;
}
</style>
