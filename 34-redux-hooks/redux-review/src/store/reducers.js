export const initialState = {
    textInput: '',
    passwordInput: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
			case 'SET_TEXT_INPUT':
				return {
					...state,
					textInput: action.text,
				};
			case 'SET_PASSWORD_INPUT':
				return {
					...state,
					passwordInput: action.password,
				};
			default:
				return state;
		}
}