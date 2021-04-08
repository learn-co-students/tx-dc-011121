import React, {useEffect} from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

const BlueButton = props => {
	const dispatch = useDispatch();
	const text = useSelector(state => state.textInput);
	const password = useSelector(state => state.passwordInput);

    useEffect(() => {
        console.log('component updated')
    }, [])

	return (
		<Segment
			style={{
				marginTop: '10vh',
				marginLeft: '5vw',
				marginRight: '5vw',
				textAlign: 'center',
			}}
		>
			<Button primary onClick={() => console.log(text, password)}>
				console.log( variables )
			</Button>
		</Segment>
	);
};

export default BlueButton;
