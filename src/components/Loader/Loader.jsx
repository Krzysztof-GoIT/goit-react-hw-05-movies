import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderHolder}>
      <RotatingLines
        visible={true}
        height="128"
        width="128"
        strokeWidth="6"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
