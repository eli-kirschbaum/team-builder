import React from 'react' 




export default function TeamForm(props) {

    const { values, update, submit } = props
    
    
    
    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    
    return (
        <form className='form container' onSubmit={onSubmit}>'
            <div className='form-group inputs'>
                <label> Name
                    <input 
                        input='name'
                        type='text'
                        placeholder='type in a name'
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label> Email
                    <input
                        name='email'
                        type='email'
                        placeholder='type in an email'
                        value={values.email}
                        onChange={onChange}  
                    />
                </label>
                <label> Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>*Select a Role*</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='UI Designer'>UI Designer</option>
                        <option value='Senior Engineer'>Senior Engineer</option>
                    </select>
                </label>
                
                <div className='submit'>
                    <button>submit</button>
                </div>

            </div>
        
        </form>
    )



}