import React from "react"
import Select from 'react-select';

export default class ReactMultiSelect extends React.Component {
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
            <React.Fragment>
                <Select
                    isMulti
                    placeholder="Select one or more"
                    onChange={this.handleCreatableChange}
                    options={this.state.carsOptions}
                />
            </React.Fragment>
        )
    }
}