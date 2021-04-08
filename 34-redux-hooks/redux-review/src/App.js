import React from 'react';
import './App.css';
import { Segment, Form, Input } from 'semantic-ui-react';
import BlueButton from './BlueButton';
import { useDispatch } from 'react-redux'

const App = props => {
	const dispatch = useDispatch()
	return (
		<div>
			<Segment
				style={{
					marginTop: '10vh',
					marginLeft: '5vw',
					marginRight: '5vw',
					textAlign: 'center',
				}}
			>
				<h1>Redux Review</h1>
				<Form>
					<Form.Field>
						<Input
							label='Text Input'
							placeholder='Text Placeholder'
							onChange={e =>
								dispatch({
									type: 'SET_TEXT_INPUT',
									text: e.target.value,
								})
							}
						/>
					</Form.Field>
					<Form.Field>
						<Input
							label='Password Input'
							type='password'
							placeholder='**********'
							onChange={e =>
								dispatch({
									type: 'SET_PASSWORD_INPUT',
									password: e.target.value,
								})
							}
						/>
					</Form.Field>
				</Form>
			</Segment>
			<BlueButton />
		</div>
	);
};

export default App;
