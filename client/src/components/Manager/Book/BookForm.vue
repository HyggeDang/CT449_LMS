<script>
export default {
    components: {},
    props: {
        book: {
            type: Object,
            required: false,
        },
    },
    data: () => {},
    methods: {
        submit() {
            this.$emit('handleSubmit', this.book);
        },
    },
};
</script>

<template>
    <div class="nxb">
        <div class="d-flex flex-column">
            <label>Tên sách:</label>
            <el-input v-model="book.tensach" style="width: 300px" size="large" placeholder="Nhập tên sách" />
        </div>
        <div class="d-flex flex-column my-2">
            <label>Đơn giá (VND):</label>
            <el-input
                v-model="book.dongia"
                type="number"
                style="width: 300px"
                size="large"
                placeholder="Nhập đơn gái"
            />
        </div>
        <div class="d-flex flex-column my-2">
            <label>Số quyển:</label>
            <el-input v-model="book.soquyen" style="width: 300px" size="large" placeholder="Nhập địa chỉ" />
        </div>
        <div class="d-flex flex-column my-2" style="width: 300px">
            <label>Nhà xuất bản:</label>
            <el-select
                class="w-100"
                v-model="book.manxb"
                placeholder="Chọn nhà xuất bản"
                size="large"
                style="width: 240px"
            >
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="d-flex flex-column my-2">
            <label>Năm xuất bản:</label>
            <el-input
                v-model="book.namxuatban"
                type="number"
                style="width: 300px"
                size="large"
                placeholder="Nhập năm xuất bản"
            />
        </div>
        <div class="d-flex flex-column my-2">
            <label>Tác giả:</label>
            <el-input v-model="book.tacgia" style="width: 300px" size="large" placeholder="Nhập tác giả" />
        </div>
        <div class="d-flex flex-column my-2" style="width: 300px">
            <label>Hình ảnh:</label>
            <el-input v-model="book.image" style="width: 300px" size="large" placeholder="Nhập Link ảnh" />
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <el-button type="primary" plain @click="submit">Lưu</el-button>
        </div>
    </div>
</template>

<style lang="scss">
.nxb {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
