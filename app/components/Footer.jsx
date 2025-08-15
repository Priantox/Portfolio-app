import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-300 mt-12">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Image src={assets.mail_icon} alt="Email" width={24} height={24} />
                    <a href="mailto:priantox07@gmail.com" className="text-gray-700 hover:text-gray-900">
                        priantox07@gmail.com
                    </a>
                </div>

                <div className="sm:flex items-center justify-between text-center border-t border-gray-300 pt-6">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Ahamudul. All rights reserved.
                    </p>

                    <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
                        <li>
                            <a href="https://github.com/Priantox" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <FaGithub className="text-2xl hover:text-gray-800" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ahamudulhasan.prianto/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                                <FaFacebook className="text-2xl hover:text-gray-800" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
