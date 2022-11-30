import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chirps from './views/chirps';
import Users from './views/users'
import SingleChirp from './views/SingleChirp';
import SingleUser from './views/singleUser';
import Create from './views/Create';
import EditChirp from './views/EditChirp';

/* HOOK REACT EXAMPLE */
const App = () => {
	
	return (
		<BrowserRouter>
			<Navbar />
		<main className="container my-5">
			<Routes>
				<Route path='/' element={<h1 className='row justify-content-center'>Welcome to Chirpr, a cheap twitter knock-off!</h1>} />
				<Route path='/users' element={<Users />} />
				<Route path='/chirprs' element={<Chirps />} />
				<Route path='/users/:id' element={<SingleUser />} />
				<Route path='/chirprs/:id' element={<SingleChirp />} />
				<Route path='/create' element={<Create />} />
				<Route path='/chirprs/:id/edit'element={<EditChirp />} />
				
			</Routes>
		</main>
		</BrowserRouter>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
