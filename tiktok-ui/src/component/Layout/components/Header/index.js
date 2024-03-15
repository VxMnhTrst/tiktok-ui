import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <img src={images.logo} alt="Tiktok logo"></img>

            <div className={cx('search-bar')}>
                <form>
                    <input type="text" placeholder="Tìm kiếm đê..."></input>
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}> </FontAwesomeIcon>
                    </button>
                    <button className={cx('loading-btn')}>
                        <FontAwesomeIcon icon={faSpinner}> </FontAwesomeIcon>
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}> </FontAwesomeIcon>
                    </button>
                </form>
            </div>
            <div className={cx('actions')}></div>
        </header>
    );
}

export default Header;
