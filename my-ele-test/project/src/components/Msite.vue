<template>
<div class="msite">
  	<!--头部-->
  	<header>
  		<div class="header_top">
	  		<img src="../img/fix.png"/>
	  		<span @click="showOutAddress">{{position.address||'获取地址中'}}</span>
  		</div>
  		
  	</header>
  	<!--外部地址搜索-->
  	<transition name='fade' enter-active-class="animated-half slideInRight"  leave-active-class="animated-half slideOutRight">
		<receiving-address v-if='isShow' :position='position' @show-Out='showOutAddress'></receiving-address>
	</transition>
  	
  	<!--搜索-->
  	<div class="search_wrapper">
  		<div class="search" role='button'>
  			<router-link to=''>
  				<svg data-v-070ab150="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle data-v-070ab150="" cx="10" cy="10" r="10" stroke="rgb(221,221,221)" stroke-width="3" fill="none"></circle> <line data-v-070ab150="" x1="20" y1="20" x2="40" y2="40" style="stroke: rgb(221, 221, 221); stroke-width: 2;"></line></svg>
  				<span>搜索饿了么商家、商品名称</span>
  			</router-link>
  		</div>
  	</div>
  	<!--轮播图-->
  	<div>
  		<mt-swipe :auto="4000" class='toptoons'>
			<mt-swipe-item><img src="http://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/"/></mt-swipe-item>
			<mt-swipe-item><img src="http://fuss10.elemecdn.com/5/78/ea6efe857599f67bcec5d671f56b2jpeg.jpeg?imageMogr/format/webp/"/></mt-swipe-item>
		</mt-swipe>
  	</div>
  	<!--列表轮播-->
  	<div>
  		<mt-swipe :auto="0" class='foodentry'>
			<mt-swipe-item >
				<router-link to=''v-for='list in lists' :key='list.id'>
					<div class="container">
						<img src="http://fuss10.elemecdn.com"/>
						<span class="title">{{list.name}}</span>
					</div>
				</router-link>
			</mt-swipe-item>
			<!--<mt-swipe-item>2</mt-swipe-item>-->
		</mt-swipe>
  	</div>
  	<div>
  		<div class="nav">
  			<section>
  				<div class="action">
  					<div class="action_left">
  						<h3>品质套餐</h3>
  						<div class="action_title">搭配齐全吃的好</div>
  						<div class="action_logo">立即抢购 ></div>
  						<img src="http://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
  					</div>
  					<div class="action_left">
  						<h3>品质套餐</h3>
  						<div class="action_title">搭配齐全吃的好</div>
  						<div class="action_logo">立即抢购 ></div>
  						<img src="http://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
  					</div>
  				</div>
  			</section>
  		</div>
  	</div>
  	<!--推荐商家-->
  	<div class="shoplist_title">
  		推荐商家
  	</div>
  	<!--商品list-->
  	<section class="shoplist">
  		<div class="shop" v-for='food in foods' :key="food.restaurant.id" @click="goShop">
  			<div class="shop_top" @click="goTO">
  				<div class="shop_logo">
  					<div class="shop_img">
  						<img src="http://fuss10.elemecdn.com/d/d7/39b4ac5b5ead338c4c607f12308e2jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="DQ冰淇淋(五棵松店）" />
  					</div>
  				</div>
  				<div class="shop_title">
  					<div class="shop_name">
  						<h3>
  							<i content="品牌"></i>
  							<span>{{food.restaurant.name}}</span>
  						</h3>
  						<ul></ul>
  					</div>
  					<div class="shop_star">
  						<div class="shop_pj">
  							<div class="shop_pj_star">
  								<div class="star_img">
  									<img src=""/>
  								</div>
  								<div class="pj_img">
  									<img src=""/>
  								</div>
  							</div>
  							<span>5</span>
  							<span>月售173单</span>
  						</div>
  						<div class="shop_bird">
  							<div class="bird_send">
  								蜂鸟专送
  							</div>
  						</div>
  					</div>
  					<div class="shop_send">
  						<div class="send">
  							<span>¥27起送</span>
  							<span class='send_m'>配送费¥6</span>
  						</div>
  						<div class="send_time">
  							<span class="send_km">{{food.restaurant.distance/1000}}km</span>
  							<span>{{food.restaurant.order_lead_time}}分钟</span>
  						</div>
  					</div>
  				</div>
  			</div>
  			<!--shop-bottom-->
  			<div class="shop_bottom">
  				<section>
  					<div class="shop_active">
  						<span class="active_title">
  							<span>{{food.restaurant.activities[0].icon_name}}</span>
  						</span>
  						<span>{{food.restaurant.activities[0].description}}</span>
  					</div>
  				</section>
  			</div>
  		</div>
  	</section>
</div>
</template>
<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { mapState } from 'vuex';
	import ReceivingAddress from './ReceivingAddress';
	import axios from 'axios';
export default {
  name: 'Msite',
  data () {
    return {
      isShow:false,
      lists:[],
      foods:[]
    }
  },
  computed:{
  	...mapState([
  		'position'
  	])
  },
  methods:{
		getData(){
			var that = this;
			axios.get('/static/data.json')
			.then(function(res){
				that.lists = res.data[0].entries
			})
			.catch(function(error){
			})
		},
		getList(){
			var that = this;
			axios.get('/static/list.json')
			.then(function(res){
				that.foods= res.data.items
			})
			.catch(function(error){
				console.log(error)
			})
		},
  		showOutAddress(){
  			this.isShow = !this.isShow
  		},
  		goShop(){
//			this.$router.push({name: 'Shop'});
			this.$router.push({path: 'shop'});
  		},
  		getPosition(){
  			if(!this.position.latitude){
  				var that = this;
			   var map, geolocation;
			    //加载地图，调用浏览器定位服务
			    map = new AMap.Map('container', {
			        resizeEnable: true
			    });
			    map.plugin('AMap.Geolocation', function() {
			        geolocation = new AMap.Geolocation({
			            enableHighAccuracy: true,//是否使用高精度定位，默认:true
			            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
			            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
			            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
			            buttonPosition:'RB'
			        });
			        map.addControl(geolocation);
			        geolocation.getCurrentPosition();
			        AMap.event.addListener(geolocation, 'complete', (data)=>{
			        	console.log(data)
			        	console.log(data.position.getLng(),data.position.getLat())
			        	var geocoder = new AMap.Geocoder({
				            radius: 1000,
				            extensions: "all"
				        }); 
				        var longitude = data.position.getLng()
				        var latitude = data.position.getLat()
				        var lnglatXY = [longitude,latitude]
			        	geocoder.getAddress(lnglatXY, function(status, result) {
				            if (status === 'complete' && result.info === 'OK') {
				                geocoder_CallBack(result);
				            }
				        });
				        function geocoder_CallBack(data) {
					        var address = data.regeocode.formattedAddress; //返回地址描述
					        let position = {
					        	longitude,
					        	latitude,
					        	address
					        }
					        that.$store.dispatch('changePosition',position)
					    }
				    });//返回定位信息
			        AMap.event.addListener(geolocation, 'error', (data)=>{
				    });      //返回定位出错信息
			    });
  			}
  		},
  		goTO(){
  			
  		}
  },
  mounted(){
  	this.getPosition()
  	this.getData()
  	this.getList()
  },
  updated(){
  },
  components :{
  	'mt-swipe':Swipe,
  	'mt-swipe-item':SwipeItem,
  	ReceivingAddress
  }
}
</script>
			
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/mixin";
	header{
		padding: .266667rem .373333rem 0;
	    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    color: #fff;
	    .header_top{
	    	width: 60%;
    		font-weight: 700;
	    	img{
		    	width:0.393rem;
		    	height:0.446rem;
		    	vertical-align: middle;
		    	display: inline-block;
		    	margin-bottom:0.333rem;
		    }
		    span{
	    	    margin: 0 .133333rem;
			    font-size: .453333rem;
			    display: inline-block;
			    max-width: 80%;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
		    }
	    }
	    
	}
	.search_wrapper,.search{
		    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
		    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
		    background-image: linear-gradient(90deg,#0af,#0085ff);
		    z-index: 999;
	        position: sticky;
   			top: 0px;
    	.search{
    	    padding: .2rem .373333rem;
		    padding: 2vw 3.733333vw;
		    margin: -.013333rem 0;
		    margin: -.133333vw 0;
		     z-index: 999;
		    a{
		    	display: -webkit-box;
			    display: -webkit-flex;
			    display: -ms-flexbox;
			    display: flex;
			    width: 100%;
			    height: .96rem;
			    height: 9.6vw;
			    -webkit-box-pack: center;
			    -webkit-justify-content: center;
			    -ms-flex-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    -ms-flex-align: center;
			    align-items: center;
			    border-radius: .026667rem;
			    border-radius: .266667vw;
			    background: #fff;
			    color: #999;
			    font-size: .373333rem;
			    svg{
			    	display: inline-block;
				    width: .426667rem;
				    width: 4.266667vw;
				    height: .426667rem;
				    height: 4.266667vw;
				    margin-right: .133333rem;
				    margin-right: 1.333333vw;
			    }
		    }
    	}
	}
	.search:before,.search:after{
		content: "";
	    position: absolute;
	    width: 100%;
	    height: 2px;
	    left: 0;
	    /*background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);*/
	}
	.search:before{
		top: -1px;
	}
	.search:after{
		bottom: -1px;
	}
	.toptoons{
	    height: 2.8rem;
  		/* height: 28vw; */
  		img{
  			width:100%;
  			max-width: 100%;
  		}
	}
	.foodentry{
	    overflow: hidden;
	    height: 4.72rem;
	    height: 47.2vw;
	    background-color: #fff;
	    text-align: center;
	    a{
	    	position: relative;
		    float: left;
		    margin-top: .293333rem;
		    margin-top: 2.933333vw;
		    width: 20%
	    }
	    .container{
	    	position: relative;
		    display: inline-block;
		    width: 1.2rem;
		    width: 12vw;
		    height: 1.2rem;
		    height: 12vw;
		    img{
		    	width: 100%;
    			height: 100%;
    			vertical-align: top;
		    }
		    .title{
		    	display: block;
			    margin-top: .133333rem;
			    margin-top: 1.333333vw;
			    color: #666;
			    font-size: .30rem;
		    }
	    }
	}
	.nav{
		margin-bottom: .213333rem;
	    margin-bottom: 2.133333vw;
	    font-size: 0;
	}
	.action{
		margin-bottom: .08rem;
    	margin-bottom: .8vw;
    	display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    padding: 0 .266667rem;
	    padding: 0 2.666667vw;
	    .action_left{
	    	margin-right: .08rem; 
	    	margin-right: .8vw;
	        height: 3.733333rem;
		    height: 37.333333vw;
		    padding: .32rem 0 0 .4rem;
		    padding: 3.2vw 0 0 4vw;
		    z-index: 1;
	        position: relative;
		    -webkit-box-flex: 1;
		    -webkit-flex: 1;
		    -ms-flex: 1;
		    flex: 1;
		    background: -webkit-gradient(linear,left bottom,left top,color-stop(5%,#f4f4f4),color-stop(95%,#fafafa));
		    background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
		    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
		    h3{
		    	font-size: .453333rem;
			    font-weight: 700;
			    margin-bottom: .133333rem;
			    margin-bottom: 1.333333vw;
			    color: #333;
		    }
		    .action_title{
		    	font-size: .346667rem;
			    color: #777;
			    margin-bottom: .24rem;
			    margin-bottom: 2.4vw
		    }
		    .action_logo{
		    	font-size: .32rem;
			    color: #af8260;
			    font-weight: 700;
		    }
		    img{
		    	position: absolute;
			    right: 0;
			    bottom: -.2rem;
			    bottom: -2vw;
			    width: 3.2rem;
			    width: 32vw;
			    height: 2.133333rem;
			    height: 21.333333vw;
			    max-width:100%;
		    }
	    }
	}
	.shoplist_title{
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    height: .96rem;
	    height: 9.6vw;
	    font-size: .4rem;
	    color: #000;
	}
	.shoplist_title:before{
		display: block;
	    content: "";
	    width: .533333rem;
	    width: 5.333333vw;
	    height: .026667rem;
	    height: .266667vw;
	    background-color: #999;
	    margin-right: .346667rem;
	    margin-right: 3.466667vw;
		
	}
	.shoplist_title:after{
		display: block;
	    content: "";
	    width: .533333rem;
	    width: 5.333333vw;
	    height: .026667rem;
	    height: .266667vw;
	    background-color: #999;
	    margin-left: .346667rem;
	    margin-left: 3.466667vw;
	}
	.shoplist{
		background:#fff;
	}
	.shop{
		    position: relative;
		    border-bottom: .013333rem solid #eee;
		    border-bottom: .133333vw solid #eee;
		    background-color: #fff;
		    color: #666;
		    padding: .4rem 0;
		    padding: 4vw 0;
		    list-style: none;
		    font-size: .293333rem;
		    line-height: normal;
	}
	.shop_top{
		display: -webkit-flex;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-justify-content: flex-start;
	    -webkit-box-pack: start;
	    -ms-flex-pack: start;
	    justify-content: flex-start;
	    -webkit-align-items: stretch;
	    -webkit-box-align: stretch;
	    -ms-flex-align: stretch;
	    align-items: stretch;
	    padding: 0 .266667rem;
	    padding: 0 2.666667vw;	
	}
	.shop_logo{
	    position: relative;
	    -webkit-flex: none;
	    -webkit-box-flex: 0;
	    -ms-flex: none;
	    flex: none;
	    .shop_img{
	        position: relative;
		    -webkit-flex: none;
		    -webkit-box-flex: 0;
		    -ms-flex: none;
		    flex: none;	
		    img{
	    	    position: relative;
			    -webkit-flex: none;
			    -webkit-box-flex: 0;
			    -ms-flex: none;
			    flex: none;
		    }
	    }
	}
	.shop_title{
		display: -webkit-flex;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-justify-content: space-between;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    overflow: hidden;	
        -webkit-flex-grow: 1;
	    -webkit-box-flex: 1;
	    -ms-flex-positive: 1;
	    flex-grow: 1;
	    -webkit-flex-direction: column;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    padding-left: .266667rem;
	    padding-left: 2.666667vw;
	}
	.shop_name,.shop_star,.shop_send{
		display: -webkit-flex;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-justify-content: space-between;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    overflow: hidden;
	    -webkit-align-items: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.shop_name{
		h3{
		    display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    margin: 0;
		    padding: 0;
		    color: #333;
		    font-weight: 700;
		    font-size: .4rem;
		    overflow: hidden;	
		    i{
	    	    position: relative;
				margin-right: 1.133333rem;
				margin-right: 7.333333vw;
				padding: .026667rem .066667rem;
				padding: .266667vw .666667vw;
				color: transparent;
				text-align: center;
				white-space: nowrap;
				font-weight: 700;
				font-size: .293333rem;
				font-style: normal;
				line-height: normal;
		    }
		    i:after{
		    	display: block;
			    position: absolute;
			    left: 0;
			    top: 0;
			    z-index: 0;
			    content: attr(content);
			    padding: .011373rem .02844rem;
			    padding: .113733vw .2844vw;
			    padding: .053333rem .133333rem;
			    padding: .533333vw 1.333333vw;
			    color: #6f3f15;
			    font-weight: 700;
			    font-size: .125147rem;
			    font-size: .586667rem;
			    border-radius: .022747rem;
			    border-radius: .227467vw;
			    border-radius: .106667rem;
			    border-radius: 1.066667vw;
			    background-image: -webkit-linear-gradient(229deg,#fff100,#ffe339);
			    background-image: linear-gradient(-139deg,#fff100,#ffe339);
			    white-space: nowrap;
			    -webkit-transform: scale(.5);
			    transform: scale(.5);
			    -webkit-transform-origin: 0 0;
			    transform-origin: 0 0;	
		    }
		    span{
		    	overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowra
		    }
		}
		ul{
		     -webkit-align-items: center; 
		     -webkit-box-align: center; 
		    -ms-flex-align: center;
		     align-items: center; 
		     margin-left: .266667rem; 
		     margin-left: 2.666667vw; 	
	        display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		}
	}
	.shop_star{
		.shop_pj{
			display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-align-items: center;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;	
		}
	}
	.shop_pj_star{
		position: relative;
	    overflow: hidden;
	    display: inline-block;
	    vertical-align: middle;	
	    .star_img{
    	    display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    img{
		    	width: 1.493333rem;
				width: 14.933333vw;
				height: .266667rem;
				height: 2.666667vw;
				-webkit-flex: none;
				-webkit-box-flex: 0;
				-ms-flex: none;
				flex: none;
				max-width: none;
		    }
	    }
	    .pj_img{
	        position: absolute;
		    top: 0;
		    left: 0;
		    overflow: hidden;	
		    img{
	    	    width: 1.493333rem;
			    width: 14.933333vw;
			    height: .266667rem;
			    height: 2.666667vw;
			    -webkit-flex: none;
			    -webkit-box-flex: 0;
			    -ms-flex: none;
			    flex: none;
			    max-width: none;
		    }
	    }
	    span{
		    margin: 0 .106667rem;
	    	margin: 0 1.066667vw;	
	    }
	}
	.shop_send{
		.send{
			display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-align-content: center;
		    -ms-flex-line-pack: center;
		    align-content: center;
		}
		.send_m{
			overflow: hidden;
		    max-width: 2.666667rem;
		    max-width: 26.666667vw;
		    text-overflow: ellipsis;
		    white-space: nowrap;	
		}
		.send_m:before{
		     margin: 0 .017067rem; 
		     margin: 0 .170667vw; 
		     margin: 0 .08rem; 
		     margin: 0 .8vw; 
		    color: #ddd;
		    content: "|";	
		}
	}
	.send_time{
		    display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-align-items: center;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;
		    color: #999;
		    .send_km:after{
	    	    margin: 0 .017067rem;
			    margin: 0 .170667vw;
			    margin: 0 .08rem;
			    margin: 0 .8vw;
			    color: #ddd;
			    content: "|";
		    }
	}
	.shop_bottom{
		padding-left: 2.266667rem;
    	padding-left: 22.666667vw;
    	section{
    	    display: -webkit-flex;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
	        position: relative;
		    -webkit-justify-content: space-between;
		    -webkit-box-pack: justify;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    -webkit-align-content: stretch;
		    -ms-flex-line-pack: stretch;
		    align-content: stretch;
		    overflow: hidden;	
    	}
	}
	.shop_active{
	    -webkit-flex: 1;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    padding-right: .266667rem;
	    padding-right: 2.666667vw;
	    overflow: hidden;	
	    .active_title{
    	    display: inline-block;
			position: relative;
			margin-right: .16rem;
			margin-right: 1.6vw;
			height: .373333rem;
			height: 3.733333vw;
			width: .373333rem;
			width: 3.733333vw;
			vertical-align: middle;
			span{
				position: absolute;
			    left: 0;
			    top: 0;
			    z-index: 0;
			    height: .746667rem;
			    height: 7.466667vw;
			    width: .746667rem;
			    width: 7.466667vw;
			    font-size: .56rem;
			    color: #fff;
			    display: -webkit-flex;
			    display: -webkit-box;
			    display: -ms-flexbox;
			    display: flex;
			    -webkit-align-items: center;
			    -webkit-box-align: center;
			    -ms-flex-align: center;
			    align-items: center;
			    -webkit-justify-content: center;
			    -webkit-box-pack: center;
			    -ms-flex-pack: center;
			    justify-content: center;
			    border-radius: .106667rem;
			    border-radius: 1.066667vw;
			    -webkit-transform: scale(.5);
			    transform: scale(.5);
			    -webkit-transform-origin: 0 0;
			    transform-origin: 0 0;
			    background-color: rgb(112, 188, 70)
			}
	    }
	}
</style>
