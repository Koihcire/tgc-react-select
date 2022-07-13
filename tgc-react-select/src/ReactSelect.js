import React from "react"
import CreatableSelect from 'react-select/creatable';

export default class ReactSelect extends React.Component {
    state = {
        selectedOptions: []
    }

    cars = [
        { label: "audi", value: 1 },
        { label: "bmw", value: 2 },
        { label: "ford", value: 3 },
        { label: "VW", value: 4 },
    ];

    handleChange = (selectedOptions)=>{
        this.setState({
            selectedOptions: selectedOptions
        })
    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    <CreatableSelect
                        isMulti
                        onChange={this.handleChange}
                        options={this.cars}
                    />
                </div>
            </div>
        )
    }
}