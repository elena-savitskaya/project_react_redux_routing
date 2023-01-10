import React from 'react'
import "./_input.scss"

class Input extends React.Component {
    render() {
        return (
            <label className="subtitle">
                {this.props.name}
                <input type={this.props.type} />
            </label>
        )
    }
}

export { Input };

