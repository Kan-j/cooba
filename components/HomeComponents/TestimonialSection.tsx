import Image from "next/image"
import { FaQuoteRight } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TestimonialCard from "../CustomElements/TestimonialCard"


const TestimonialSection = () => {
  return (
    <section className="bg-[#F2F5F3] px-6 py-6">
        <header className="mb-8">
            <p className="font-light italic text-green-1">TESTIMONIAL</p>
            <h1 className="text-2xl font-bold">What Our Customer Says</h1>
        </header>
        <article className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard imageUrl="https://github.com/shadcn.png" username="Kwaku Frimpong" content="I'm blown away by the quality of ingredients from Cooba. As someone who loves cooking but struggles to find fresh produce, their service has been a game-changer for me. From juicy tomatoes to flavorful spices, every item I've received has exceeded my expectations. Highly recommend!" />
            <TestimonialCard imageUrl="https://github.com/shadcn.png" username="Kofi Agyei" content="I've been a loyal customer of Cooba for months now, and I can't imagine going back to grocery shopping the traditional way. Their selection is unbeatable, and the convenience of having everything delivered to my doorstep is unbeatable." />
            <TestimonialCard imageUrl="https://github.com/shadcn.png" username="Jonathan Ofori" content="I've always been passionate about cooking, but finding high-quality ingredients was a constant struggle until I discovered Cooba. Their commitment to freshness and quality is evident in every item they deliver. I can taste the difference in my meals, and it's made cooking even more enjoyable for me. " />
        </article>
    </section>
  )
}

export default TestimonialSection