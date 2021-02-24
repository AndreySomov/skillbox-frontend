import { HashLink as Link } from 'react-router-hash-link'
const isKZ = process.env.REACT_APP_KZ_VERSION;

function Header(props) {
    return (
        <div className="header">
            <div className="header__box box">
                <Link className="logo" to="/">
                    <img src="/img/Logo.svg" />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={props.lang === 'ua' || isKZ ? '/courses.html' : '/ru/courses.html'}
                               className="nav__link">{props.langUA ? 'Курси' : 'Курсы'}</Link>
                        </li>
                        <li className="nav__item">
                            <Link smooth to={props.lang === 'ua' || isKZ ? '/#faq' : '/ru/#faq'} className="nav__link">F.A.Q</Link>
                        </li>
                        <li className="nav__item">
                            <Link smooth to={props.lang === 'ua' || isKZ ? '/#connect' : '/ru/#connect'} className="nav__link">{props.lang === 'ua' ? 'Запитати консультацiю' : 'Запросить консультацию'}</Link>
                        </li>
                        {!isKZ && props.lang === 'ua' && (
                            <li className="nav__item">
                                <span><span>UA</span> <span style={{color:'black'}}>/ </span><Link to={'/ru' + props.page}>RU</Link></span>
                            </li>
                        )}
                        {!isKZ && props.lang !== 'ua' && (
                            <li className="nav__item">
                                <span><Link to={props.page}>UA</Link> <span style={{color:'black'}}>/ </span>RU</span>
                            </li>
                        )}
                    </ul>
                </nav>
                <a href="#" id="navBtn" className="nav__btn"><span className="nav__btn-line"></span></a>
            </div>
        </div>
    );
}

export default Header;
