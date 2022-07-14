import React from "react"
import CreatableSelect from 'react-select/creatable';

export default class ReactSelect extends React.Component {
    state = {
        selectedOptionsTemp: [],
        carsOptions: []
    }

    componentDidMount() {
        let cars = ["audi", "bmw", "ford", "volkswagen"]
        let carsData = [];

        for (let i = 0; i < cars.length; i++) {
            let temp = {
                label: cars[i],
                value: i + 1
            }
            carsData.push(temp)
        }
        // convert cars array into this format
        // cars = [
        //     { label: "audi", value: 1 },
        //     { label: "bmw", value: 2 },
        //     { label: "ford", value: 3 },
        //     { label: "VW", value: 4 },
        // ]; 

        this.setState({
            carsOptions: carsData
        })
    }

    
    handleCreatableChange = (selectedOptions) => {
        let temp = []
        for (let o of selectedOptions) {
            temp.push(o.label)
        }
        console.log(temp)
        this.setState({
            selectedOptionsTemp: selectedOptions
        })
    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    <CreatableSelect
                        placeholder="Select or create new"
                        isMulti
                        onChange={this.handleCreatableChange}
                        options={this.state.carsOptions}
                    />
                </div>
            </div>
        )
    }
}