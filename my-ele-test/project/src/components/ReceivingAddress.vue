<template>
	<!--收货地址-->
	<div class="out_position">
		<header>
			<span @click ='showAddress'>
				<svg data-v-c8684834="" width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><polyline data-v-c8684834="" points="22,23 4,9 35,-5" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3;"></polyline></svg>
			</span>
			<span class="address">选择收货地址</span>
		</header>
		
		<!--搜索地址-->
		<div class="search_wrapper">
	  		<div class="search" role='button'>
	  				<svg data-v-070ab150="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle data-v-070ab150="" cx="10" cy="10" r="10" stroke="rgb(221,221,221)" stroke-width="3" fill="none"></circle> <line data-v-070ab150="" x1="20" y1="20" x2="40" y2="40" style="stroke: rgb(221, 221, 221); stroke-width: 2;"></line></svg>
	  				<input type="text"  placeholder="请输入地址" v-model="keyword" @keyup.enter="search()"/>
	  		</div>
	  	</div>
	  	<section >
	  		<div class="address_list" v-for="address in address_list" @click="changePosition(address)">
	  			<p>
	  				<span class="address_title">{{address.name}}</span>
	  			</p>
	  			<p class="addres_news">{{address.address}}</p>
	  		</div>
	  	</section>
	</div>
	
</template>

<script>
	import { mapState } from 'vuex'
	import axios from 'axios';
	export default {
		name:'receiving-address',
		props:['position'],
		data (){
			return {
				keyword:'',
				address_list:[]
			}
		},
		computed:{
		},
		mounted(){
			
		},
		methods:{
			showAddress(){
				this.$emit('show-Out')
			},
			search(){
				var that = this;
//				axios.get('https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=this.keyword&offset=0&limit=20',{
//					headers:{
//						"accept": "*/*",
//						"accept-encoding": 'gzip, deflate',
//						"accept-language": 'zh-CN,zh;q=0.9'
//					}
//				})
				axios.get('./static/address.json')
				.then(function(res){
					console.log(res)
					that.address_list = res.data
				})
				.catch(function(error){
					console.log(error)
				})
			},
			changePosition(address){
				this.$store.dispatch('changePosition',{
					longitude:address.longitude,
		  			latitude:address.latitude,
		  			address:address.address
				})
				this.$emit('show-Out')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.out_position{
	width:100%;
	height:100%;
	position: fixed;
	left:0;
	top:0;
	z-index: 9999;
	background:#fff;
}
	header{
		width: 100%;
	    color: #fff;
	    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    text-align: center;
	    font-size: .48rem;
	    svg{
	    	position: absolute;
		    left: .333333rem;
		    left: 3.333333vw;
		    top: .433333rem;
		    top: 4.333333vw;
		    fill: #fff;
		    width: .533333rem;
		    width: 5.333333vw;
		    height: .533333rem;
		    height: 5.333333vw;
	    }
	    .address{
	    	line-height: 1.173333rem;
		    line-height: 11.733333vw;
		    font-size: .48rem;
	    }
	}
	.search_wrapper{
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    .search{
	    	position: relative;
		    padding: .266667rem .4rem;
		    /* padding: 2.666667vw 4vw; */
		    /* -webkit-box-flex: 1; */
		    /* -webkit-flex: 1; */
		    -ms-flex: 1;
		    flex: 1;
		    svg{
		    	position: absolute;
			    width: .373333rem;
			    width: 3.733333vw;
			    height: .373333rem;
			    height: 3.733333vw;
			    left: .586667rem;
			    left: 5.866667vw;
			    top: .56rem;
			    top: 5.6vw;
			    
		    }
		    input{
	    	    width: 100%;
			    height: .96rem;
			    height: 9.6vw;
			    color: #999;
			    border-radius: .026667rem;
			    border-radius: .266667vw;
			    padding: .24rem .48rem .24rem .666667rem;
			    padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
			    background: #f2f2f2;
			    -webkit-appearance: none;
			    font-size: .346667rem;
			    line-height: .48rem;
			    line-height: 4.8vw;
			    outline: 0;
    			border: none
		    }
	    }
	}
	section{
		 overflow:scroll;
	}
	.address_list{
		font-size: .32rem;
	    background-color: #fff;
	    padding: .293333rem .4rem;
	    padding: 2.933333vw 4vw;
	    color: #2a2a2a;
	    
	    .address_title{
	    	font-weight: 700;
    		font-size: .4rem;
    		color: #333;
	    }
	    .address_news{
		    color: #333;
		    font-size: .32rem;
		    line-height: .453333rem;
		    line-height: 4.533333vw;
		    margin-top: .053333rem;
		    margin-top: .533333vw;	
	    }
	}
</style>