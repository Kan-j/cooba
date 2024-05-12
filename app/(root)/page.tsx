import HomeCarousel from "@/components/HomeComponents/HomeCarousel"
import KeyServices from "@/components/HomeComponents/KeyServices"
import ProductsSection from "@/components/HomeComponents/ProductsSection"
import Stats from "@/components/HomeComponents/StatsSection"
import TestimonialSection from "@/components/HomeComponents/TestimonialSection"


const Home = () => {
  return (
    <section className="w-full ">
      <section className="w-full">
        <HomeCarousel/>
        <ProductsSection/>
        <KeyServices/>
        <Stats/>
        <TestimonialSection/>
      </section>
      
    </section>
  )
}

export default Home