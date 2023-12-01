import { isMenuOpen } from '@store/index'
import { useStore } from '@nanostores/react'
import Socials from '@molecules/Socials'
import NavLinks from '@molecules/NavLinks'
import { useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuSlide } from '@animations/menu'


const MobileNav = () => {
	const $isMenuOpen = useStore(isMenuOpen)

	useLayoutEffect(() => {
		return () => {
			isMenuOpen.set(false)
		}
	}, [window.location.pathname])


	return (
		<AnimatePresence mode='wait'>
			{$isMenuOpen &&
				<motion.div
					variants={menuSlide} initial='initial' animate='enter' exit='exit'
					className={`grid md:hidden z-20 h-screen w-screen containerXPadding bg-bb-primary-white absolute top-0 left-0 grid-cols-4 grid-rows-12`}>
					<nav
						className='mobile row-start-3  col-span-4 w-5/6 mx-auto flex flex-col gap-[6rem] text-bb-tertiary-black text-48  font-[300]'>
						<NavLinks classes={'mobile'} />
					</nav>
					<div className='row-start-10 col-span-4  w-5/6 mx-auto'>
						<p className='text-20 font-30 text-bb-quaternary-black mb-[1.5rem]'>Follow Us</p>
						<Socials />
					</div>
					{/*Curve*/}
					{/*<svg className='  fill-bb-primary-white overflow-hidden absolute top-0 left-0 h-full stroke-0 '>*/}
					{/*	<motion.path variants={curve} initial='initial' animate='enter' exit='exit'></motion.path>*/}
					{/*</svg>*/}
					{/*Curve*/}
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default MobileNav