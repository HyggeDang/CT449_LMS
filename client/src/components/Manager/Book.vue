<script>
import { ElButton, ElInput } from 'element-plus';
export default {
    components: {
        ElInput,
    },
    data() {
        return {
            books: [
                {
                    date: '2016-05-03',
                    tensach: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    tensach: 'John',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    tensach: 'Morgan',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    tensach: 'Jessy',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ],
            search: '',
        };
    },
    computed: {
        filteredBooks() {
            if (this?.books) {
                return this.books.filter((book) => book.tensach.toLowerCase().includes(this.search.toLowerCase()));
            }
            return [];
        },
    },
    methods: {
        handleNavigateToAddBook() {
            this.$router.push({
                name: 'add-book',
            });
        },
    },
};
</script>

<template>
    <div class="Book">
        <h4 class="text-center m-2">Quản lý sách</h4>
        <div class="container create-btn-container d-flex justify-content-end">
            <el-button type="primary" plain @click="handleNavigateToAddBook">Thêm sách mới</el-button>
        </div>
        <div class="container table-container">
            <el-table :data="filteredBooks" style="width: 100%">
                <el-table-column type="expand">
                    <template #default="scope">
                        <div class="row">
                            <div class="col-6">
                                <p m="t-0 b-2">Tên sách: {{ scope.row?.tensach }}</p>
                                <p m="t-0 b-2">Đơn giá: {{ scope.row?.dongia }}</p>
                                <p m="t-0 b-2">Tổng số quyển: {{ scope.row?.soquyen }}</p>
                                <p m="t-0 b-2">Năm xuất bản: {{ scope.row?.namxuatban }}</p>
                            </div>
                            <div class="col-6">
                                <p m="t-0 b-2">Nhà xuất bản: {{ scope.row?.manxb?.TenNxb }}</p>
                                <p m="t-0 b-2">Tác giả: {{ scope.row?.tacgia }}</p>
                                <p m="t-0 b-2">Số lượng đã mượn: {{ scope.row?.soquyendamuon }}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column type="index" label="STT"> </el-table-column>
                <el-table-column label="Mã sách" prop="date" />
                <el-table-column label="Tên Sách" prop="tensach">
                    <template #default="scope">
                        <router-link to="/book/1">
                            {{ scope.row.tensach }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column label="Đơn giá" prop="dongia" />
                <el-table-column label="Số lượng trong kho">
                    <template #default="scope">
                        {{ scope?.row?.soquyen - scope.row?.soquyendamuon || 0 }}
                    </template>
                </el-table-column>
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Nhập tên sách để tìm kiếm" />
                    </template>
                    <template #default="scope">
                        <el-button size="small">Chỉnh sửa</el-button>
                        <el-button size="small" type="danger">Xóa</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style lang="scss">
.book {
    .table-container {
    }
}
</style>
