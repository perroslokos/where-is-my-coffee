import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import { graphql, DataValue } from 'react-apollo';
import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container, Row, Col } from '../utils/ui';

interface Link {
	url: string;
}

interface Feed {
	count: number;
	links: Link[];
}

interface Props {
	data: DataValue<{ feed: Feed }>;
}

class Home extends React.Component<Props> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		const { data } = this.props;
		return (
			<Main title="Home Page">
				<Container mt={[0, 1, 2]}>
					<Box as="h2" ml={3}>
						Page 1
					</Box>
					<HelloWorld data={data} />
					<Box as="h1" mb={3} fontSize={[1, 5, 4]}>
						Responsive font size
					</Box>
					<Flex bg="blue" p={2}>
						<Box order={[1, 2]} width={[1 / 3]} color="#fff">
							Box Order 1
						</Box>
						<Box order={[3, 1]} width={[1 / 3]} color="#fff">
							Box Order 2
						</Box>
						<Box order={[2, 3]} width={[1 / 3]} color="#fff">
							Box Order 3
						</Box>
					</Flex>
					<hr />
					<Row>
						<Col width={[1, 1 / 2]}>Row Box</Col>
						<Col width={[1, 1 / 2]}>Row Box</Col>
					</Row>
					<hr />
					<Row>
						<Col width={[1, 1 / 3]}>Row Box</Col>
						<Col width={[1, 1 / 3]}>Row Box</Col>
						<Col width={[1, 1 / 3]}>Row Box</Col>
					</Row>
					<hr />
					<Row>
						<Col width={[1, 1 / 4]}>Row Box</Col>
						<Col width={[1, 1 / 4]}>Row Box</Col>
						<Col width={[1, 1 / 4]}>Row Box</Col>
						<Col width={[1, 1 / 4]}>Row Box</Col>
					</Row>
				</Container>
			</Main>
		);
	}
}

const FEED_QUERY = gql`
	query feed {
		feed {
			count
			links {
				url
			}
		}
	}
`;

export default graphql(FEED_QUERY)(Home);
