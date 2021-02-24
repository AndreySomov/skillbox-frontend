import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Connect from "../../layout/connect";
import React, { Component } from "react";

import {getCategories, getCoursesCount, getTopCourses} from "../../data-loader";
import Card from "../../components/card";
import { HashLink as Link } from 'react-router-hash-link'
const isKZ = process.env.REACT_APP_KZ_VERSION;

class Homepage extends Component {
    
    state = {
        courses: [],
        coursesCount: 0,
    }
    
    async componentDidMount() {
        this.setState({
            courses: await getTopCourses(),
            coursesCount: await getCoursesCount()
        });
    }

    render() {
        return (
            <div>
                <Header lang={this.props.lang} page="/"/>
                <div className="title-section">
                    {this.props.lang === 'ua' ?
                        <div className="box">
                            <div className="title">
                                <div className="title-text">Онлайн-курси з</div>
                                &nbsp;&nbsp;
                                <img id="title_img1" src="/img/title-1.svg"/>
                            </div>
                            <div className="title">
                                <img id="title_img2" src="/img/title-2.svg"/>&nbsp;&nbsp;
                                <div className="title-text">програмування,</div>
                            </div>
                            <div className="title">
                                <div className="title-text">маркетингу, дизайну</div>
                                &nbsp;&nbsp;
                                <img id="title_img3" src="/img/title-3.svg"/>
                            </div>
                            <div className="title">
                                <div className="title-text">та управління в Україні</div>
                            </div>
                            <Link smooth to="#connect" className="title-button"><span>Запитати консультацiю</span></Link>
                        </div>
                        :
                        <div className="box">
                            <div className="title">
                                <div className="title-text">Онлайн-курсы по</div>
                                &nbsp;&nbsp;
                                <img id="title_img1" src="/img/title-1.svg"/>
                            </div>
                            <div className="title">
                                <img id="title_img2" src="/img/title-2.svg"/>&nbsp;&nbsp;
                                <div className="title-text">программированию</div>
                            </div>
                            <div className="title">
                                <div className="title-text">маркетингу, дизайну,</div>
                                &nbsp;&nbsp;
                                <img id="title_img3" src="/img/title-3.svg"/>
                            </div>
                            <div className="title">
                                <div className="title-text">управлению в Украине</div>
                            </div>
                            <Link smooth to="#connect" className="title-button"><span>Запросить консультацию</span></Link>
                        </div>
                    }
                </div>
                <div className="tabs-list">
                    <div className="box">
                    <span className="tabs-list__title">
                        {this.props.lang === 'ua' ? 'Наші напрямки:' : 'Наши направления:'}
                    </span>
                        <ul className="tabs-list__items">
                            {getCategories().map((category) => (
                                <li className="tabs-list__item">
                                    <Link smooth to={(this.props.lang !== 'ua' && !isKZ ? '/' + this.props.lang : '') + '/' + category.slug + '#'}
                                          className="ui-tab ui-tab--link">
                                        {category[this.props.lang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cards" id="courses">
                    <div className="box">
                        <h1 className="cards-title">
                            {this.props.lang === 'ua' ? 'Наші курси' : 'Наши курсы'}
                        </h1>
                        <div className="card__container">
                            {this.state.courses.map((v) => (
                                <Card lang={this.props.lang} {...v} />
                            ))}
                        </div>
                        <Link smooth to={(this.props.lang !== 'ua' && !isKZ ? '/' + this.props.lang : '') + '/courses.html' + '#'}
                              className="more-button">
                            {this.props.lang === 'ua' ? 'Показати ще ' + this.state.coursesCount + ' професій' : 'Показать ещё ' + this.state.coursesCount + ' профессий'}
                        </Link>
                    </div>
                </div>
                <div className="faq" id="faq">
                    <div className="box">
                      {!isKZ && this.props.lang === 'ua' && (
                          <>
                            <div className="faq-container">
                            <h1 className="faq-title">F.A.Q.</h1>
                            <div className="accordion _show-one">
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Оплата здійснюється в національній валюті – гривні за допомогою банківської
                                      карти.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Доступ до онлайн-курсу</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      ісля оплати, на зазначений у договорі e – mail, надсилається персональний онлайн
                                      -доступ (відео- записи,
                                      статті та інші матеріали), а також інструкція по використанню даного доступу.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Підтримка</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      У разі виникнення питань користувачі можуть завжди
                                      звернутися в службу підтримки.

                                      Для оплати вам потрібно замовити курс, який Вас зацікавив, залишивши заявку на
                                      сайті або зателефонувавши за
                                      номером +380673331398 .

                                      Після уточнення деталей наш менеджер надішле на Ваш e-mail посилання для оплати
                                      послуги.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Повернення коштiв</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Правила оплати і повернення грошових коштів описані
                                      в додатку 1 до договору
                                      оферти.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Повернення</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Правила оплати і повернення грошових коштів описані в
                                      додатку 1 до договору оферти.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата за банківськими картками</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Послуга оплати через інтернет здійснюється
                                      відповідно до Правил міжнародних
                                      платіжних систем Visa і MasterCard на принципах дотримання конфіденційності і
                                      безпеки здійснення платежу, для
                                      чого використовуються найсучасніші методи перевірки, шифрування і передачі даних
                                      по закритих каналах зв'язку.

                                      На сторінці для введення даних банківської карти необхідно ввести номер карти,
                                      термін дії картки, трьохзначний
                                      код безпеки (CVV2 для VISA або CVC2 для MasterCard). Всі необхідні дані
                                      надруковані на самій карті.

                                      Трьохзначний код безпеки - це три цифри, що знаходяться на зворотному боці
                                      картки.

                                      Далі ви будете перенаправлені на сторінку Вашого банку для введення 3DSecure
                                      коду, який надійде Вам в СМС.
                                      Якщо 3DSecure код не надійшов, то слід звернутися в банк,який видав Вам карту.

                                      Випадки відмови в здійсненні платежу:

                                      банківська картка не призначена для здійснення платежів через інтернет, про що
                                      можна дізнатися, звернувшись в
                                      Ваш банк;

                                      недостатньо коштів для оплати на банківській картці. Детальніше про наявність
                                      коштів на банківській картці Ви
                                      можете дізнатися, звернувшись в банк, що випустив банківську карту;

                                      дані банківської картки введені невірно;

                                      закінчився термін дії банківської карти. Термін дії карти, як правило, вказано
                                      на лицьовій стороні картки (це
                                      місяць і рік, до якого дійсна карта). Детальніше про термін дії карти Ви можете
                                      дізнатися, звернувшись в банк,
                                      що випустив банківську карту;

                                      З питань оплати за допомогою банківської карти і інших питань, пов'язаних з
                                      роботою сайту Ви можете звертатися
                                      за наступними телефонами: +380673331398

                                      Надана вами персональна інформація (ім'я, телефон, e-mail, номер банківської
                                      карти) є конфіденційною і не
                                      підлягає розголошенню. Дані вашої кредитної картки передаються тільки в
                                      зашифрованому вигляді і не
                                      зберігаються на нашому Web – сервері.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>
                      )}
                      {!isKZ && this.props.lang === 'ru' && (
                          <>
                            <div className="faq-container">
                            <h1 className="faq-title">F.A.Q.</h1>
                            <div className="accordion _show-one">
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Оплата производится в гривнах по банковским картам.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Доступ к онлайн-курсу</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      После оплаты предоставляется на указанный в договоре email высылается
                                      персональный
                                      онлайн-доступ (видео записи, статьи и др. материалы), а также инструкция по
                                      использованию данного доступа.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Поддержка</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      В случае возникновения вопросов пользователи могут
                                      обратиться в службу поддержки.
                                      По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с
                                      работой
                                      сайта, Вы можете обращаться по следующим телефонам: +380673331398
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Возврат</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Правила оплаты и возврата денежных средств описаны в
                                      приложении 1 к договору оферты.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата банковскими картами</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Оплата банковскими картами осуществляется через АО
                                      ДБ
                                      «АЛЬФА-БАНК»

                                      К оплате принимаются карты VISA и MasterCard.

                                      Услуга оплаты через интернет осуществляется в соответствии с Правилами
                                      международных
                                      платежных систем Visa и MasterCard на принципах соблюдения конфиденциальности и
                                      безопасности совершения платежа, для чего используются самые современные методы
                                      проверки, шифрования и передачи данных по закрытым каналам связи. Ввод данных
                                      банковской
                                      карты осуществляется на защищенной платежной странице АО ДБ «АЛЬФА-БАНК».

                                      На странице для ввода данных банковской карты потребуется ввести номер карты,
                                      имя
                                      владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для
                                      VISA
                                      или
                                      CVC2 для MasterCard). Все необходимые данные пропечатаны на самой карте.

                                      Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне
                                      карты.

                                      Далее вы будете перенаправлены на страницу Вашего банка для ввода 3DSecure кода,
                                      который
                                      придет к Вам в СМС. Если 3DSecure код к Вам не пришел, то следует обратится в
                                      банк
                                      выдавший Вам карту.

                                      Случаи отказа в совершении платежа:

                                      банковская карта не предназначена для совершения платежей через интернет, о чем
                                      можно
                                      узнать, обратившись в Ваш Банк;

                                      недостаточно средств для оплаты на банковской карте. Подробнее о наличии средств
                                      на
                                      банковской карте Вы можете узнать, обратившись в банк, выпустивший банковскую
                                      карту;

                                      данные банковской карты введены неверно;

                                      истек срок действия банковской карты. Срок действия карты, как правило, указан
                                      на
                                      лицевой стороне карты (это месяц и год, до которого действительна карта).
                                      Подробнее
                                      о
                                      сроке действия карты Вы можете узнать, обратившись в банк, выпустивший
                                      банковскую
                                      карту;

                                      По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с
                                      работой
                                      сайта, Вы можете обращаться по следующим телефонам: +380673331398

                                      Предоставляемая вами персональная информация (имя, адрес, телефон, e-mail, номер
                                      банковской карты) является конфиденциальной и не подлежит разглашению. Данные
                                      вашей
                                      кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем
                                      Web-сервере.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>
                      )}
                      {isKZ && (
                          <>
                            <div className="faq-container">
                            <h1 className="faq-title">F.A.Q.</h1>
                            <div className="accordion _show-one">
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Оплата производится в гривнах по банковским картам.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Доступ к онлайн-курсу</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      После оплаты предоставляется на указанный в договоре email высылается
                                      персональный
                                      онлайн-доступ (видео записи, статьи и др. материалы), а также инструкция по
                                      использованию данного доступа.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Поддержка</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      В случае возникновения вопросов пользователи могут
                                      обратиться в службу поддержки.
                                      По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с
                                      работой
                                      сайта, Вы можете обращаться по следующим телефонам: +380673331398
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Возврат</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Правила оплаты и возврата денежных средств описаны в
                                      приложении 1 к договору оферты.
                                      <br/>
                                      <br/>
                                      <a target="blank" href="/assets/oferta.pdf">Договор оферты.</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion__item">
                                <div className="accordion__btn">
                                  <h3 className="accordion__title">Оплата банковскими картами</h3>
                                  <span className="accordion__cross"></span>
                                </div>
                                <div className="accordion__box">
                                  <div className="accordion__content">
                                    <p>
                                      Оплата банковскими картами осуществляется через АО
                                      ДБ
                                      «АЛЬФА-БАНК»

                                      К оплате принимаются карты VISA и MasterCard.

                                      Услуга оплаты через интернет осуществляется в соответствии с Правилами
                                      международных
                                      платежных систем Visa и MasterCard на принципах соблюдения конфиденциальности и
                                      безопасности совершения платежа, для чего используются самые современные методы
                                      проверки, шифрования и передачи данных по закрытым каналам связи. Ввод данных
                                      банковской
                                      карты осуществляется на защищенной платежной странице АО ДБ «АЛЬФА-БАНК».

                                      На странице для ввода данных банковской карты потребуется ввести номер карты,
                                      имя
                                      владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для
                                      VISA
                                      или
                                      CVC2 для MasterCard). Все необходимые данные пропечатаны на самой карте.

                                      Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне
                                      карты.

                                      Далее вы будете перенаправлены на страницу Вашего банка для ввода 3DSecure кода,
                                      который
                                      придет к Вам в СМС. Если 3DSecure код к Вам не пришел, то следует обратится в
                                      банк
                                      выдавший Вам карту.

                                      Случаи отказа в совершении платежа:

                                      банковская карта не предназначена для совершения платежей через интернет, о чем
                                      можно
                                      узнать, обратившись в Ваш Банк;

                                      недостаточно средств для оплаты на банковской карте. Подробнее о наличии средств
                                      на
                                      банковской карте Вы можете узнать, обратившись в банк, выпустивший банковскую
                                      карту;

                                      данные банковской карты введены неверно;

                                      истек срок действия банковской карты. Срок действия карты, как правило, указан
                                      на
                                      лицевой стороне карты (это месяц и год, до которого действительна карта).
                                      Подробнее
                                      о
                                      сроке действия карты Вы можете узнать, обратившись в банк, выпустивший
                                      банковскую
                                      карту;

                                      По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с
                                      работой
                                      сайта, Вы можете обращаться по следующим телефонам: +380673331398

                                      Предоставляемая вами персональная информация (имя, адрес, телефон, e-mail, номер
                                      банковской карты) является конфиденциальной и не подлежит разглашению. Данные
                                      вашей
                                      кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем
                                      Web-сервере.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>
                      )}
                    </div>
                </div>
                <Connect lang={this.props.lang}/>
                <Footer lang={this.props.lang}/>
            </div>
        );
    }
}

export default Homepage;
