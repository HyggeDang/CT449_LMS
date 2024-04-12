<script>
import { ElButton } from 'element-plus';
import BookList from '@/components/Home/BookList.vue';
import Header from '@/components/Header.vue';

export default {
    name: 'history',
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    components: {
        ElButton,
        BookList,
        Header,
    },
    data() {
        return {
            tableData: [
                {
                    id: '2016-05-03',
                    name: 'Alo',
                    status: 'Chờ mượn',
                },
                {
                    id: '2016-05-02',
                    name: 'Tom',
                    status: 'Đã mượn',
                },
                {
                    id: '2016-05-04',
                    name: 'Tom',
                    status: 'Đã trả',
                },
                {
                    id: '2016-05-01',
                    name: 'Tom',
                    status: 'Chờ mượn',
                },
            ],
        };
    },
    methods: {
        handleDelete() {
            console.log(1);
        },
    },
};
</script>

<template>
    <Header></Header>

    <main class="container">
        <h1 class="text-center m-2">Lịch sử mượn sách</h1>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="Mã mượn" width="180" />
            <el-table-column label="Tên sách" width="180">
                <template #default="scope">
                    <router-link :to="`/book/${1}`">
                        {{ scope.row.name }}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Ngày mượn" />
            <el-table-column prop="status" label="Ngày trả" />
            <el-table-column prop="status" label="Trạng thái" />
            <el-table-column align="right">
                <template #default="scope">
                    <el-button
                        v-if="scope.row.status === 'Chờ mượn'"
                        size="small"
                        @click="handleDelete(scope.$index, scope.row)"
                        ><el-icon>
                            <span class="delete-icons"><DeleteFilled /></span></el-icon
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
    </main>
</template>

<style lang="scss">
main {
    .detail-container {
        padding: 16px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        display: flex;
        flex-direction: row;
        .image {
            max-width: 300px;
        }
        .detailInfor {
            .title {
                margin-bottom: 2px;
            }
            .author {
                margin-top: 0;
                margin-bottom: 4px;
                color: #1d9d74;
            }
            .pay {
                font-size: 26px;
                color: #fe642e;
                font-weight: 600;
            }
            .quantity {
                span {
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            .borrow-container {
                margin-top: 32px;
                .borrow-quantity {
                    margin-right: 8px;
                }
            }

            .title-description {
                margin-top: 64px;
            }
            .detail {
                margin: 2px;
            }
        }
    }
}
</style>
