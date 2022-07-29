import UserHeadertd from "../components/HeaderUser/user-header"
import Footertd from "../components/FooterUser/user-footer"
import { getProducts } from "../../api/product"
import Product from "../../model/product"



const HomePagetd = {
    render: async () => {
        const res = await getProducts()
        const data: Product[] = res.data
        console.log(data)


        return /*html*/`
        ${UserHeadertd.render()}
        <div class="hidden md:block">
        <a href="">
        <img class="w-full" src="../public/images/bannersd1.jpg"  alt="">
        </a>
        </div>
        <div class="block md:hidden ">
        <a href="">
        <img class="w-full" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-cf3fdbc/wp-content/uploads/slider/cache/764b2422b9d30ca3747e3e4ec023a2a8/banner-MB-iphone-11-2.jpg"  alt="">
        </a>
        </div>

        <div class="bghp ">

        <div class="pt10 md:pt-10  md:pb-16 md:pl-[130px] md:pr-[130px]">
        <div class=" md:grid md:grid-cols-3 md:gap-3 ">

        <div class="pybn ">
        <a href="">
        <img class="bannernhores" src="https://shopdunk.com/wp-content/uploads/2022/06/Pen.jpg"  alt="">
        </a>
        </div>

        <div class="pybn">
        <a href="">
        <img class="bannernhores" src="https://shopdunk.com/wp-content/uploads/2022/06/AirPods.jpg"  alt="">
        </a>
        </div>

        <div class="pybn">
        <a href="">
        <img class="bannernhores " src="https://shopdunk.com/wp-content/uploads/2022/07/Bonus-Banner_PC-774x700-copy-4.png"  alt="">
        </a>
        </div>


        </div>
        </div>

        <div class="pt30 md:pl-[130px]  md:pr-[130px]  md:pb-8">
        <p class=" text-[23px]  font-semibold pl20">Sắp xếp theo</p>


        <div class=" md:flex  md:pt-2">

        <div class="pt10  md:flex pl20 pr20">
        <a href="">
        <p class="sapxepgia md:text-[14px] text-center text-[20px]"><i class="fa-solid fa-arrow-down-short-wide"></i>Giá Cao - Thấp</p>
        </a>
        </div>

        <div class="pt10 pb30  md:flex pl20 pr20">
        <a class="  md:pl-3" href="">
        <p class="sapxepgia md:text-[14px] text-center text-[20px]"><i class="fa-solid fa-arrow-up-short-wide"></i>Giá Thấp - Cao</p>
        </a>
        </div>

        </div>
        </div>

        <div class="bghp">
       
        <div class="pl20 pr20 grid grid-cols-2 gap-3    md:grid  md:grid-cols-5  md:gap-3  md:pl-[130px]  md:pr-[130px]">
        ${data.map((p) => /*html*/`
        <div class="userproduct">
        <a class="" href="http://localhost:3000/products/${p.id}">
        <img  class=" md:ml-[25px] md:mt-[10px]" src="${p.image}" alt="">
         <p class="nameuser  md:pt-2"> ${p.name}</p>
         <div class=" md:flex">
         <p class="giakmuser"> ${p.saleOffPrice?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p> 
         <p class="giagocuser  md:pl-2 "><del>${p.originalPrice?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</del></p>
        
         </div>
         <p class="mtnuser"> ${p.shortDescription}</p>
         <div class=" md:flex  md:pt-2">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <p class="giagocuser  md:pl-1">33 đánh giá</p>
         </div>
        </a>
        </div>

        `).join('')}
        </div> <br> <br>


        <div class="pl20 pr20 pb30   md:pl-[130px]  md:pr-[130px]  md:pb-8">
        <p class="pb10 text-[23px]  font-semibold">ƯU ĐÃI THANH TOÁN</p>
        <div class=" grid grid-cols-2 gap-3       md:grid  md:grid-cols-4  md:gap-3 md:pt-2">

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/evo.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/VNPAY.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/uu-dai-thanh-toan-kredivo.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/uu-dai-thanh-toan-sacom0991764.png"  alt="">
        </a>

        </div>
        </div> 
       


        <div class="pl20 pr20 pb30     md:pl-[130px]  md:pr-[130px]  md:pb-8 ">
        <p class="pb10 text-[23px]  font-semibold">CHUYÊN TRANG THƯƠNG HIỆU</p>
        <div class=" grid grid-cols-2 gap-3       md:grid  md:grid-cols-4  md:gap-3  md:pt-2">

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/samsung.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/apple.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png"  alt="">
        </a>

        <a href="">
        <img class="bannernhohp" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/xiaomi.png"  alt="">
        </a>

        </div>
        </div> 


        ${Footertd.render()}
        `
    }
}

export default HomePagetd