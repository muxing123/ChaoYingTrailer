<template>
	<view>
		<view class="yellow">
			<view class="bg">
				<view class="registerlogin">
					<view class="left">
						<image src="../../static/images/default-face.png" lazy-load class="img"></image>
					</view>
					<view class="user" v-if="username">
						<view class="name">{{ username }}</view>
						<view class="id">ID:{{ id }}</view>
						<view class="set" @click="goMyDetail">
							<image src="../../static/images/set.png" lazy-load class="img"></image>
						</view>
					</view>
					<view class="text" @click="goRegisterLogin" v-else>注册/登录{{username}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			username: '',
			id: ''
		};
	},
	methods: {
		// 去登录注册页面
		goRegisterLogin() {
			uni.navigateTo({
				url: '/pages/registerlogin/registerlogin',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		// 去我的资料
		goMyDetail() {
			uni.navigateTo({
				url: '/pages/mydetail/mydetail',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	},
	mounted() {
	},
	onLoad() {
		// this.username = this.$store.state.username;
	},
	onShow() {
		let user = uni.getStorageSync('userInfo');
		let username = uni.getStorageSync('username');
		this.id = user.id;
		this.username = username
	},
	filters: {},
	computed: {},
	watch: {},
	directives: {}
};
</script>

<style scoped lang="scss">
.yellow {
	height: 280rpx;
	background: #ffe556;
	.bg {
		height: 280rpx;
		background: url('../../static/images/bg.png');
		background-size: 250rpx 250rpx;
		.registerlogin {
			display: flex;
			align-items: center;
			padding: 100rpx 30rpx 0;
			.left {
				width: 140rpx;
				height: 140rpx;
				.img {
					width: 100%;
					height: 100%;
				}
			}
			.user {
				padding-left: 40rpx;
				.name {
					font-weight: bold;
					color: #663300;
				}
				.id {
					color: #969696;
					font-size: 28rpx;
				}
				.set {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 120rpx;
					right: 40rpx;
					.img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.text {
				font-weight: bold;
				padding-left: 40rpx;
				color: #663300;
			}
		}
	}
}
</style>
