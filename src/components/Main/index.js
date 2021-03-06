import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Popular from '../Popular'
import { Wrapper, Routers } from './styles'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Hire from '../Hire'
import Experience from '../Experience'
import AboutUs from '../AboutUs'
import Job from '../Job'

const Main = () => {
    return (
        <Wrapper>
            <Router>
                <>
                    <Header/>
                        <Routers>
                            <Switch>
                                <Route exact path="/">
                                    <>
                                        <Welcome/>
                                        <Popular/>
                                        <Hire/>
                                        <Experience/>
                                        <AboutUs/>
                                        <Job/>
                                    </>
                                </Route>
                                <Route path="/blog">
                                    <p>blog</p>
                                </Route>
                                <Route path="/write_review">
                                    <p>write_review</p>
                                </Route>
                                <Route path="/login">
                                    <p>login</p>
                                </Route>
                                <Route path="/signup">
                                    <p>signup</p>
                                </Route>
                                <Route path="/register_pro">
                                    <p>register_pro</p>
                                </Route>
                            </Switch>
                        </Routers>
                    <Footer/>
                </>
            </Router>
        </Wrapper>
    )
}

export default Main;