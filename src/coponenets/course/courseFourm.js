import React from 'react';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';


const CourseFourm=({allAuthors, onChange, onSave, course, errors, saving})=>{
    return(
     <form>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>


      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>


      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

        <br />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
  
  
    </form>

    );
}

export default CourseFourm;