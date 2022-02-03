import React from 'react';


class AddContact extends React.Component
{
    state = {
        'name': '',
        'email': ''
    };

    add = (e) => {
        e.preventDefault();

        if (this.state.name === '' || this.email === '')
        {
            alert('All the fields are required');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: '', email: ''});
    }

    render () {
        return (
            <div className='mt-4'>
                <h2 className='text-center'>Add Conctact</h2>
                <form onSubmit={this.add}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"
                            name='name' 
                            className="form-control" 
                            id="name" 
                            value={this.state.name} 
                            placeholder='Name'
                            onChange={(e) => {
                                    e.stopPropagation();
                                    this.setState({name: e.target.value});
                                    console.log(this.state);
                                }
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email-address" className="form-label">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            className="form-control" 
                            id="email-address" 
                            value={this.state.email}
                            placeholder='Email address..'
                            onChange={(e) => {
                                    e.stopPropagation();
                                    this.setState({email: e.target.value});
                                    console.log(this.state)
                                }
                            }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <i className="fas fa-plus"></i>
                        <span className='ml-2' style={{'display': 'inline-block', 'marginLeft': '10px'}}>Add</span>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddContact;