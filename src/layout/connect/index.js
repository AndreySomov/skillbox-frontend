import React, { Component } from 'react';

class Connect extends Component {

    state = {
        name: '',
        nameError: null,
        phone: '',
        phoneError: null,
        submitOnProgress: false,
        submitted: false,
    }

    validateName(name) {
        let nameError = null;
        if (name === undefined) {
            name = this.state.name;
        }
        if (!name) {
            nameError = 'Это обязательное поле';
        }
        this.setState({
            name,
            nameError,
        });
        return nameError;
    }

    validatePhone(phone) {
        let phoneError = null;
        if (phone === undefined) {
            phone = this.state.phone;
        }
        if (!phone) {
            phoneError = 'Это обязательное поле'
        } else if (!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            phoneError = 'Некорректные данные'
        }
        this.setState({
            phone,
            phoneError,
        });
        return phoneError;
    }

    onSubmit() {
        if (this.validateName() || this.validatePhone()) {
            return;
        }
        this.setState({
            submitOnProgress: true,
        });
        // TODO send request
        setTimeout(() => {
            this.setState({
                submitOnProgress: false,
                submitted: true,
            });
        }, 5000);
    }
    
    render() {
        return (
            <div className="connect" id="connect">
                <div className="box">
                    <div className="connect-container">
                        <div className="connect-wrapper">
                            <div className="connect-header">
                                <span>{this.props.lang === 'ua' ? 'Допоможемо у виборі курсу!' : 'Поможем в выборе курса!'}</span>
                                <p>{this.props.lang === 'ua' ?
                                    'Якщо у вас є питання про формат навчання ' +
                                    'або ви не знаєте що вибрати, залиште ' +
                                    'свій номер: ми зателефонуємо, щоб ' +
                                    'відповісти на всі Ваші питання :)' :
                                    'Если у вас есть вопросы о формате ' +
                                    'или вы не знаете что выбрать, оставьте ' +
                                    'свой номер: мы позвоним, чтобы ' +
                                    'ответить на все Ваши вопросы :)'
                                }</p>
                            </div>
                            {!this.state.submitted && (
                                <div className="connect-form">
                                    <div id="connect-form">
                                        <p className="connect-input">
                                            <label className="form-field">
                                                <input name="name" type="text" className={"form-field__item" + (this.state.nameError ? ' error' : '')}
                                                       value={this.state.name}
                                                       placeholder={this.props.lang === 'ua' ? 'Ваше iм\'я' : 'Имя'} onBlur={() => this.validateName()}
                                                       onChange={(e) => this.validateName(e.target.value)} />
                                            </label>
                                            <span className="form-field__error">{this.state.nameError}</span>
                                        </p>
                                        <p className="connect-input">
                                            <label className="form-field">
                                                <input name="phone" type="text" className={"form-field__item" + (this.state.phoneError ? ' error' : '')}
                                                       value={this.state.phone}
                                                       placeholder="Телефон" onBlur={() => this.validatePhone()}
                                                       onInput={(e) => this.validatePhone(e.target.value)} />
                                            </label>
                                            <span className="form-field__error">{this.state.phoneError}</span>
                                        </p>
                                        <div className="form-footer">
                                            <button disabled={this.state.submitOnProgress} onClick={() => this.onSubmit()} className="connect-button">{this.props.lang === 'ua' ? 'Вiдправити заявку' : 'Отправить'}</button>
                                            <p className="form-footer__text">
                                                {this.props.lang === 'ua' ? 'Натискаючи на кнопку, я погоджуюся на ' : 'Нажимая на кнопку, я соглашаюсь на '}
                                                <a href="#" target="_blank" className="privacy-link">
                                                    {this.props.lang === 'ua' ? 'обробку персональних даних.' : 'обработку персональных данных'}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {this.state.submitted && (
                                <p>{this.props.lang === 'ua' ? 'Спасибі за заявку! Наш консультант передзвонить вам протягом години.' : 'Спасибо за заявку! Наш консультант перезвонит вам в течение часа.'}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connect;
