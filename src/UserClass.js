import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            userinfo: {

                name: "",
                location: "  ",
                avatar_url:" ",
            },
        };
        // console.log(" child constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/KRISHNA1703");

        const Json = await data.json();
        // console.log(Json);


        this.setState({
     
            userinfo: Json,
        });



        // console.log("child did mount")
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.count != prevState.count){
            this.setstate = this.state.count + 1
        }


            // console.log(" componentDidUpdate")
    }

    componentWillUnmount() {
        // console.log(" componentWillUnmount")
    }
    render() {
        // console.log(" child render")
        return (

            <div className="userid">

            
                <img
                    style={{ width: "220px", height: "200px" }}
                    src={this.state.userinfo.avatar_url}
                ></img>
                <h2>{this.state.userinfo.name}</h2>

                <h3>{this.state.userinfo.location} </h3>
                <h3>{this.state.userinfo.bio} </h3>


            </div>



        );
    }
}
export default UserClass;
