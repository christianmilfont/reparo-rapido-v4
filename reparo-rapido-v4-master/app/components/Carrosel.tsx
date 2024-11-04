"use client"

import Image from 'next/image'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import produto1 from './../images/produto1.jpg'
import produto2 from './../images/produto2.jpg'
import produto3 from './../images/produto3.jpg'

import { useState } from 'react'

const slides = [produto1, produto2, produto3]

export default function Carrossel() {
    const [atual, setAtual] = useState(0)

    const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1)
    const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1)

    return (
        <div className='max-w-xl mx-auto'> {/* Reduzido de max-w-2xl para max-w-xl */}
            <div className='overflow-hidden relative rounded-lg shadow-lg bg-white'>
                <div className='flex transition-transform ease-out duration-[1.2s] transform-gpu' style={{ transform: `translateX(-${atual * 100}%)` }}>
                    {slides.map((s, i) => (
                        <Image
                            key={i}
                            src={s}
                            alt=''
                            className='rounded-lg transition-transform duration-700 ease-in-out transform scale-95 hover:scale-100'
                            width={700} // Diminuído de 900 para 700
                            height={400} // Diminuído de 600 para 400
                        />
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button
                        className='text-3xl font-black p-2 rounded-full shadow bg-white text-[#4a90e2] hover:bg-[#4a90e2] hover:text-white transition-all duration-300 ease-in-out'
                        onClick={prev}
                    >
                        <SlArrowLeft />
                    </button>
                    <button
                        className='text-3xl font-black p-2 rounded-full shadow bg-white text-[#4a90e2] hover:bg-[#4a90e2] hover:text-white transition-all duration-300 ease-in-out'
                        onClick={next}
                    >
                        <SlArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}
