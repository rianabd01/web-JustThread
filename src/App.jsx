import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import './styles/App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';

export default function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  return (
    <>
      <Header />
      <Loading />
      <div className="container contents-wrap">
        <Navigation signOut={onSignOut} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/thread/:id" element={<DetailPage />} />
            <Route path="/most-active" element={<LeaderboardPage />} />
            {!authUser && (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </>
  );
}

// export default App;
