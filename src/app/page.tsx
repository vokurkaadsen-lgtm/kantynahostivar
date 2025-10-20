import React from "react"
import Feature from "@/components/Feature"
import Image from "next/image"
import { features } from "@/lib/constants/features"

export default function Home() {
  return (
    <div className="kh-bg-gradient min-h-[100dvh] flex justify-center">
        <div className='flex flex-col p-10 lg:pt-20 lg:px-10 max-w-[90rem]'>
            <header className='flex flex-row pb-24'>
                <div className="flex flex-col justify-between px-15">
                        <Image
                            src="/images/kh.svg"
                            alt="Logo kantýny"
                            width={200}
                            height={200}
                        />

                    <div className="">
                        <h1>Objevte své oblíbené chutě v Kantýnách Hostivař!</h1>

                        <div className='text-base font-medium leading-[1.375] lg:leading-normal text-gray-3'>
                            <p className="mb-4">
                                Přišel čas na pořádnou dobrotu? Kantýna Hostivař je tu, aby Vám přinesla nejen lahodné, ale také cenově dostupné jídlo přímo k Vám domů či do práce.
                            </p>
                            <p>
                                Ale nezapomeňte, že naše dveře jsou otevřeny i pro veřejnost! Pokud máte chuť se posadit a nechat se pohostit přímo u nás, jsme tu pro Vás.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <Image
                        src="/images/landing.webp"
                        alt="Náhled knatýny"
                        width={600}
                        height={800}
                    />
                </div>
            </header>

            <section>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex justify-between gap-10 md:gap-12 lg:gap-16 px-10 max-w-[82.5rem] xl:px-20 xl:mx-auto">
                    {features.map((feature, index) => (
                        <div key={feature.imageUrl} className="">
                            <Feature index={index} />
                        </div>
                    ))} 
                </div> 
            </section>
        </div>
    </div>
  )
}
