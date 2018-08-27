<template>
	<div class="shop">
		<div class="app-2zj-m_1">
			<div class="app-1TQsf_1">
				<div class="app-dps8r_1">
					<div class="shop-header-3Zr-_">
						<div class="shop-header-1fspV shop-header-1swXn">
							<span class='shop-header-1Isbn'@click='goBack'>
							</span>
						</div>
						<div class="shop-header-1wVeP">
							<img class="shop-header-2hPPi" src="https://fuss10.elemecdn.com/d/ad/87079d77b74695ff2e33859715056jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
							<div class="shop-header-2EhEt">
								<h2 class="shop-header-3df9k">
									<span class="mini-tag-1Lyw4 shop-header-2D_B8">
										<span class="shop-header-3O-AN mini-tag-1ezSQ">
											品牌
										</span>
									</span>
									<span class="shop-header-3pPdD">哈根达斯(北京亦庄华联店)</span>
									<i class="shop-header-2iVYi"></i>
								</h2>
								<div class="shop-header-1SsQo">
									<span class="shop-header-qCsXg">月售44单</span>
								</div>
								<div class="shop-header-2JWG_">
									注意事项：
1.收到后尽快食用或放入冰箱冷冻保存
2.包装内的干冰-70℃，杜绝手触摸或食用，不可放入冰箱等密闭空间，任其自然挥发即可
3.订单生成后，不支持更改收货地址
4.我们尽量在1小时左右为您送达，如遇交通堵塞或管制，路面积水或积冰，大风、大雨、冰雪、高温等不利天气或不可抗力，配送人员可能会延长您商品的配送时间。如需协助，请拨打4009870870专线
5.目前暂不支持蛋糕裱字和代写祝福语
								</div>
							</div>
						</div>
						<div class="shop-header-2GBKf">
							<div class="shop-header-3clEd">
								<div class="activity-1hPHa activity-2JHFT">
									<span class="mini-tag-1Lyw4 activity-N5WvH">
										首单
										<span class="activity-yP-9y mini-tag-1ezSQ">首单</span>
									</span>
									<span class="activity-3dUjU">新用户下单立减17元(不与其它活动同享)</span>
								</div>
								<div class="shop-header-2yEPX">
        								4个优惠
								</div>
							</div>
						</div>
						<div class="shop-header-18anF">
							<router-link class='shop-header-1sFmi shop-header-3PFE4' to=''>
								<p class="shop-header-_OATh">
									<span>8</span>元无门槛红包
								</p>
								<button>领取</button>
							</router-link>
						</div>
					</div>
				</div>
				<!--tab-->
				<div class="shop-tab-1MgBk">
					<div class="shop-tab-2ipt1 shop-tab-nD6jp">
						<span class="shop-tab-2H0qT">点餐</span>
					</div>
					<div class="shop-tab-2ipt1">
						<span class="shop-tab-2H0qT">评价</span>
					</div>
					<div class="shop-tab-2ipt1">
						<span class="shop-tab-2H0qT">商家</span>
					</div>
				</div>
				<!--list-->
				<div class="menuview-menuviewMain_17K3g">
					<div class="menuview-main_i6fQ3">
						<!--------------左侧---------->
						<div class="left_scroll" ref='left_btn'>
							<ul class="menucategory-category_29kyE menuview-menuNav_2_lFf" >
								<li class="left_list_btn menucategory-active_JnDmc menucategory-hasicon_2MBNs menucategory-categoryItem_3e27M" :class="{active_btn:index == left_btn_index}" v-for="(shop,index) in shoplist"  @click="click_btn(index)">
									<img  v-if="shop.icon_url?!isShowIcon:isShowIcon"  class="menucategory-categoryIcon_375ij" src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png?imageMogr/format/webp/thumbnail/26x/"/>
									<span class="menucategory-categoryName_qwsbd">{{shop.name}}</span>
								</li>
							</ul>
						</div>
						<!------------右侧----------->
						<section class="right_scroll menuview-menuList_JqDMu" ref='right_btn'>
							<div class="scroller">
								<dl v-for=" (shop,index) in shoplist" :key="index">
									<dt>
										<div class="category-title">
											<strong class="category-name">
												{{shop.name}}
											</strong>
											<span class="category-desc">
												{{shop.description}}
											</span>
										</div>
									</dt>
									<dd v-for="(food,foodIndex) in shop.foods" :key='foodIndex'>
										<div class="fooddetails-root_2HoY2">
											<span class="fooddetails-logo_2Q0S7">
												<img src="https://fuss10.elemecdn.com/a/d7/340f854a3cb5324455e6b5db1677fpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="红豆抹茶麻糬对对杯" />
											</span>
											<div class="fooddetails-info_1fBtn">
												<p class="fooddetails-name_P4hpW">
													<span>{{food.name}}</span>
												</p>
												<p class="fooddetails-desc_3tvBJ">{{food.description}}</p>
												<p class="fooddetails-sales_1ETVq">
													<span>月售{{food.month_sales}}份</span>
													<span>好评率{{food.satisfy_rate}}%</span>
												</p>
												<div class="fooddetails-activityRow_1FKti">
													<span class="foodcommon-activity_2wCAV">
														<span class="mini-tag-tag_1I2lF_0">
															7折
															<span class="foodcommon-rateGhost_1xmLU mini-tag-ghost_2_w2f_0">7折</span>
															
														</span>
														<span class="mini-tag-tag_1I2lF_0">
															<span class="mini-tag-tag_1I2lF_0">
																{{food.activity?food.activity.applicable_quantity_text:'哈哈哈哈'}}
															</span>
															<span class="foodcommon-rateTextGhost_1a27R mini-tag-ghost_2_w2f_0">{{food.activity?food.activity.applicable_quantity_text:'哈哈哈哈'}}</span>
														</span>
													</span>
												</div>	
												<strong class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41">
													<span>49</span>
													<em class="salesInfo-originPrice_3GIqu_0">
												    	¥70
												    </em>
												</strong>
												<!--------------------加减按钮------------------->
												<div class="fooddetails-button_RwKqC">
													<span class="cartbutton-entitybutton_2u6UF">
														<router-link to=''>
															<svg data-v-2feef6d8=""><use data-v-2feef6d8="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
															
														</router-link>
														<span class="cartbutton-entityquantity_1LX01">{{shop_number}}</span>
														<router-link to=''>
															<svg data-v-2feef6d8="" class="add_icon"><use data-v-2feef6d8="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg>
														</router-link>
													</span>
													
												</div>
											</div>
										</div>
									</dd>
								</dl>
							</div>
						</section>
					</div>
				</div>
				<!---------------footer------------------>
				<footer class="cartview-cartview_xUNA6">
					<div class="cartview-cartmask_3rV-M"></div>
					<div class="cartview-cartbody_15r9z">
						<section class="discount-tip-discountTip_1IcZ7_0">满25减15，满49减20，满79减25</section>
						<div class="opc">
							<div class="cartview-cartheader_342ET">
								<div class="cartview-headerText_3abxn">
									<span class="cartview-title_2uj0T">已选商品</span>
								</div>
								<router-link to='' class='cartview-cartheaderRemove_2WfO3'>
									<svg data-v-c8684834=""><use data-v-c8684834="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use></svg>
									<span>清空</span>
								</router-link>
							</div>
							<div class="entityList-cartbodyScroller_GxeX__0">
								<ul>
									<li>
										<span class="entityList-entityname_3EB7j_0">
											<em class="entityList-name_3WPWD_0">
												️️❤皮蛋瘦肉粥
											</em>
											<p class="entityList-entityspecs_11gLJ_0"></p>
										</span>
										<span class="entityList-entitytotal_1xh48_0">
											<span class="entityList-entitytotalDiscount_2OrZA_0">
												16
											</span>
										</span>
										<span class="entityList-entitycartbutton_kxRm0_0">
											<span class="cartbutton-entitybutton_2u6UF">
												<router-link to=''>
													<svg data-v-2feef6d8=""><use data-v-2feef6d8="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
													
												</router-link>
												<span class="cartbutton-entityquantity_1LX01">1</span>
												<router-link to=''>
													<svg data-v-2feef6d8="" class="add_icon"><use data-v-2feef6d8="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg>
												</router-link>
											</span>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-------------购物车------------------>
					<div class="buy_cart_container">
						<section class="cart_icon_container">
							<span class="cart_list_length">
								1
							</span>
							<svg data-v-c8684834="" class="cart_icon"><use data-v-c8684834="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon"></use></svg>
						</section>
						<div class="cart_num">
							<div class="pay_money">¥ 0.00</div>
							<div class="send_money">配送费¥5</div>
						</div>
						<!--<section class="gotopay">
							<span class="gotopay_button_style">还差¥20起送</span>
						</section>-->
						<div class="gotopay gotopay_acitvity">
							<router-link to='' class='gotopay_button_style'>
								去结算
							</router-link>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios'
	import BScroll from 'better-scroll'
	import {mapState} from 'vuex'
	export default{
		name:'shop',
		data(){
			return {
				shoplist:[],
				isShowIcon:false,
				isLoading:false,
				btn_change:false,//解决选中index时，scroll监听事件重复判断设置index的bug
//				rightScroll:null,//右侧滚动
				left_btn_index:null,//左侧按钮下标
				shopListHeight:[]//左侧按钮高度集合
			}
		},
		computed:{
			...mapState([
				'category_id','shop_number',''
			])
		},
		methods:{
			getShopList(){//获取数据
				var that = this;
				axios.get('./static/shop.json')
				.then(function(res){
					that.shoplist= res.data
					Vue.nextTick(()=>{
						that.getFoodListHeight()
					})
					
				})
				.catch(function(error){
					console.log(error)
				})
			},
			getFoodListHeight(){
				var that = this;
				const right_list_btn = this.$refs.right_btn;
				const right_list_arr = Array.from(right_list_btn.children[0].children)
				right_list_arr.forEach(function(item,index){
					that.shopListHeight[index] = item.offsetTop
				})
				this.listenScroll()
			},
			listenScroll(){
				const leftScroll = new BScroll('.left_scroll',{
//					scrollY: true,
   					click: true,
// 					deceleration: 0.001,
//                  bounce: false,
//                  swipeTime: 2000,
   					
				});
				this.rightScroll = new BScroll(this.$refs.right_btn,{
					scrollY: true,
   					click: true,
   					deceleration: 0.001,
                    bounce: false,
                    swipeTime: 2000,
				});
				const leftListHeight = this.$refs.left_btn.clientHeight;
				this.rightScroll.on('scroll', (pos) =>{//貌似感觉没有用
					console.log(pos)
					if(!this.$refs.left_btn){
						return
					}
					this.shopListHeight.forEach(function(item,index){
						if(this.btn_change&&Math.abs(Math.round(pos.y) >= item)) {
							this.left_btn_index = index;
							const active_list = this.$refs.left_btn.querySelectorAll('.active_btn_index')
							const el = active_list[0]
							leftScroll.scrollToElement(el,800,0,-(leftListHeight/2 - 50))
							
						}
					})
				})
			},
			click_btn(index){
				this.left_btn_index = index;
				//btn_change解决运动时listenScroll依然监听的bug//并没有看出是什么bug
				this.btn_change = false;
				this.rightScroll.scrollTo(0, -this.shopListHeight[index], 900);
				this.rightScroll.on('scrollEnd', () => {
                    this.btn_change = true;
                })
			},
			goBack(){
				this.$router.go(-1);
			},
			
		},
		
		watch:{
			
		},
		created(){
			
		},
		mounted(){
			this.getShopList()
			
		},
		updated(){
//			this.getFoodListHeight()
		}
	}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.app-2zj-m_1{
	    width: 100%;
    overflow-x: hidden
}
.app-1TQsf_1{
	    width: 100%;
    height: 100vh;
    padding-right: .226667rem;
    padding-right: 2.266667vw;
    box-sizing: content-box;
    overflow-y: auto;
    /*-webkit-overflow-scrolling:touch;*/
}
.app-dps8r_1{
   		position: relative;
}
.shop-header-3Zr-_{
      padding-bottom: .213333rem;
    padding-bottom: 2.133333vw;
    color: #333;
    font-size: .293333rem;
    background-color: #fff;	
}
.shop-header-1fspV{
	padding: .106667rem .266667rem;
    padding: 1.066667vw 2.666667vw;
    height: 1.6rem;
    height: 16vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: justify;
    align-items: justify;
    position: relative
}
.shop-header-1fspV:before{
	content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(119,103,137,1);
}
.shop-header-1Isbn{
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .32rem;
    width: 3.2vw;
    height: .32rem;
    height: 3.2vw;
    display: inline-block;
    border-bottom: .053333rem solid #fff;
    border-bottom: .533333vw solid #fff;
    border-left: .053333rem solid #fff;
    border-left: .533333vw solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)	
}
.shop-header-1wVeP{
	    padding: .8rem .4rem 0;
    padding: 8vw 4vw 0;
    position: relative;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    text-align: center;
    .shop-header-2hPPi{
        width: 1.733333rem;
	    width: 17.333333vw;
	    height: 1.733333rem;
	    height: 17.333333vw;
	    border-radius: .053333rem;
	    border-radius: .533333vw;
	    box-shadow: 0 0 0.04rem 0 rgba(0,0,0,.2);
	    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
	    position: absolute;
	    top: 0;
	    left: 50%;
	    margin-left: -1rem;
	    margin-left: -10vw;
	    margin-top: -1.2rem;
	    margin-top: -12vw;	
    }
}
.shop-header-2EhEt{
	-webkit-flex: 1;
    flex: 1;
    width: 7.2rem;
    width: 72vw;
}
.shop-header-3df9k{
	    margin: 0;
    font-size: .546667rem;
    line-height: 1.2em;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.mini-tag-1Lyw4 .shop-header-2D_B8{
    margin-right: .16rem;
    margin-right: 1.6vw;
}
.shop-header-2D_B8{
	    border-radius: .026667rem;
    border-radius: .266667vw;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    width: .96rem;
    width: 9.6vw;
    height: .48rem;
    height: 4.8vw;
}
.mini-tag-1Lyw4{
	position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}
.shop-header-3O-AN{
	    color: #6a3709;
    font-style: normal;
    font-weight: 700;
    font-size: .64rem!important;
}
.mini-tag-1ezSQ{
	    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: .533333rem;
}
.shop-header-3pPdD{
	text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
}
.shop-header-2iVYi{
	    width: .4rem;
    width: 4vw;
    position: relative;
    height: .653333rem;
    height: 6.533333vw;
}
.shop-header-2iVYi:after{
	content: "";
    border-style: solid;
    border-width: .146667rem 0 .146667rem .173333rem;
    border-width: 1.466667vw 0 1.466667vw 1.733333vw;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    position: absolute;
    left: .16rem;
    left: 1.6vw;
    top: .213333rem;
    top: 2.133333vw;
}
.shop-header-1SsQo{
	white-space: nowrap;
    height: .32rem;
    height: 3.2vw;
    margin-top: .173333rem;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #333;
}
.shop-header-qCsXg{
	    white-space: nowrap;
    height: .32rem;
    height: 3.2vw;
    margin-top: .173333rem;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #333;
}
.shop-header-qCsXg:after{
	    content: " \B7 ";
    opacity: .2;
}
.shop-header-2JWG_{
	    width: 5.813333rem;
    width: 58.133333vw;
    font-size: .293333rem;
    font-weight: 300;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .226667rem auto .266667rem;
    margin: 2.266667vw auto 2.666667vw;
    padding: 0;
    white-space: nowrap;
}
.shop-header-2GBKf{
	display: -webkit-flex;
    display: flex;
    border-radius: 1px;
    border: 1px solid #eee;
    padding: .133333rem .213333rem;
    padding: 1.333333vw 2.133333vw;
    font-size: .293333rem;
    color: #666;
    margin: 0 .64rem;
    margin: 0 6.4vw;
    -webkit-align-items: center;
    align-items: center;
}
.shop-header-3clEd{
	    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    .activity-2JHFT{
    	-webkit-align-items: center;
   		 align-items: center
    }
    .activity-1hPHa{
	    display: -webkit-flex;
	    display: flex;
	    font-size: .346667rem;
	    -webkit-align-items: center;
	    align-items: center;
    }
}
.activity-N5WvH{
	margin-right: .16rem;
    margin-right: 1.6vw;
    font-size: .24rem;
    padding: .053333rem .12rem;
    padding: .533333vw 1.2vw;
    height: .346667rem;
    height: 3.466667vw;
    display: inline-block;
    box-sizing: border-box;
    border-radius: .026667rem;
    border-radius: .266667vw;
    background-color: rgb(112, 188, 70);
}
.activity-3dUjU{
    -webkit-flex: 1;
    flex: 1;
    font-size: .293333rem;
}
.shop-header-2yEPX{
	    width: 1.626667rem;
    width: 16.266667vw;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    position: relative;
    padding-right: .293333rem;
    padding-right: 2.933333vw;
    text-align: right;
}
.shop-header-2yEPX:after{
	    content: "";
    display: block;
    border-style: solid;
    border-width: .106667rem .093333rem 0;
    border-width: 1.066667vw .933333vw 0;
    border-color: rgba(0,0,0,.57) transparent transparent;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
}
.shop-header-18anF{
	    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: .213333rem;
    margin-top: 2.133333vw;
}
.shop-header-1sFmi{
    border: .013333rem solid #fde6e3;
    border: .133333vw solid #fde6e3;
    display: inline-block;
    padding: 0 .16rem 0 .2rem;
    padding: 0 1.6vw 0 2vw;
    height: .64rem;
    height: 6.4vw;
    line-height: .64rem;
    line-height: 6.4vw;
    background: #fff4f4;
    color: #5c1603;
    font-size: .293333rem;
    font-weight: 700;
}
.shop-header-1sFmi.shop-header-3PFE4{
	color: #594519;
    border: 1px solid #f7eebb;
    background: #fff8d7;
}
.shop-header-_OATh{
	    position: relative;
    display: inline-block;
    padding-right: .186667rem;
    padding-right: 1.866667vw;
    font-weight: 700;
    span{
	    font-size: .346667rem;
   		 color: #ff5339;
    }
    
}
button{
    	padding-left: .16rem;
	    padding-left: 1.6vw;
	    color: #5c1704;
	    font-weight: 700;
	    background: transparent;
        outline: none;
	    border: none;
	    font-size: inherit;
	    font-family: inherit;
    }
    
.shop-tab-1MgBk{
	    line-height: 1.066667rem;
    line-height: 10.666667vw;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}
.shop-tab-nD6jp{
	color: #333;
    font-weight: 700;
}
.shop-tab-2ipt1{
	    position: relative;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    font-size: .373333rem;
    color: #666;
    border-bottom: 1px solid #ddd;
}
.shop-tab-nD6jp .shop-tab-2H0qT{
	position: relative;
}
.shop-tab-nD6jp .shop-tab-2H0qT:after{
	    content: "";
    position: absolute;
    bottom: -.32rem;
    bottom: -3.2vw;
    left: 0;
    right: 0;
    height: .053333rem;
    height: .533333vw;
    background-color: #2395ff;
}
.menuview-menuviewMain_17K3g{
	height: 100%;
    padding-bottom: 1.28rem;
    padding-bottom: 12.8vw;
    background-color: #fff;	
    .menuview-main_i6fQ3{
    	display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    height: 100%;
	    ul{
	    	padding: 0 0 1.066667rem;
		    padding: 0 0 10.666667vw;
		    list-style: none;
		    -webkit-box-flex: 0;
		    -webkit-flex: none;
		    -ms-flex: none;
		    flex: none;
	    }
    }
}
.menucategory-category_29kyE{
	/*overflow-y: auto;
    height: 100%;*/
    background-color: #f8f8f8;
    /*-webkit-overflow-scrolling: touch;*/
    padding-bottom: 1.066667rem;
    padding-bottom: 10.666667vw;
}
.menuview-menuNav_2_lFf{
	    width: 2.053333rem;
    width: 20.533333vw;
    /*height: 100%;*/
}
.menucategory-categoryItem_3e27M.menucategory-active_JnDmc{
	color: #333;
    /*background-color: #fff;*/
}
.menucategory-categoryItem_3e27M{
	    position: relative;
    padding: .466667rem .2rem;
    padding: 4.666667vw 2vw;
    border-bottom: 1px solid #e8e8e8;
    font-size: .32rem;
    color: #666;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.menuview-menuview_2hUkG img{
	    max-width: 100%;
}
.menucategory-categoryIcon_375ij{
	width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    vertical-align: top;
    margin-right: .08rem;
    margin-right: .8vw;
}
.right_scroll{
	    position: relative;
    height: 100%;
}
.menuview-menuList_JqDMu{
	/*height: 100%;*/
    width: 7.946667rem;
    width: 79.466667vw;
    overflow-y: hidden;
}
.scroller{
	    /*height: 100%;*/
    padding-bottom: 1.066667rem;
    padding-bottom: 10.666667vw;
    /*overflow-y: auto;*/
    /*-webkit-overflow-scrolling: touch;*/
   dt{
   	    position: relative;
	    margin-left: .266667rem;
	    margin-left: 2.666667vw;
	    padding: .2rem .8rem .2rem 0;
	    padding: 2vw 8vw 2vw 0;
	    border-bottom: 1px solid #eee;
	    background:#ccc;
	    .category-title{
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-align: center;
		    -webkit-align-items: center;
		    -ms-flex-align: center;
		    align-items: center;
		    overflow: hidden;
		}
		.category-name{
			margin-right: .133333rem;
		    margin-right: 1.333333vw;
		    font-weight: 700;
		    font-size: .32rem;
		    color: #666;
		    -webkit-box-flex: 0;
		    -webkit-flex: none;
		    -ms-flex: none;
		    flex: none;
		}
		.category-desc{
		    -webkit-box-flex: 1;
		    -webkit-flex: 1;
		    -ms-flex: 1;
		    flex: 1;
		    color: #999;
		    font-size: .266667rem;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		}
   }
   dd{
	   	position: relative;
	    margin: 0;
	    min-height: 3.066667rem;
	    min-height: 30.666667vw;
	    padding-left: .266667rem;
	    padding-left: 2.666667vw;
	    .fooddetails-root_2HoY2{
	    	    padding: .266667rem .266667rem .266667rem 0;
			    padding: 2.666667vw 2.666667vw 2.666667vw 0;
			    margin-bottom: 1px;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: -ms-flexbox;
			    display: flex;
			    min-height: 2.746667rem;
			    min-height: 27.466667vw;
			    position: relative;
			    .fooddetails-logo_2Q0S7{
			    	width: 2.026667rem;
				    width: 20.266667vw;
				    height: 2.026667rem;
				    height: 20.266667vw;
				    vertical-align: top;
				    -webkit-box-flex: 0;
				    -webkit-flex: none;
				    -ms-flex: none;
				    flex: none;
				    margin-right: .266667rem;
				    margin-right: 2.666667vw;
				    position: relative;
				    img{
				    	    width: 100%;
						    border-radius: .053333rem;
						    border-radius: .533333vw;
				    }
			    }
			    .fooddetails-info_1fBtn{
		    	    -webkit-box-flex: 1;
				    -webkit-flex: 1;
				    -ms-flex: 1;
				    flex: 1;
				    position: relative;
				    padding-bottom: .666667rem;
				    padding-bottom: 6.666667vw;
				    .fooddetails-name_P4hpW{
				    	font-size: .4rem;
					    font-weight: 700;
					    line-height: 1.2;
					    overflow: hidden;
					    display: -webkit-box;
					    display: -webkit-flex;
					    display: -ms-flexbox;
					    display: flex;
					    -webkit-box-align: start;
					    -webkit-align-items: start;
					    -ms-flex-align: start;
					    align-items: start;
					    padding-right: .533333rem;
					    padding-right: 5.333333vw;
					    word-break: break-word;
				    }
				    .fooddetails-desc_3tvBJ{
			    	    margin: .133333rem 0!important;
					    margin: 1.333333vw 0!important;
					    font-size: .253333rem;
					    color: #999;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    width: 4.8rem;
					    width: 48vw;
				    }
				    .fooddetails-sales_1ETVq{
				    	margin: .173333rem 0!important;
					    margin: 1.733333vw 0!important;
					    color: #666;
					    font-size: .293333rem;
					    line-height: 1;
					    span{
					    	margin-right: .106667rem;
						    margin-right: 1.066667vw;
						    vertical-align: middle;
					    }
				    }
				    
			    }
	    }
   }
}
.fooddetails-activityRow_1FKti{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    
}
.foodcommon-activity_2wCAV{
		display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    span{
	    padding: 0 .08rem;
	    padding: 0 .8vw;
    }	
}	
.mini-tag-tag_1I2lF_0{
	position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}	
.foodcommon-activity_2wCAV .foodcommon-rateGhost_1xmLU	{
	    background-image: -webkit-gradient(linear,left top,right top,from(#ff7416),color-stop(98%,#ff3c15));
    background-image: -webkit-linear-gradient(left,#ff7416,#ff3c15 98%);
    background-image: linear-gradient(90deg,#ff7416,#ff3c15 98%);
    border-top-left-radius: .013333rem;
    border-top-left-radius: .133333vw;
    border-top-right-radius: .013333rem;
    border-top-right-radius: .133333vw;
    color: #fff;
}   
.mini-tag-ghost_2_w2f_0 {
	    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
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
    font-size: .533333rem;
}
.salesInfo-price_3_oc1_0{
	    font-weight: 700;
    font-size: .426667rem;
    line-height: .426667rem;
    line-height: 4.266667vw;
    color: #f60;
    padding-bottom: .093333rem;
    padding-bottom: .933333vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    span{
    	    margin-right: .106667rem;
    		margin-right: 1.066667vw;
    }
}
.salesInfo-price_3_oc1_0:before{
	font-weight: 400;
    content: "\A5";
    font-size: .32rem;
    margin-right: .053333rem;
    margin-right: .533333vw;
    display: inline-block;
}
.salesInfo-originPrice_3GIqu_0{
	    font-size: .32rem;
    color: #666;
    font-weight: 400;
    vertical-align: top;
}
.fooddetails-button_RwKqC{
	    position: absolute;
    right: 0;
    bottom: 0.366667rem;
    bottom: 4.333333vw;
}
.cartbutton-entitybutton_2u6UF{
	    display: inline-block;
    font-size: .346667rem;
    white-space: nowrap;
    a{
	    display: inline-block;
	    padding: .093333rem;
	    padding: .933333vw;
	    vertical-align: middle;
	    text-decoration: none;
	    svg{
	    	width:17px;
	    	height:17px;
	    }
    }
}

/*.cartbutton-entitybutton_2u6UF a svg[data-v-ee0763f4]{
	width:17px;
	height:17px;
}*/
.cartbutton-entityquantity_1LX01{
    display: inline-block;
    text-align: center;
    color: #666;
    vertical-align: middle;
    font-size: .373333rem;
    min-width: .4rem;
    min-width: 4vw;
    max-width: 2em;
    overflow: hidden;
}
.foodcommon-activity_2wCAV .foodcommon-rateTextGhost_1a27R{
	color: #f07373;
    border: 2px solid #ff3c15;
    border-left: none;
}
.cartview-cartview_xUNA6{
	font-size: .426667rem;
}
.cartview-cartmask_3rV-M{
	z-index: 10;
    display: none;
        position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .4;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}
.cartview-cartbody_15r9z{
	    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    bottom: 2.513333rem;
    bottom: 26.133333vw;
    z-index: 11;
    .discount-tip-discountTip_1IcZ7_0{
	    background-color: #fffad6;
	    border-top: 1px solid #f9e8a3;
	    opacity: .96;
	    line-height: .533333rem;
	    line-height: 5.333333vw;
	    font-size: .266667rem;
	    text-align: center;
    }
}
.opc{
	opacity: 0;
}
.cartview-cartheader_342ET, .cartview-headerText_3abxn{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.cartview-cartheader_342ET{
	padding: 0 .333333rem;
    padding: 0 3.333333vw;
    border-bottom: 1px solid #ddd;
    background-color: #eceff1;
    color: #666;
    height: 1.066667rem;
    height: 10.666667vw;
}
.cartview-headerText_3abxn{
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    .cartview-title_2uj0T{
    	    padding-left: .133333rem;
	    padding-left: 1.333333vw;
	    border-left: .093333rem solid #2395ff;
	    border-left: .933333vw solid #2395ff;
	    -webkit-box-flex: 0;
	    -webkit-flex: none;
	    -ms-flex: none;
	    flex: none;
    }
}
.cartview-cartheaderRemove_2WfO3{
	    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .4rem;
    padding-left: 4vw;
    color: #666;
    text-decoration: none;
    font-size: .346667rem;
    line-height: .4rem;
    line-height: 4vw;
    svg{
    	    width: .4rem;
		    width: 4vw;
		    height: .4rem;
		    height: 4vw;
		    fill: #ddd;
		    margin-right: .08rem;
		    margin-right: .8vw;
    }
}
.entityList-cartbodyScroller_GxeX__0{
	overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 8rem;
    max-height: 80vw;
    ul{
    	    padding: 0 0 1.066667rem;
	    padding: 0 0 10.666667vw;
	    list-style: none;
	    -webkit-box-flex: 0;
	    -webkit-flex: none;
	    -ms-flex: none;
	    flex: none;
	    li{
	    	    display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-align: center;
		    -webkit-align-items: center;
		    -ms-flex-align: center;
		    align-items: center;
		    padding: .2rem .333333rem .2rem 0;
		    padding: 2vw 3.333333vw 2vw 0;
		    min-height: 1.466667rem;
		    min-height: 14.666667vw;
		    margin-left: .333333rem;
		    margin-left: 3.333333vw;
		    
	    }
    }
}
.entityList-entityname_3EB7j_0{
	    -webkit-box-flex: 5.5;
    -webkit-flex: 5.5;
    -ms-flex: 5.5;
    flex: 5.5;
    line-height: normal;
    .entityList-name_3WPWD_0{
    	display: inline-block;
	    font-style: normal;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    vertical-align: middle;
	    max-width: 4.666667rem;
	    max-width: 46.666667vw;
    }
}
.entityList-entityspecs_11gLJ_0{
	white-space: nowrap;
    line-height: .333333rem;
    line-height: 3.333333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    font-size: .266667rem;
}
.entityList-entitytotal_1xh48_0{
	-webkit-box-flex: 2.5;
    -webkit-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    color: #f60;
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
}
.entityList-entitytotalDiscount_2OrZA_0{
	-webkit-box-flex: 2.5;
    -webkit-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    color: #f60;
    text-align: right;
    white-space: nowrap;
    font-weight: 700
}
.entityList-entitytotalDiscount_2OrZA_0:before{
	    content: "\A5";
    font-size: .266667rem;
    color: currentColor;
}
.entityList-entitycartbutton_kxRm0_0{
	    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    text-align: right;
}
.cartbutton-entitybutton_2u6UF{
	display: inline-block;
    font-size: .346667rem;
    white-space: nowrap;
    a{
    	    display: inline-block;
	    padding: .093333rem;
	    padding: .933333vw;
	    vertical-align: middle;
	    text-decoration: none;
	    svg{
	    	width: 40px;
		    height: 40px;
		    vertical-align: middle;
		    fill: #2395ff;
	    }
    }
}
.cartbutton-entityquantity_1LX01{
	    display: inline-block;
    text-align: center;
    color: #666;
    vertical-align: middle;
    font-size: .373333rem;
    min-width: .4rem;
    min-width: 4vw;
    max-width: 2em;
    overflow: hidden;
}
.buy_cart_container{
	    position: absolute;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 1.6rem;
	    .cart_icon_activity{
	    	  background-color: #3190e8;
	    }
	    .cart_icon_container{
	    	display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		    background-color: #3d3d3f;
		    position: absolute;
		    /*padding: .4rem;*/
		    border: 0.18rem solid #444;
		    border-radius: 50%;
		    left: .5rem;
		    top: -.5rem;
		    .cart_list_length{
		    	position: absolute;
			    top: -.25rem;
			    right: -.25rem;
			    background-color: #ff461d;
			    line-height: .7rem;
			    text-align: center;
			    border-radius: 50%;
			    border: 0.025rem solid #ff461d;
			    min-width: .7rem;
			    height: .7rem;
			    font-size: 0.5rem;
			    color: #fff;
			    font-family: Helvetica Neue,Tahoma,Arial;
		    }
		    .cart_icon{
		    	    width: 1.2rem;
    			height: 1.2rem
		    }
	    }
	    .cart_num{
	    	    position: absolute;
		    top: 50%;
		    -webkit-transform: translateY(-50%);
		    -ms-transform: translateY(-50%);
		    transform: translateY(-50%);
		    left: 2.5rem;
		    .pay_money{
		    	font-size: .4rem;
			    font-weight: bold;
			    margin-bottom: .1rem;
			    color:#fff;
			    width:3rem;
		    }
		    .send_money{
	    	    font-size: .4rem;
	    	    color:#fff;
		    }
	    }
}
.buy_cart_container .gotopay_acitvity{
	background-color: #4cd964;
}
.buy_cart_container .gotopay{
	position: absolute;
    right: 0;
    width: 3rem;
    height: 100%;
    text-align: center;
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
}
.gotopay_button_style{
	    font-size: 0.7rem;
    color: #fff;
    font-weight: bold;
}
.active_btn{
	border-left:4px solid blue;
	background:#fff;
	font-Weight:bolder;
}

</style>