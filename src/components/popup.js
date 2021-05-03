import React from 'react'
import style from '../style/popUp.module.scss'
// import cookie from "react-cookie"
class PopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            url: props.location
            // closed: this.getCookie()
        }
        this.pageLocation = this.pageLocation.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.getCookie = this.getCookie.bind(this)
    }

    pageLocation = () => {
        return (this.state.url.pathname)
    }
    handleClick = () => {
        if(this.state.visible == true){
            this.setState({visible: false})
            document.cookie = "off";
            console.log(document.cookie)
        }
    }
    getCookie = () => {
        if(this.state.visible == true){
            console.log(document.cookie)
            return "view"
        }else {
            console.log(document.cookie)
            return "off"
        }
        
    }
    render() {
        return (
          <div //this first checks if on homepage, then checks if the X has been clicked to decide if visible.
          //pageLocation statement needs to be changed back to '/' for dev and "whatever URL post dev"
            className={
              this.pageLocation() === "adoring-spence-ba47ff.netlify.app" &&
              this.getCookie() == "view"
                ? style.container
                : style.noContainer
            }
          >
            <div className={style.centerDesktop}>
              <div className={style.desktopSpacer}></div>
              <div className={style.popUp}>
                <h2>
                  Ask us about our annual roof inspection and care services.{" "}
                </h2>
                {/* Checks sets state visiblility to no */}
                <button
                  className={style.buttonStyle}
                  onClick={this.handleClick}
                  onKeyDown={this.handleClick}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )
    }
}


export default PopUp