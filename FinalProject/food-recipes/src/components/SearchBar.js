import React, { Component } from 'react'
import styled from 'styled-components';

const Styles = styled.div`
 .input-group-append {
   margin-top: 10px;
 }

.text-capitalize {
  margin-top: 40px;
}
`;

export class SearchBar extends Component {
  render() {
    const {handleChange, HandleSubmit, search} = this.props;
    return (
      <Styles>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h3 className="text-capitalize">What would you like to cook today?</h3>
            <form className="mt-3">
              <label htmlFor="search" className="text-capitalize">
              </label>
              <div className="input-group">
                <input
                type="text"
                name="search"
                className="form-control"
                placeholder="type your search here.."
                value={search}
                onChange={handleChange} 
                />
              </div>
              <div className="input-group-append d-flex justify-content-center">
                <button
                  type="submit"
                  className="input-group-text bg-warning text-white"
                  onClick={HandleSubmit}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Styles>
    )
  }
}

export default SearchBar


