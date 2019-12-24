<template>
    <view>
        <view class="headImg">
        	<image src="../../static/images/default-face.png" lazy-load class="img"></image>
        </view>
		<view class="form">
			<view class="item">
				<view class="name">账号</view>
				<input class="uni-input" placeholder="请输入用户名" @input="setName"/>
			</view>
			<view class="item">
				<view class="name">密码</view>
				<input class="uni-input" placeholder="请输入密码" password="true" @input="setPassword"/>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="RegisterLogin">注册/登录</button>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wxLogin">
			<view>第三方账号登录</view>
			<view class="logo">
				<image src="../../static/images/weixin.png" lazy-load class="img"></image>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="appLogin">
			<view>第三方账号登录</view>
			<view class="logo">
				<view class="item" @click="wxLogin">
					<image src="../../static/images/weixin.png" lazy-load class="img"></image>
				</view>
				<view class="item middle" @click="qqLogin">
					<image src="../../static/images/QQ.png" lazy-load class="img"></image>
				</view>
				<view class="item" @click="wbLogin">
					<image src="../../static/images/weibo.png" lazy-load class="img"></image>
				</view>
			</view>
		</view>
		<!-- #endif -->
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
	  username: "",
	  password: ""
    }
  },
  methods: {
	// 获取用户名
	setName(e) {
		this.username = e.detail.value
	},
	// 获取密码
	setPassword(e) {
		this.password = e.detail.value
	},
	// 注册/登录
	RegisterLogin() {
		uni.request({
			url: `${this.$api}/user/registOrLogin?qq=122212489`,
			method: 'POST',
			data: {
				password: this.password,
				username: this.username
			},
			success: res => {
				this.$store.state.username = res.data.data.username
				uni.setStorageSync('userInfo',res.data.data)
				uni.setStorageSync('username',res.data.data.username)
				uni.switchTab({
					url: '/pages/mine/mine'
				})
				console.log(res,'注册/登录')
			},
			fail: () => {},
			complete: () => {}
		});
	},
	// #ifdef APP-PLUS
	// 微信授权登录
	wxLogin() {
		uni.login({
			provider: 'weixin',
			success: function (loginRes) {
				console.log(loginRes.authResult);
				// 获取用户信息
				uni.getUserInfo({
					provider: 'weixin',
					success: function (infoRes) {
						console.log(infoRes)
						console.log('用户昵称为：' + infoRes.userInfo.nickName);
					}
				});
		    }
		});
	},
	// qq授权登录
	qqLogin() {
		uni.login({
			provider: 'qq',
			success: function (loginRes) {
				console.log(loginRes.authResult);
				// 获取用户信息
				uni.getUserInfo({
					provider: 'qq',
					success: function (infoRes) {
						console.log(infoRes)
						console.log('用户昵称为：' + infoRes.userInfo.nickName);
					}
				});
		    }
		});
	},
	// 微博授权登录
	wbLogin() {
		uni.login({
		  provider: 'sinaweibo',
		  success: function (loginRes) {
		    console.log(loginRes);
		  }
		});
	}
	// #endif
  },
  mounted () {

  },
  onLoad () {

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
.headImg {
	height: 400rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.img {
		width: 180rpx;
		height: 180rpx;
	}
}
.form {
	padding: 0 40rpx 50rpx;
	.item {
		display: flex;
		align-items: center;
		padding: 40rpx 20rpx 20rpx;
		border-bottom: 2rpx solid #8a8a8a;
		.name {
			padding-right: 30rpx;
			color: #8a8a8a;
		}
	}
}
.btn {
	padding: 20rpx 60rpx;
}
/* #ifdef MP-WEIXIN */
.wxLogin {
	font-size: 26rpx;
	color: #969696;
	text-align: center;
	padding-top: 40rpx;
	.logo {
		text-align: center;
		padding-top: 40rpx;
		.img {
			width: 80rpx;
			height: 80rpx;
		}
	}
}
/* #endif */
/* #ifdef APP-PLUS */
.appLogin {
	font-size: 26rpx;
	color: #969696;
	padding-top: 40rpx;
	text-align: center;
	.logo {
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		.item {
			.img {
				width: 80rpx;
				height: 80rpx;
			}
		}
		.middle {
			padding: 0 60rpx;
		}
	}
}
/* #endif */
</style>
