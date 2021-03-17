import React from 'react';


class Foto extends React.Component {

    
    render() {
        return (
            <div >
                <div className="card">
                    <div className="card-header">
                        <h4> {this.props.title} </h4>
                    </div>    
                    <div className="card-body">
                        <img src={this.props.url} alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{ width: "40%" }} />
                    </div>
                </div>
            </div>
        )
    };

}


export default Foto;