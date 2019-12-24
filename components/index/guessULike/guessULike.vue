<template>
	<view>
		<view class="likeList">
			<view class="item" v-for="(item, index) in likeList" :key="index">
				<view class="left">
					<image :src="item.cover" lazy-loadv class="img"></image>
					<view class="middle">
						<view class="name">{{ item.name }}</view>
						<view class="rate">
							<uni-rate :value="item.score / 2" size="12"></uni-rate>
							<view class="score">{{ item.score }}</view>
						</view>
						<view class="basicInfo">{{ item.basicInfo }}</view>
						<view class="releaseDate">{{ item.releaseDate }}</view>
					</view>
				</view>
				<view class="right" @click="givePraise">
					<view>
						<image src="/static/images/praise.png" lazy-loadv class="praise"></image>
						<view class="yellow">赞一下</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniRate from '../../uni-ui/uni-rate/uni-rate.vue';
export default {
	name: '',
	components: {
		uniRate
	},
	props: {
		likeList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		// 点赞
		givePraise() {
			uni.showToast({
				title: '点赞成功'
			});
		}
	},
	mounted() {
		
	},
	onLoad() {},
	filters: {},
	computed: {},
	watch: {},
	directives: {}
};
</script>

<style scoped lang="scss">
.likeList {
	background: white;
	.item {
		display: flex;
		padding: 30rpx 20rpx;
		font-size: 26rpx;
		.left {
			width: 80%;
			display: flex;
			.img {
				width: 200rpx;
				height: 300rpx;
				border-radius: 10rpx;
			}
			.middle {
				width: 55%;
				padding: 0 20rpx;
				border-right: 6rpx dashed #969696;
				color: #8a8a8a;
				.name {
					font-size: 30rpx;
					color: black;
					padding-bottom: 10rpx;
				}
				.rate {
					display: flex;
					align-items: center;
					.score {
						font-size: 24rpx;
						position: relative;
						bottom: 4rpx;
						padding-left: 20rpx;
					}
				}
				.basicInfo {
					padding: 10rpx 0;
				}
			}
		}
		.right {
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			.praise {
				width: 60rpx;
				height: 60rpx;
			}
			.yellow {
				color: #ffb655;
			}
		}
	}
}
</style>
