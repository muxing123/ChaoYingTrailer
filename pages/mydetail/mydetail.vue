<template>
    <view class="content">
		<view class="form">
			<view class="item" @click="openPop">
				<view class="left">头像</view>
				<view class="right">
					<image :src="faceImage" lazy-load class="img"></image>
					<image src="../../static/images/arrow.png" lazy-load class="arrow"></image>
				</view>
			</view>
			<view class="item" @click="goNickname">
				<view class="left">昵称</view>
				<view class="right">
					<view class="text">{{nickname}}</view>
					<image src="../../static/images/arrow.png" lazy-load class="arrow"></image>
				</view>
			</view>
			<view class="item" @click="goBirthday">
				<view class="left">生日</view>
				<view class="right">
					<view class="text">{{birthday}}</view>
					<image src="../../static/images/arrow.png" lazy-load class="arrow"></image>
				</view>
			</view>
			<view class="item" @click="goSex">
				<view class="left">性别</view>
				<view class="right">
					<view class="text">{{sex === 1 ? '男' : '女'}}</view>
					<image src="../../static/images/arrow.png" lazy-load class="arrow"></image>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="options">
				<view class="item" @click="previewImage">查看我的头像</view>
				<view class="item border" @click="chooseImage">从手机相册中选择</view>
				<view class="cancel" @click="closePop">取消</view>
			</view>
		</uni-popup>
        <view class="clear" @click="clear">清理缓存</view>
		<view class="quit" @click="quit">退出登录</view>
    </view>
</template>

<script>
import uniPopup from "../../components/uni-ui/uni-popup/uni-popup.vue"
export default {
name: "",
components: {
	uniPopup
},
props: {},
data () {
  return {
	  userId: "",
	  faceImage: "",
	  nickname: "",
	  birthday: "",
	  sex: "",
	  userUniqueToken: ""
    }
  },
  methods: {
	// 打开弹出层
	openPop() {
		this.$refs.popup.open()
	},
	// 查看头像
	previewImage() {
		let arr = []
		arr.push(this.faceImage)
		uni.previewImage({
			urls: arr
		});
	},
	// 从本地相册选择图片
	chooseImage() {
		let that = this
		uni.chooseImage({
		    count: 1, //默认9
		    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album'], //从相册选择
		    success: function (res) {
				const tempFilePaths = res.tempFilePaths;
				uni.uploadFile({
				    url: `${that.$api}/user/uploadFace?qq=122212489&userId=${that.userId}`, 
				    filePath: tempFilePaths[0],
				    name: 'file',
				    header: {
				        'headerUserId': that.userId,
						"headerUserToken": that.userUniqueToken
				    },
				    success: (uploadFileRes) => {
						let user = JSON.parse(uploadFileRes.data)
						that.faceImage = user.data.faceImage
				        console.log(JSON.parse(uploadFileRes.data));
				    }
				});
		    }
		});
	},
	// 关闭弹出层
	closePop() {
		this.$refs.popup.close()
	},
	// 去修改昵称
	goNickname() {
		uni.navigateTo({
			url: `/pages/setname/setname?name=${this.nickname}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
	// 去修改生日
	goBirthday() {
		uni.navigateTo({
			url: `/pages/setbirthday/setbirthday?birthday=${this.birthday}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
	// 去修改性别
	goSex() {
		uni.navigateTo({
			url: `/pages/setsex/setsex?sex=${this.sex}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
	// 清除缓存
	clear() {
		uni.removeStorageSync('userInfo');
		this.$store.state.username = ''
		uni.showToast({
		    title: '清除成功',
		    duration: 2000
		});
	},
	// 退出登录
	quit() {
		uni.request({
			url: `${this.$api}/user/logout?qq=122212489&userId=${this.userId}`,
			method: 'POST',
			data: {},
			success: res => {
				uni.switchTab({
					url: '/pages/mine/mine'
				})
				uni.removeStorageSync('username')
				console.log(res, '退出登录');
			},
			fail: () => {},
			complete: () => {}
		});
	}
  },
  mounted () {

  },
  onLoad () {
	
  },
  onShow() {
  	let user = uni.getStorageSync('userInfo');
  	this.userId = user.id;
  	this.faceImage = user.faceImage
  	this.nickname = user.nickname
  	this.birthday = user.birthday
  	this.sex = user.sex,
  	this.userUniqueToken = user.userUniqueToken
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
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	.form {
		background: white;
		padding: 30rpx 30rpx 0;
		.item {
			padding-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				font-size: 32rpx;
			}
			.right {
				display: flex;
				align-items: center;
				.img {
					width: 80rpx;
					height: 80rpx;
				}
				.arrow {
					width: 40rpx;
					height: 40rpx;
					padding-left: 20rpx;
				}
				.text {
					font-size: 32rpx;
					color: #cdcdcd;
				}
			}
		}
	}
	.options {
		background: #f2f2f2;
		height: 280rpx;
		position: relative;
		.item {
			background: white;
			padding: 20rpx;
			text-align: center;
		}
		.border {
			border-top: 2rpx solid #f2f2f2;
		}
		.cancel {
			width: 100%;
			padding: 20rpx 0;
			text-align: center;
			position: absolute;
			bottom: 0;
			background: white;
		}
	}
	.clear {
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 100rpx;
		background: white;
		padding: 20rpx 0;
	}
	.quit {
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 0;
		background: white;
		padding: 20rpx 0;
	}
}
</style>
