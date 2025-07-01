import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

// import solar from 'logo.webp';

const Footer = () => {
  return (
    <div>

<section class="bg-gray-300">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Team
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav> */}
        <div class="flex justify-center items-center space-x-6">
            <a href="#" class="text-[#ff6000] hover:text-orange-500">
                <img src='logo.webp' class="h-12" />
            </a>
            <a href="#" class="text-[#ff6000] hover:text-orange-500">
                <img src='energy.png' class="h-10" />
            </a>
            <a href="#" class="text-[#ff6000] hover:text-orange-500">
                <img src='elec.png' class="h-10" />
            </a>
            <a href="#" class="text-[#ff6000] hover:text-orange-500">
                <img src='fsf.png' class="h-10" />
            </a>
            <a href="#" class="text-[#ff6000] hover:text-orange-500">
                <img src='nexgen.png' class="h-14" />
            </a>
        </div>
        <p class="mt-8 text-sm leading-6 text-center text-gray-800">
            © SmartConnect Product. All rights reserved.
        </p>
    </div>
</section>
    </div>
  )
}

export default Footer