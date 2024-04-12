<script>
import { ElButton } from 'element-plus';
import BookList from '@/components/Home/BookList.vue';
import Header from '@/components/Header.vue';

export default {
    name: 'Home',
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
            quantity: 0,
        };
    },
    methods: {
        handleChange(value) {
            this.quantity = value;
        },
        handleBorrow() {
            console.log(this.quantity);
        },
    },
};
</script>

<template>
    <Header></Header>
    <main class="container">
        <div class="detail-container mt-4">
            <div>
                <img
                    class="image"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/6f/c4/48/574854f032ae36fc0d0a57b61f588965.jpg.webp"
                    alt=""
                />
            </div>
            <div class="detailInfor">
                <h4 class="title">Mèo Chiến Binh - Tập 6 - Thời Khắc Tăm Tối</h4>
                <p class="author">Tác giả: Erin Hunter</p>
                <p class="quantity">Số lượng còn lại: <span>64</span></p>
                <p class="pay">136,000 đ</p>
                <div class="borrow-container">
                    <span class="borrow-quantity">Số lượng</span>
                    <el-input-number v-model="quantity" :min="1" :max="4" @change="handleChange" />
                    <div class="mt-3">
                        <el-button type="warning" plain @click="handleBorrow">Mượn sách</el-button>
                    </div>
                </div>
                <div>
                    <h6 class="title-description">Chi tiết sách:</h6>
                    <p class="detail">Tác giả: Không biết luôn</p>
                    <p class="detail">Nhà xuất bản: Không biết luôn</p>
                    <p class="detail">Năm xuất bản: Không biết luôn</p>
                </div>
                <div>
                    <h6 class="title-description">Giới thiệu sản phẩm:</h6>
                    <p class="description">
                        CHỈ CÓ LỬA MỚI CÓ THỂ CỨU ĐƯỢC TỘC CỦA CHÚNG TA… Thời khắc tăm tối nhất của tộc Sấm đang đến
                        gần, khi khát khao quyền lực của Sao Hổ đẩy tất cả các tộc vào mối nguy hiểm kinh hoàng. Để cứu
                        lấy tộc và những người bạn của mình, Tim Lửa phải tìm ra ý nghĩa ẩn giấu đằng sau lời sấm truyền
                        đáng ngại đến từ tộc Sao: “Bốn sẽ biến thành hai. Sư tử sẽ tranh đấu với hổ, và máu sẽ thống trị
                        khu rừng này.” Đã tới lúc hàm ý của những lời tiên tri dần mở ra, và cũng là thời điểm những anh
                        hùng trỗi dậy...
                    </p>
                </div>
            </div>
        </div>
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
