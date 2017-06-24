import React from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
// import PropTypes from 'prop-types';
import CourseListRow from './courseList';
import {bindActionCreators} from 'redux';
import {browserHistory} from'react-router';

class CoursePage extends React.Component{
        constructor(props, context) {
        super(props, context);
        console.log(this.props.courses)
       
    }
    courseRow(course){
        return <p>{course.title}</p>
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    render(){
        
        const {courses} = this.props;
        return(
        <div >
            <h2>Course page</h2>
            <input type="submit"
                   value="Add course"
                   className="btn btn-primary"
                   onClick={this.redirectToAddCoursePage}     
                   />
          <CourseListRow courses={courses}/>   
         
        </div>
        );
    }
}
// CoursePage.propTypes={
    
//     courses:PropTypes.array.isRequired
// };
function mapStateToProps(state, ownProps){
       
    return{
        courses: state.courses
    };

}
 function mapDispatchToProps(dispatch){
     return{
      actions:bindActionCreators(courseAction, dispatch)
     };
 } 

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);