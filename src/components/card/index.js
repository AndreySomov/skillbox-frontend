function Card(props) {
    const periodDigit = props.period.replace(/^(\d+)(.+)$/, '$1');
    let periodUnit = props.period.replace(/^(\d+)(.+)$/, '$2');
    if (props.lang === 'ua') {
        periodUnit = periodUnit.replace('месяцев', 'місяців').replace('месяца', 'місяці').replace('месяц', 'місяць')
    }
    return (
        <div>
            <a href={props.url}
               className={'card ' + (props.isPro ? 'card_pro' : 'card_course')} style={{backgroundColor: props.color}}>
                <div className="card__content">
                    <span className="card__label">
                        {props.lang === 'ua' ? (props.isPro ? 'Професія' : 'Курс') : (props.isPro ? 'Профессия' : 'Курс')}
                    </span>
                    <h3 className="card__title h--4">{props[props.lang]}</h3>
                    <picture className="card__picture-wrapper">
                        <img src={props.img} width="56" height="56" className="card__picture" alt={props[props.lang]} />
                    </picture>
                    <span className="card__bottom"><b className="card__count">{periodDigit}</b>{periodUnit}</span>
                </div>
            </a>
        </div>
    );
}

export default Card;
