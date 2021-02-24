import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Connect from "../../layout/connect";

import {
    getCategories,
    getCourses,
    getCoursesCount,
    getProfessions,
    getProfessionsCount,
} from "../../data-loader";
import Card from "../../components/card";

import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
const isKZ = process.env.REACT_APP_KZ_VERSION;

class Courses extends Component {

    state = {
        professions : [],
        courses : [],
        professionsCount: 0,
        coursesCount: 0,
        category: null,
    }

    async componentDidMount() {
        this.setState({
            category: this.props.category,
            professions: await getProfessions(this.props.category),
            professionsCount: await getProfessionsCount(this.props.category),
            courses: await getCourses(this.props.category),
            coursesCount: await getCoursesCount(this.props.category),
        })
    }

    async loadMoreProfessions() {
        let v = this.state.professions.concat(await getProfessions(this.state.category, this.state.professions.length));
        this.setState({
            professions: v,
        });
    }

    async loadMoreCourses() {
        let v = this.state.courses.concat(await getCourses(this.state.category, this.state.courses.length));
        this.setState({
            courses: v,
        });
    }

    async changeCategory(category) {
        this.props.history.push((this.props.lang !== 'ua' && !isKZ ? '/' + this.props.lang : '') + (category ? '/' + category : '/courses.html'));
        this.setState({
            category: category,
            professions: await getProfessions(category),
            professionsCount: await getProfessionsCount(category),
            courses: await getCourses(category),
            coursesCount: await getCoursesCount(category),
        })
    }


    render() {
        const selectedCategory = getCategories().filter((c) => c.slug === this.state.category);
        return (
            <div>
                <Header lang={this.props.lang} page={this.state.category ? '/' + this.state.category : '/courses.html'} />
                <div className="page box">
                    <h1 className="main-title">
                        {selectedCategory.length ? selectedCategory[0][this.props.lang] : (this.props.lang === 'ua' ? 'Всі програми навчання' : 'Все программы обучения')}
                    </h1>
                    <div className="sep">
                        <div className="sep__side">
                            <div className="filter page__filter">
                                <div className="filter__directions">
                                    <div className="filter__directions-desktop">
                                        <div className="tags">
                                            <a onClick={() => this.changeCategory()}
                                               className={'tags__item ' + (!this.state.category && 'tags__item_active link-active nuxt-link-active ui-tab--active')}>
                                                {this.props.lang === 'ua' ? 'Всі напрямки' : 'Все направления'}</a>
                                            {getCategories().map((category) => (
                                                <a onClick={() => this.changeCategory(category.slug)} className={'tags__item ' + (this.state.category === category.slug && 'tags__item_active link-active nuxt-link-active ui-tab--active')}>{category[this.props.lang]}</a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="filter__directions-mobile">
                                        <div className="directions-select">
                                            <select className="directions-select__input" onChange={(e) => this.changeCategory(e.target.value)}>
                                                <option value="" selected={!this.state.category}>{this.props.lang === 'ua' ? 'Всі напрямки' : 'Все направления'}</option>
                                                {getCategories().map((category) => (
                                                    <option value={category.slug} selected={this.state.category === category.slug}>{category[this.props.lang]}</option>
                                                ))}
                                            </select>
                                            <img className="directions-select__arrow" width={10} height={6} src="/icons/arrow-select.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter__bottom">
                                    <Link className="button-up" smooth to="#">
                                        <img fill="currentColor" className="button-up__icon" width={16} height={15} src="/icons/arrow.svg" alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sep__base">
                            <section className="section courses">
                                <div className="courses__header">
                                    <h2 className="courses__title">
                                        {this.props.lang === 'ua' ? 'Професії' : 'Профессии'}
                                        <span className="courses__count-mobile">({this.state.professionsCount})</span>
                                        <div className="courses__info tooltip">
                                            <button type="button" className="tooltip__button">
                                                <img className="tooltip__button-icon" width={10} height={10} src="/icons/info.svg" alt=""/>
                                            </button>
                                            <div className="tooltip__wrapper">
                                                <div className="tooltip__container">
                                                    {this.props.lang !== 'ua' ?
                                                        <div className="tooltip__content">
                                                            <img className="tooltip__icon" width={20} height={20} src="/icons/info.svg" alt=""/>
                                                            <h4 className="tooltip__title">
                                                                Профессия
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Это большая программа. В ней несколько курсов. Она
                                                                помогает
                                                                полностью освоить новую профессию с
                                                                нуля, собрать портфолио, подготовить резюме и найти
                                                                работу.
                                                            </p>
                                                            <h4 className="tooltip__title">
                                                                Курс
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Короткая программа. Она позволяет освоить конкретный
                                                                навык или
                                                                инструмент, которые можно
                                                                добавить в своё портфолио.
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="tooltip__content">
                                                            <img className="tooltip__icon" width={20} height={20} src="/icons/info.svg" alt=""/>
                                                            <h4 className="tooltip__title">
                                                                Професія
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Це велика програма. У ній кілька курсів. Вона допомагає
                                                                повністю освоїти нову професію з нуля, зібрати
                                                                портфоліо, підготувати резюме і знайти роботу.
                                                            </p>
                                                            <h4 className="tooltip__title">
                                                                Курс
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Коротка програма. Вона дозволяє освоїти конкретний навик
                                                                або інструмент, які можна додати в своє портфоліо.
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </h2>
                                    <span className="courses__count"><b>{this.state.professionsCount}</b> {this.props.lang === 'ua' ? 'професій' : 'профессий'}</span>
                                </div>
                                <div className="courses__cards cards-wrapper">
                                    {this.state.professions.map((v) => (
                                        <Card lang={this.props.lang} {...v} />
                                    ))}
                                </div>
                                {this.state.professions.length < this.state.professionsCount && (
                                    <div className="courses__more">
                                        <button onClick={() => this.loadMoreProfessions()} type="button"
                                                className="courses__btn button button_wide_mobile button_load button_icon">
                                            {this.props.lang === 'ua' ? 'Ще 10 професій з' : 'Ещё 10 профессий из'} {this.state.professionsCount}
                                        </button>
                                    </div>
                                )}
                            </section>
                            <section className="section courses" id="courses">
                                <div className="courses__header">
                                    <h2 className="courses__title">
                                        {this.props.lang === 'ua' ? 'Курси' : 'Курсы'}
                                        <span className="courses__count-mobile">({this.state.coursesCount})</span>
                                        <div className="courses__info tooltip">
                                            <button type="button" className="tooltip__button">
                                                <img className="tooltip__button-icon" width={10} height={10} src="/icons/info.svg" alt=""/>
                                            </button>
                                            <div className="tooltip__wrapper">
                                                <div className="tooltip__container">
                                                    {this.props.lang !== 'ua' ?
                                                        <div className="tooltip__content">
                                                            <img className="tooltip__icon" width={20} height={20} src="/icons/info.svg" alt=""/>
                                                            <h4 className="tooltip__title">
                                                                Профессия
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Это большая программа. В ней несколько курсов. Она
                                                                помогает
                                                                полностью освоить новую профессию с
                                                                нуля, собрать портфолио, подготовить резюме и найти
                                                                работу.
                                                            </p>
                                                            <h4 className="tooltip__title">
                                                                Курс
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Короткая программа. Она позволяет освоить конкретный
                                                                навык или
                                                                инструмент, которые можно
                                                                добавить в своё портфолио.
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="tooltip__content">
                                                            <img className="tooltip__icon" width={20} height={20} src="/icons/info.svg" alt=""/>
                                                            <h4 className="tooltip__title">
                                                                Професія
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Це велика програма. У ній кілька курсів. Вона допомагає
                                                                повністю освоїти нову професію з нуля, зібрати
                                                                портфоліо, підготувати резюме і знайти роботу.
                                                            </p>
                                                            <h4 className="tooltip__title">
                                                                Курс
                                                            </h4>
                                                            <p className="tooltip__text">
                                                                Коротка програма. Вона дозволяє освоїти конкретний навик
                                                                або інструмент, які можна додати в своє портфоліо.
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </h2>
                                    <span className="courses__count"><b>{this.state.coursesCount}</b> {this.props.lang === 'ua' ? 'курсів' : 'курсов'}</span>
                                </div>
                                <div className="courses__cards cards-wrapper">
                                    {this.state.courses.map((v) => (
                                        <Card lang={this.props.lang} {...v} />
                                    ))}
                                </div>
                                {this.state.courses.length < this.state.coursesCount && (
                                    <div className="courses__more">
                                        <button onClick={() => this.loadMoreCourses()} type="button"
                                                className="courses__btn button button_wide_mobile button_load button_icon">
                                            {this.props.lang === 'ua' ? 'Ще 10 курсів з' : 'Ещё 10 курсов из'} {this.state.coursesCount}
                                        </button>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
                <Connect lang={this.props.lang} />
                <Footer lang={this.props.lang} />
            </div>
        );
    }
}

export default Courses;
