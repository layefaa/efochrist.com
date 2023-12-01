import { links } from '@content/info'
import Link from '@atoms/Link'

// @ts-ignore
const NavLinks = ({classes}) => {
	return (
		<>
			{
				links.map((x, index) => {
						return (
							<li className={'list-none'} key={index}>
								<Link url={x.url} name={x.name} animate={true} classes={classes} />
							</li>
						)
					}
				)
			}
		</>
	)
}

export default NavLinks