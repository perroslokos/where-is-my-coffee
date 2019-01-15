import React from 'react';
import { graphql, DataValue } from 'react-apollo';
import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container } from '../utils/ui';
import { Box } from '@rebass/grid/emotion';

class Page2 extends React.Component<{ data: DataValue<{ feed }> }> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		const { data } = this.props;

		return (
			<Main title="Page 2">
				<Container mt={[0, 1, 2]}>
					<Box as="h2" ml={3}>
						Page 2
					</Box>
					<HelloWorld data={data} title="Title" />
				</Container>
			</Main>
		);
	}
}

const FEED_QUERY = gql`
	query feed {
		feed {
			count
		}
	}
`;

export default graphql(FEED_QUERY)(Page2);
