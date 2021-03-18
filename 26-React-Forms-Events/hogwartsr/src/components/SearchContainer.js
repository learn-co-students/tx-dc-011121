import React, { Component } from 'react'

//Components
import StudentCard from './StudentCard'

export default class SearchContainer extends Component {


    state = {
        wizards: [],
        searchText: ""
    }


    componentDidMount = async () => {
        const res = await fetch('http://localhost:3001/wizards')
        const wizards = await res.json()


        this.setState({ wizards })
    }

    changeSearch = (event) => {
        this.setState({searchText: event.target.value})
    }

    filteredWizards() {
        const filteredWizards = this.state.wizards.filter(wizard => wizard.house.toLowerCase().includes(this.state.searchText.toLowerCase()))
        return filteredWizards
    }


    render(){
        
   
        return (
            <div className="container mt-5">
               
                <div className="form-group">
                    <label htmlFor="search-text">Search by House:</label>
                    <input onChange={this.changeSearch} type="text" className="form-control" id="search-text" placeholder="gryffindor sucks"/>
                </div>
               
                <div className="row justify-content-md-center">
                    {this.filteredWizards().map(
                        wizard => <StudentCard wizard={wizard} key={wizard.id} />
                    )}
                </div>
            </div>
        )
    }
}

