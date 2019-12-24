<template>
    <view class="content">
        <video :src="trailerdetail.trailer" controls class="mv" :poster="trailerdetail.cover"></video>
		<view class="trailerdetailInfo">
			<view class="left" @click="previewImg">
				<image :src="trailerdetail.cover" lazy-load class="img"></image>
			</view>
			<view class="right">
				<view class="name">{{trailerdetail.name}}</view>
				<view class="basicInfo">{{trailerdetail.basicInfo}}</view>
				<view class="originalName">{{trailerdetail.originalName}}</view>
				<view class="basicInfo">{{trailerdetail.releaseDate}}</view>
				<view class="rate">
					<view class="score">综合评分：<view class="number">{{trailerdetail.score}}</view></view>
					<view class="count">
						<uni-rate :value="trailerdetail.score/2" size="18"></uni-rate>
						<view class="praise">{{trailerdetail.prisedCounts}}人点赞</view>
					</view>
				</view>
			</view>
		</view>
		<view class="outer">
			<view class="title">剧情介绍:</view>
			<view class="plotDesc" v-html="trailerdetail.plotDesc"></view>
		</view>
		<view class="performerList">
			<view class="title">演职人员:</view>
			<scroll-view scroll-x="true">
				<view class="staffList">
					<view v-for="(item, index) in director" :key="index" class="item">
						<image :src="item.photo" lazy-load class="img"></image>
						<view class="name">{{item.name}}</view>
						<view class="actName">{{item.actName}}</view>
					</view>
					<view class="item" v-for="(item, index) in actor" :key="index">
						<image :src="item.photo" lazy-load class="img"></image>
						<view class="name">{{item.name}}</view>
						<view class="actName">饰演:{{item.actName}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="plotPics">
			<view class="title">剧照:</view>
			<view class="plotPicsList">
				<view class="item" v-for="(item,index) in plotPics" :key="index">
					<image :src="item" lazy-load class="img"></image>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
import uniRate from '../../components/uni-ui/uni-rate/uni-rate.vue'
export default {
name: "",
components: {
	uniRate
},
props: {},
data () {
  return {
	  trailerId: "",
	  trailerdetail: {},
	  director: [],
	  actor: [],
	  plotPics: []
    }
  },
  methods: {
	// 获取预告片详情
	getTrailerDetail() {
		uni.request({
			url: `${this.$api}/search/trailer/${this.trailerId}?qq=122212489`,
			method: 'POST',
			data: {},
			success: res => {
				this.trailerdetail = res.data.data
				this.plotPics = JSON.parse(res.data.data.plotPics)
				console.log(res,'预告片详情')
			},
			fail: () => {},
			complete: () => {}
		});
	},
	// 预览图片
	previewImg() {
		let arr = []
		arr.push(this.trailerdetail.cover)
		let that = this
		uni.previewImage({
		    urls: arr,
		    longPressActions: {
		        itemList: ['保存图片'],
		        success: function(data) {
					uni.saveImageToPhotosAlbum({
					    filePath: that.trailerdetail.cover,
					    success: function () {
							uni.showToast({
								title: '保存成功'
							})
							console.log('save success');
					    }
					});
		        },
		        fail: function(err) {
		            console.log(err.errMsg);
		        }
		    }
		});
	},
	// 获取导演
	getDirector() {
		uni.request({
			url: `${this.$api}/search/staff/${this.trailerId}/1?qq=122212489`,
			method: 'POST',
			data: {},
			success: res => {
				this.director = res.data.data
				console.log(res,'导演')
			},
			fail: () => {},
			complete: () => {}
		});
	},
	// 获取演员
	getActor() {
		uni.request({
			url: `${this.$api}/search/staff/${this.trailerId}/2?qq=122212489`,
			method: 'POST',
			data: {},
			success: res => {
				this.actor = res.data.data
				console.log(res,'演员')
			},
			fail: () => {},
			complete: () => {}
		});
	}
  },
  mounted () {

  },
  onLoad (options) {
	this.trailerId = options.id
	this.getTrailerDetail()
	this.getDirector()
	this.getActor()
  },
  filters: {

  },
  computed: {

  },
  watch: {

  },
  directives: {

  }
}
</script>

<style scoped lang="scss">
.content {
	background: #f2f2f2;
	padding-bottom: 40rpx;
	.mv {
		width: 100%;
	}
	.trailerdetailInfo {
		display: flex;
		justify-content: space-between;
		padding: 80rpx 30rpx;
		.left {
			width: 32%;
			.img {
				width: 100%;
				height: 100%;
			}
		}
		.right {
			width: 60%;
			// padding-left: 40rpx;
			font-size: 26rpx;
			color: #969696;
			.name {
				font-size: 34rpx;
				font-weight: bold;
				color: black;
			}
			.basicInfo {
				padding: 10rpx 0;
			}
			.rate {
				margin-top: 20rpx;
				background: white;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx;
				.score {
					text-align: center;
					font-size: 34rpx;
					color: black;
					.number {
						color: #ffca3e;
					}
				}
				.count {
					position: relative;
					top: 10rpx;
					.praise {
						padding-top: 16rpx;
						text-align: center;
					}
				}
			}
		}
	}
	.outer {
		padding: 0 30rpx;
		font-size: 26rpx;
		.title {
			padding: 20rpx 0;
			border-top: 2rpx solid #969696;
			color: #969696;
		}
		.plotDesc {
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #969696;
			line-height: 40rpx;
		}
	}
	.performerList {
		margin: 0 30rpx;
		border-bottom: 2rpx solid #969696;
		font-size: 26rpx;
		.title {
			padding: 20rpx 0;
			color: #969696;
		}
		.staffList {
			padding-left: 20rpx;
			padding-bottom: 20rpx;
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
					font-size: 30rpx;
				}
				.actName {
					color: #969696;
					white-space: nowrap;
					overflow: hidden; 
					text-overflow: ellipsis;
				}
			}
		}
	}
	.plotPics {
		padding-left: 30rpx;
		font-size: 26rpx;
		.title {
			padding: 20rpx 0;
			color: #969696;
		}
		.plotPicsList {
			display: flex;
			flex-wrap: wrap;
			.item {
				width: 30%;
				padding-right: 20rpx;
				.img {
					width: 100%;
					height: 300rpx;
					padding-bottom: 20rpx;
				}
			}
		}
	}
}
</style>
