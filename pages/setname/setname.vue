<template>
    <view class="content">
        <input class="uni-input" :value="nickname" @input="setNickname"/>
		<view class="btn">
			<button type="primary" @click="onSubmit">提交</button>
		</view>
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
	  nickname: "",
	  user: {}
    }
  },
  methods: {
	// 修改昵称
	setNickname(e) {
		this.nickname = e.detail.value
	},
	// 提交
	onSubmit() {
		uni.request({
			url: `${this.$api}/user/modifyUserinfo?qq=122212489`,
			method: 'POST',
			data: {
				userId: this.user.id,
				birthday: this.user.birthday,
				nickname: this.nickname,
				sex: this.user.sex
			},
			header: {
			    'headerUserId': this.user.id,
				"headerUserToken": this.user.userUniqueToken
			},
			success: res => {
				uni.setStorageSync("userInfo",res.data.data)
				uni.showToast({
					title: "提交成功"
				})
			},
			fail: () => {},
			complete: () => {}
		});
	}
  },
  mounted () {

  },
  onLoad (options) {
	this.nickname = options.name
	this.user = uni.getStorageSync("userInfo")
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
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: #F8F8F8;
	.btn {
		padding: 40rpx 20rpx;
	}
	.uni-input {
		background: white;
		padding: 20rpx 30rpx;
	}
}
</style>
