import React, { Component } from 'react'
import Spinner from '../spinner';



const withData = (Wrapped) => {
    return class extends Component {

        state = {
            data: null,
        }

        componentDidMount() {
            this.updateList();
        }

        componentDidUpdate(prevProps) {
            if ( this.props.getData !== prevProps.getData ) {
                this.updateList();
            }
        }

        updateList = () => {

            const { getData } = this.props;

            getData()
                .then((data) => { 
                    this.setState({ data })
                })
        }

        render() {
            
            if ( !this.state.data ) {
                return <Spinner />
            }

            return <Wrapped {...this.props} data={this.state.data} />
        }
    }
}

export default withData;