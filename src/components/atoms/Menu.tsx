import { useStore } from '@nanostores/react'
import { isMenuOpen } from '@store/index.ts'
// import { MorphReplace } from 'react-svg-morph'

const menuSvg =
	<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path d='M4 8H20' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M4 16H20' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
	</svg>


const cancelSvg =
	<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
		<path d='M6 17.3137L17.3137 6.00001' stroke='black' strokeWidth='2' strokeLinecap='round'
					strokeLinejoin='round' />
		<path d='M6 6.31372L17.3137 17.6274' stroke='black' strokeWidth='2' strokeLinecap='round'
					strokeLinejoin='round' />
	</svg>


const Menu = () => {
	const $isMenuOpen = useStore(isMenuOpen)
	// const [isOpen, setIsOpen] = useState(false)
	return (
		<div onClick={() => isMenuOpen.set(!$isMenuOpen)}>
			{/*<MorphReplace >*/}
			{!$isMenuOpen ? menuSvg : cancelSvg}
			{/*</MorphReplace>*/}
		</div>
	)
}

export default Menu