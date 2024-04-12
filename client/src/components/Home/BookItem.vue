<script>
export default {
    name: 'BookItem',
};
</script>

<template>
    <div class="BookItem m-2">
        <img
            src="https://salt.tikicdn.com/cache/750x750/ts/product/6f/c4/48/574854f032ae36fc0d0a57b61f588965.jpg.webp"
            alt=""
            class="w-100"
        />
        <div class="d-flex justify-content-between align-items-center p-4">
            <div class="d-flex align-items-start justify-content-center flex-column">
                <h5 class="m-0 title">Không biết nữa</h5>
                <span class="author">Không biết luôn</span>
                <p class="quantity">Số lượng: <span>32</span></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.BookItem {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    // max-height: 400px;
    max-width: 190px;
    display: flex;
    flex-direction: column;
    .title {
        font-size: 16px;
    }
    .author {
        font-size: 12px;
        color: #1d9d74;
    }
    .quantity {
        font-size: 14px;
        margin: 12px 0 0 0;
        span {
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>
