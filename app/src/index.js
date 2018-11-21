import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';


class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
