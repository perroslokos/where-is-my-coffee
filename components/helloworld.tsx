import { DataValue } from 'react-apollo';
import { css } from '@emotion/core';
import styled from '../core/theme';
import { Button } from '../utils/ui';

interface Feed {
	count: number;
}

const Text = styled('p')`
	background: ${props => props.theme.colors.bittersweet};
	font-size: 20px;
	font-weight: bold;
	padding: 10px;
	margin-top: 10px;
`;

interface Props {
	title?: string;
	data: DataValue<{ feed: Feed }>;
}

const helloWorld: React.SFC<Props> = props => {
	const { title, data } = props;

	return (
		<div>
			<h1
				css={css`
					font-weight: bold;
				`}
			>
				{title || 'Title default'}
			</h1>
			<Text>Styled Text</Text>
			<Button my={3} md onClick={() => console.log(data)}>
				log apollo data prop
			</Button>
		</div>
	);
};

export default helloWorld;
