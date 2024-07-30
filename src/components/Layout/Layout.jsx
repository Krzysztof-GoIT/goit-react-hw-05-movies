import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
