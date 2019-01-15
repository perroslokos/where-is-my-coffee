import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../core/styles';
import Head from '../components/head';
import Nav from '../components/nav';
import { Container } from '../utils/ui';

interface Props {
	children: React.ReactNode;
	title?: string;
}

class PageLayout extends React.Component<Props> {
	public render() {
		const { children, title } = this.props;

		return (
			<React.Fragment>
				<Global styles={globalStyles} />

				<Head title={title} />

				<Nav />
				<Container>
					<h1>With Layout</h1>
				</Container>
				{children}
			</React.Fragment>
		);
	}
}

export default PageLayout;
