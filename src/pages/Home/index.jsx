import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const authToken = localStorage.getItem('token');
	useEffect(() => {
		if (authToken) {
			navigate('/main');
		} else {
			navigate('/login');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default Home;
