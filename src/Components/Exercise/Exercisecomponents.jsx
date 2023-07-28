import React, { Component } from 'react'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import Productlist from './Productlist'

export default class
    extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Productlist />
                <Footer />
            </div>


        )
    }
}
