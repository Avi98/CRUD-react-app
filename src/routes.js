import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './coponenets/HomePage/HomePage';
import ManageCourse from './coponenets/course/manageCourse';
import AboutPage from './coponenets/About/About';
import CoursePage from './coponenets/course/course';
import App from './App';

export default(
<Route path="/" component={App}>
    <IndexRoute  component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursePage} />
    <Route path="course" component={ManageCourse} />
    <Route path="course/:id" component={ManageCourse} />
    
    </Route>
);