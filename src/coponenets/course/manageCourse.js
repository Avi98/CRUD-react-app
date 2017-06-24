import React from 'react';
import {connect} from'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseFourm from './courseFourm';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class ManageCourse extends React.Component{
    constructor(props,context){
        super(props,context);
       

        this.state={
            course:Object.assign({}, props.course),
            errors:{},
            saving:false
            
        };
          this.updateCoursState=this.updateCoursState.bind(this);
          this.saveCourse=this.saveCourse.bind(this);

    }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

    updateCoursState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
      event.preventDefault();
      this.setState({saving:true});
      this.props.actions.saveCourse(this.state.course)
      .then(()=>this.redirect())
      .catch(error=>{
          toastr.error(error);
      });
           this.setState({saving:false});
 
  }
  redirect(){
      this.setState({saving:false});
      toastr.success('course saved');
      browserHistory.push('/courses');
  }
render(){
    return(
    <div>
        <h1> mange course</h1>
        < CourseFourm       course={this.state.course}
                            onChange={this.updateCoursState}
                            errors={this.state.errors}
                            allAuthors={this.props.authores}
                            onSave={this.saveCourse}
                            saving={this.state.saving}

        />

    </div>
     );
    }

}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; 
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; 

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
   
    let authoresFormatedForDropDown=state.authors.map((author)=>{
        return{
            value:author.id,
            text:author.firstName+' '+author.lastName
        };
    });
    return{course:course,
           authores:authoresFormatedForDropDown 
};
}


function mapDispatchToProps(dispatch){
    return {
actions:bindActionCreators(courseActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageCourse);