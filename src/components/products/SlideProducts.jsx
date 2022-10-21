import React from "react";

//images
import img1 from "@/assets/product/1.jpg";
import img2 from "@/assets/product/2.jpg";
import img3 from "@/assets/product/3.jpg";
import img4 from "@/assets/product/4.jpg";

//icons
import PrevIcon from "@/components/icons/PrevIcon.jsx";
import NextIcon from "@/components/icons/NextIcon.jsx";

const Imgs = [img1, img2, img3, img4];


function SlideProducts() {


    //css images
    const cssImg = "hidden md:block"

    //states
    const [imageSelected, setImageSelected] = React.useState(0);

    //funtion to change image
    const handleprev = () => {
        imageSelected === 0 ? setImageSelected(Imgs.length - 1) :setImageSelected(imageSelected - 1);
       
    }
    const handlenext = () => {
       imageSelected === Imgs.length - 1 ? setImageSelected(0) : setImageSelected(imageSelected + 1);
    }
        
  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative md:col-span-4 ">
        <img src={Imgs[imageSelected]} alt="" width="400" className="aspect[16/9]"/>
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:hidden">
        <button className="bg-quinary rounded-full" onClick={handleprev}><PrevIcon /></button>
        <button className="bg-quinary rounded-full" onClick={handlenext}><NextIcon /></button>
        </div>
        
        
      </div>
      <img src={img1} alt="" width="50" className={cssImg} />
      <img src={img2} alt="" width="50" className={cssImg}/>
      <img src={img3} alt="" width="50" className={cssImg}/>
      <img src={img4} alt="" width="50" className={cssImg}/>
    </section>
  );
}

export default SlideProducts;
