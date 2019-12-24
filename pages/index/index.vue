<template>
	<view class="content">
		<view class="wheel">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular style="height: 480rpx;">
				<swiper-item v-for="(item, index) in wheelList" :key="index" class="item">
					<view class="swiper-item"><image :src="item.image" lazy-load class="img"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="transHot">
			<view class="title">
				<image src="../../static/images/hot.png" lazy-load class="img"></image>
				<view class="right">热门超英</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="superheroList">
					<view v-for="(item, index) in superheroList" :key="index" class="item">
						<image :src="item.cover" lazy-load class="img"></image>
						<view class="name">{{item.name}}</view>
						<view class="rate">
							<uni-rate :value="item.score/2" size="12"></uni-rate>
							<view class="score">{{item.score}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="trailer">
			<view class="title">
				<image src="../../static/images/interest.png" lazy-load class="img"></image>
				<view class="right">热门预告</view>
			</view>
			<view class="trailerList">
				<video :id="item.id" 
				:src="item.trailer"
				 controls v-for="(item,index) in trailerList" :key="index"
				 class="item" :poster="item.cover" @play="controlPlay(item.id)">
				</video>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<guessULike :likeList="likeList"></guessULike>
	</view>
</template>

<script>
import uniRate from '../../components/uni-ui/uni-rate/uni-rate.vue'
import guessULike from '../../components/index/guessULike/guessULike.vue'
export default {
	components: {
		uniRate,
		guessULike
	},
	data() {
		return {
			wheelList: [],
			superheroList: [],
			trailerList: [],
			likeList: [],
			num: 0
		};
	},
	onLoad() {
		this.getWheel();
		this.getSuperhero();
		this.getTrailer();
		this.getLike();
	},
	onPullDownRefresh() {
		let that = this
		setTimeout(function() {
			uni.showToast({
				title: '刷新成功'
			});
			that.getLike();
			uni.stopPullDownRefresh();
		}, 3000);
	},
	methods: {
		//获取轮播图
		getWheel() {
			uni.request({
				url: `${this.$api}/index/carousel/list?qq=122212489`,
				method: 'POST',
				data: {},
				success: res => {
					this.wheelList = res.data.data;
					console.log(res, '轮播图');
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 获取热门超英
		getSuperhero() {
			uni.request({
				url: `${this.$api}/index/movie/hot?qq=122212489&type=superhero`,
				method: 'POST',
				data: {},
				success: res => {
					this.superheroList = res.data.data;
					console.log(res, '热门超英');
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 获取热门预告
		getTrailer() {
			uni.request({
				url: `${this.$api}/index/movie/hot?qq=122212489&type=trailer`,
				method: 'POST',
				data: {},
				success: res => {
					this.trailerList = res.data.data;
					console.log(res, '热门预告');
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 控制播放
		controlPlay(id) {
			this.trailerList.map(item => {
				if(item.id !== id) {
					let videoContext = uni.createVideoContext(item.id)
					videoContext.pause()
				}
			})
		},
		// 获取猜你喜欢
		getLike() {
			uni.request({
				url: `${this.$api}/index/guessULike?qq=122212489`,
				method: 'POST',
				data: {},
				success: res => {
					this.likeList = res.data.data;
					console.log(res, '猜你喜欢');
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.content {
	background: #f2f2f2;
	.wheel {
		.item {
			.swiper-item {
				.img {
					width: 100%;
				}
			}
		}
	}
	/*热门超英*/
	.transHot {
		background: white;
		margin: 20rpx 0;
		.title {
			display: flex;
			align-items: center;
			padding: 20rpx;
			.img {
				width: 30rpx;
				height: 30rpx;
			}
			.right {
				font-size: 30rpx;
				font-weight: bold;
				padding-left: 20rpx;
			}
		}
		.superheroList {
			padding-left: 20rpx;
			white-space: nowrap; 
			.item {
				display: inline-block;
				width: 160rpx;
				padding-right: 20rpx;
				font-size: 26rpx;
				.img {
					width: 100%;
					height: 160rpx;
				}
				.name {
					white-space: nowrap; 
					overflow: hidden; 
					text-overflow: ellipsis;
					padding-bottom: 4rpx;
				}
				.rate {
					display: flex;
					align-items: center;
					.score {
						font-size: 24rpx;
						position: relative;
						bottom: 4rpx;
					}
				}
			}
		}
	}
	/*热门预告*/
	.trailer {
		.title {
			display: flex;
			align-items: center;
			padding: 20rpx;
			background: white;
			.img {
				width: 30rpx;
				height: 30rpx;
			}
			.right {
				font-size: 30rpx;
				font-weight: bold;
				padding-left: 20rpx;
			}
		}
		.trailerList {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0 20rpx 10rpx;
			.item {
				width: 48%;
				height: 360rpx;
				margin: 20rpx 0 10rpx;
			}
		}
	}
}
</style>
