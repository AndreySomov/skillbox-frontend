import categories from "./categories.json";
import courses from "./courses.json";

function getCategories() {
    return categories;
}

async function getProfessions(category = null, offset = 0, limit = 10) {
    return courses.filter((v) => {
        return v.isPro && (category === null || v.category === category);
    }).slice(offset, offset + limit);
}

async function getProfessionsCount(category = null) {
    return courses.filter((v) => {
        return v.isPro && (category === null || v.category === category);
    }).length;
}

async function getCourses(category = null, offset = 0, limit = 10) {
    return courses.filter((v) => {
        return !v.isPro && (category === null || v.category === category);
    }).slice(offset, offset + limit);
}

async function getCoursesCount(category = null) {
    return courses.filter((v) => {
        return !v.isPro && (category === null || v.category === category);
    }).length;
}

async function getTopCourses() {
    return courses.filter((v) => {
        return v.isPro;
    }).slice(0, 12);
}

export {
    getCategories,
    getProfessions,
    getProfessionsCount,
    getCourses,
    getCoursesCount,
    getTopCourses,
}