import React from "react"
import Feature from "@/components/Feature"
import Image from "next/image"
import { features } from "@/lib/constants/features"

export default function Home() {
  return (
    <div className="kh-bg-gradient min-h-[100dvh]">
        <div className='flex flex-col'>
            <header className='flex flex-row w-full'>
                {/* w-full px-[1.563rem] max-w-[82.5rem] xl:px-0 xl:mx-auto  */}
                <div>
                    <Image
                        src="/images/kh.svg"
                        alt="Logo kantýny"
                        width={200}
                        height={200}
                    />

                        <h1>Objevte své oblíbené chutě v Kantýnách Hostivař!</h1>
                        <p>Přišel čas na pořádnou dobrotu? Kantýna Hostivař je tu, aby Vám přinesla nejen lahodné, ale také cenově dostupné jídlo přímo k Vám domů či do práce. Ale nezapomeňte, že naše dveře jsou otevřeny i pro veřejnost! Pokud máte chuť se posadit a nechat se pohostit přímo u nás, jsme tu pro Vás.</p>
                </div>

                <Image
                    src="/images/landing.webp"
                    alt="Náhled knatýny"
                    width={200}
                    height={200}
                />
            </header>

            <section>
                {features.map((feature, index) => (
                    <Feature key={feature.imageUrl} index={index} />
                ))}  
            </section>
        </div>
    </div>
  )
}
