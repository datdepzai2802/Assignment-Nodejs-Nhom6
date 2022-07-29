const UserHeadertd = {
	render: () => {
		return (
            /*html*/`
			<div class="bguserhd">
                <div class=" flex items-center px-[16px] md:flex md:items-center md:pl-[130px] md:pr-[130px] md:text-[16px] md:font-normal ">
				<a href="http://localhost:3000/a">
									<img class=" md:w-[140px] md:h-[62px] md:p-1 Reposehidden" src="/images/logohptd.png"/>
									</a>

                                    <a href="http://localhost:3000/a">
									<img class="show w-[30px] hiddenpc " src="/images/logohdtd.jfif"/>
									</a>

                                    <a class="md:px-2 smember md:flex md:items-center md:ml-1" href="">
                                    <i class="fa-solid fa-book  Reposehidden"></i>
                                    <p class="fus1 md:pl-[8px]  text-white Reposehidden">Danh mục </p>
                                    </a>
                                

                                    <a class="md:px-2 smember md:flex md:items-center md:ml-1" href="">
                                    <i class="fa-solid fa-location-dot Reposehidden"></i>
                                    <p class="fus1 md:pl-[8px]  text-white Reposehidden">Xem giá tại <br> Miền Nam </p>
                                    </a>

                                    <input class="searchuser1 w-[130px] h-[30px] focus:w-[190px]  ml-[22px] p-2 md:p-2 md:focus:w-[280px] md:w-[280px] md:h-[34px] md:ml-[20px] md:items-center" type="text" placeholder="Bạn cần tìm gì?">
                                    <button class="btnsearch h-[32px] px-2 md:h-[35px]  text-white" type="submit">Tìm</button>
                                    
                                    <a class="md:px-2 smember md:flex md:items-center   md:ml-4" href="">
                                    <p class="fus1 md:pl-[8px]  text-white Reposehidden">Gọi mua hàng <br> 1800.2097 </p>
                                    </a>

                                    <a class="md:px-2 smember md:flex md:items-center md:ml-1" href="">
                                    <i class="fa-solid fa-location-dot Reposehidden"></i>
                                    <p class="fus1 md:pl-[8px]  text-white Reposehidden">Cửa hàng  <br>  gần bạn</p>
                                    </a>
									
                                    <a class="md:px-2 smember md:flex md:items-center md:ml-1" href="">
                                    <i class="fa-solid fa-truck-fast Reposehidden"></i>
                                    <p class="fus1 md:pl-[8px]  text-white Reposehidden">Tra cứu <br> đơn hàng</p>
                                    </a>

                                    <a class="ml10  smember items-center flex flex-wrap md:ml-1 " href="">
                                    <i class="fa-solid fa-bag-shopping md:ml-2 ml-3"></i>
                                    <p class="fus1 text-white ml-2 md:mr-2 mr-3">Giỏ hàng</p>
                                    </a>

                                    <a class="md:px-2 smember md:grid md:items-center md:ml-1" href="">
                                    <i class="fa-solid fa-user md:ml-4 Reposehidden"></i> 
                                    <p class="fus1  text-white Reposehidden">Member</p>
                                    </a>
                                   

                                    
									

                </div>
				</div>
            `
		)
	}
}

export default UserHeadertd