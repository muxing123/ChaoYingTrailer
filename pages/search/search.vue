<template>
    <view>
        <view class="top">
			<view class="border">
				<view class="icon" @click="search">
					<icon type="search" size="18" />
				</view>
				<input class="uni-input" placeholder="请输入电影信息" confirm-type="search" @input="getKeyWords" @confirm="search"/>
			</view>
			<view class="left" @click="search">搜索</view>
        </view>
		<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="lower">
			<view class="trailerList">
				<view class="item" v-for="(item,index) in trailerList" :key="index" @click="goDetail(item.id)">
					<image :src="item.cover" lazy-load class="img"></image>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
			<view class="bottom" v-if="!lowerOpen">--已全部加载--</view>
		</scroll-view>
    </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
	  trailerList: [],
	  page: 1,
	  pageSize: 30,
	  keywords: "",
	  lowerOpen: true
    }
  },
  methods: {
	// 获取预告片列表
	getTrailerList() {
		uni.request({
			url: `${this.$api}/search/list?qq=122212489&keywords=${this.keywords}&page=${this.page}&pageSize=${this.pageSize}`,
			method: 'POST',
			data: {},
			success: res => {
				if(res.data.data.rows.length === 0) {
					this.lowerOpen = false
				}else {
					if(this.page > 0) {
						this.trailerList = this.trailerList.concat(res.data.data.rows)
					}else {
						this.trailerList = res.data.data.rows
					}
				}
				console.log(res,'预告片列表')
			},
			fail: () => {},
			complete: () => {}
		});
	},
	// 上拉刷新
	lower() {
		if(this.lowerOpen) {
			this.page += 1
			this.getTrailerList()
		}
	},
	// 获取关键字
	getKeyWords(e) {
		this.keywords = e.detail.value
		this.page = 0
		this.getTrailerList()
	},
	// 搜索
	search() {
		this.page = 0
		this.getTrailerList()
	},
	// 去详情页面
	goDetail(id) {
		uni.navigateTo({
			url: `/pages/detail/detail?id=${id}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
  },
  mounted () {

  },
  onLoad () {
	this.getTrailerList();
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
.top {
	display: flex;
	padding: 10rpx 20rpx;
	border-bottom: 2rpx solid #f2f2f2;
	.border {
		width: 80%;
		display: flex;
		align-items: center;
		border: 2rpx solid #f2f2f2;
		border-radius: 40rpx;
		padding: 10rpx;
		.icon {
			display: flex;
			align-items: center;
			padding-right: 10rpx;
		}
	}
	.left {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
	}
}
.scroll-Y {
	height: 1130rpx;
	.trailerList {
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 0 0 16rpx;
		.item {
			width: 31%;
			padding-right: 16rpx;
			.img {
				width: 100%;
				height: 300rpx;
			}
			.name {
				font-size: 26rpx;
				padding-bottom: 20rpx;
			}
		}
	}
	.bottom {
		text-align: center;
		padding: 20rpx;
	}
}
</style>
