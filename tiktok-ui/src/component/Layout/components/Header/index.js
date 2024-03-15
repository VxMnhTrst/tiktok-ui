import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1>Logo</h1>
            <h1>Searchbox</h1>
            <h1>Login/Logout</h1>
        </header>
    );
}

export default Header;
