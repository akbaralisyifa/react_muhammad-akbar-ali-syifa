import { Component } from "react";
import NavbarPage from "./NavbarPage";
import HeaderPage from "./HeaderPage";
import { article } from "../article";
import FormPage from "./FormPage";
import TabelPage from "./TabelPage";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        return(
            <>
            <NavbarPage />
            <HeaderPage article={article}/>
            <FormPage />
            <TabelPage />
            </>
        )
    }
}

export default Home;