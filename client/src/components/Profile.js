import React from "react";
import AuthNavbar from './AuthNavbar';

class MyTeams extends React.Component {
    render() {
        return (
            <section className='profile'>
                <AuthNavbar />
                <div className="profile__content">
                    <div className="profile__photo">


                    </div>
                    <div className="profile__details">
                        <div className="profile__details__name">
                            
                        </div>
                        <div className="profile__details__email">

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default MyTeams;
