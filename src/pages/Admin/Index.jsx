import { useState } from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import AdminTweetList from '../../components/AdminTweetList.jsx/AdminTweetList';
import AdminUserList from '../../components/AdminUserList/AdminUserList';
import styled from './Index.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminMain() {
	const [activeComponent, setActiveComponent] = useState('tweets');
  const navigate = useNavigate();

	useEffect(() => {
		const getRole = async () => {
			try {		
				const role = localStorage.getItem('role')
				if (role !== 'admin'){
					navigate('/admin')
					return;
				}
				
			} catch (error) {
				console.error(error);
			}
		};
		getRole();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<div className={styled.container}>
			
			<div className={styled.section}>
				<div className={styled.sideBar}>
					<AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
				</div>

		
				<div className={styled.listContainer}>
					<AdminHeader activeComponent={activeComponent} />
					{activeComponent === 'tweets' && <AdminTweetList activeComponent={activeComponent} />}
					{activeComponent === 'users' && <AdminUserList />}
				</div>
			</div>
		</div>
		</>
	);
}

export default AdminMain;
