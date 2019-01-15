import Link from 'next/link';
import { css } from '@emotion/core';

import { Container } from '../utils/ui';

const Nav = () => (
	<nav>
		<Container>
			<ul
				css={css`
					list-style: none;
					display: flex;
					justify-content: space-around;
				`}
			>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link prefetch href="/page2">
						<a>Page 2</a>
					</Link>
				</li>
			</ul>
		</Container>
	</nav>
);

export default Nav;
