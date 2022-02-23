import React from 'react' 


export default function myForm(props) {

    
    return (
        <form className='form container' onSubmit={onSubmit}>'
            <div className='form-group inputs'>
                <label> Name
                    <input 
                        input='name'
                        type='text'
                        placeholder='name'
                        maxLength='30'
                    />
                </label>
                <label> Email
                    <input
                        input='email'
                        type='email'
                        placeholder='email'
                        
                    />
                </label>
                <label> Role
                    <select name='role'>
                        <option value=''>*Select a Role*</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='UI Designer'>UI Designer</option>
                        <option value='Senior Engineer'>Senior Engineer</option>
                    </select>
                </label>

            </div>
        
        </form>
    )



}