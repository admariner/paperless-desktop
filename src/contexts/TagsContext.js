import { buildContext } from "./Context";

const initialState = {
	tags: []
};

// reducer actions to mutate state
const reducer = (state, action) => {
	switch (action.type) {
		// set the initial tags
		case "set":
			return { ...state, tags: action.tags };

		// add a single tag to the list
		case "add":
			let tags = state.tags;
			tags.push(action.tag);

			return { ...state, tags: tags };
	}
};

export default buildContext(initialState, reducer);