import reducerCall from './index';
export default function users (state={},action) {
	return reducerCall(state, action, reducerClass);
}

class reducerClass{
	static modalDeleteShow(new_state, action) {
		new_state.modal = new_state.modal ? new_state.modal : {};
			new_state.modal.list_delete = {
				show: true,
				id: action.id,
				userName: action.userName
			}
					return new_state;
	}

	static modalDeleteHide(new_state, action){
		new_state.modal.list_delete = {
				show: false,
				id: 0,
				userName: ''
			}
					return new_state;
	}

	static userDelete(new_state, action) {
		for(const index in new_state.list) {
				if(new_state.list[index].id === action.id) {
					new_state.list.splice(index,1);
					break;
				}
			}
					return new_state;
	}

	static add(new_state, action) {
		const id = Number((Math.random() * 1000000).toPrecision(6));
		new_state.list.push({
			id: id,
			userName: action.userName,
			job: action.job
		})
		return new_state;
	}

	static edit(new_state, action) {
		for(const index in new_state.list) {
				if(new_state.list[index].id === action.id) {
					Object.assign(user, {
						userName: action.userName,
						job: action.job
					})
					break;
				}
			}
		return new_state;
	}
}