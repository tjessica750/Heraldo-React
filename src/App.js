import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';



function App() {
	return ( 
		<div className="App container">
			<Header />
			<News />
			<Footer />
		</div>
	);
}

export default App;