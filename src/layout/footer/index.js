const isKZ = process.env.REACT_APP_KZ_VERSION;

function Footer(props) {
    return (
        <div className="footer">
            <div className="box">
                <div className="footer__content">
                    {!isKZ && props.lang === 'ua' && (
                        <>
                            <div className="footer__column">
                                <div className="footer__phone"><a href="tel:77713004898">+380 (67) 333-13-98</a></div>
                                <p>E-mail: newskilldoc@gmail.com</p>
                                <p>ТОВ «МАЙСКІЛЗ»,</p>
                                <p>Київ, вулиця Велика</p>
                                <p>Васильківська, будинок 5, кабінет 36</p>
                            </div>
                            <div className="footer__column">
                                <p>Київ, вулиця Велика Васильківська, будинок 5, кабiнет 36</p>
                                <p>Код ЄДРПОУ 43978155</p>
                                <p>IBAN UA 433052990000026005026227478</p>
                                <p>в АТ КБ «Приватбанк», МФО 305299</p>
                            </div>
                        </>
                    )}
                    {!isKZ && props.lang === 'ru' && (
                        <>
                            <div className="footer__column">
                                <div className="footer__phone"><a href="tel:77713004898">+380 (67) 333-13-98</a></div>
                                <p>E-mail: newskilldoc@gmail.com</p>
                                <p>ООО «Ньюскилз»,</p>
                                <p>Киев, улица Большая</p>
                                <p>Васильковская, дом 5, кабинет 36</p>
                            </div>
                            <div className="footer__column">
                                <p>Киев, улица Большая Васильковская, дом 5, кабинет 36</p>
                                <p>Код ЕГРПОУ 43978155</p>
                                <p>IBAN UA 433052990000026005026227478</p>
                                <p>в АО КБ «Приватбанк», МФО 305299</p>
                            </div>
                        </>
                    )}
                    {isKZ && (
                        <>
                            <div className="footer__column">
                                <div className="footer__phone"><a href="tel:77713004898">+7 (771) 300-48-98</a></div>
                                <p>E-mail: newskilldoc@gmail.com</p>
                                <p>ТОО «Ньюскилз»,</p>
                                <p>Алматы, бульвар Бухар</p>
                                <p>Жырау, д. 33, н.п. 25</p>
                            </div>
                            <div className="footer__column">
                                <p>Алматы, ул. Масанчи, 57а</p>
                                <p>БИН 210140019844</p>
                                <p>ИИК KZ139470398993314429</p>
                                <p>в АО ДБ «Альфа-Банк» БИК ALFAKZKA</p>
                            </div>
                        </>
                    )}
                    <div className="footer__column">
                        <div className="footer__payment">
                            <img className="footer__pay" src="/img/alfa.svg" alt="" />
                            <img className="footer__pay" src="/img/Mastercard.svg" alt="" />
                            <img className="footer__pay" src="/img/Visa.svg" alt="" />
                            <img className="footer__pay" src="/img/securecode.svg" alt="" />
                            <img className="footer__pay" src="/img/visa-verified.svg" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <img className="footer__logo" src="/img/logo-white.svg" />
                      {isKZ && (
                          <>
                          <a target="blank" class="footer__oferta" href="/assets/oferta.pdf">Публичная оферта</a>
                          </>
                      )}
                </div>
            </div>
        </div>
    );
}

export default Footer;
