


import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export function OvalLoader() {
  return (
    <div className={styles.loader}>
      <Oval
        height={80}
        width={80}
        color="rgb(245, 107, 15)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(245, 107, 15)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

