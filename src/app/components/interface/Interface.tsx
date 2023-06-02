import '../../../index.scss'
import Navigation from "../common/Header/Navigation";
import PaneHeader from '../widgets/NavigationPane/PaneHeader';
import PaneNavigator from '../widgets/NavigationPane/PaneNavigator';



export default function Interface() {
    return (
        <div className="Interface">

            <div className="panelA">
                <PaneHeader />
                <PaneNavigator/>
            </div>

            <div className='panelB'>
                <Navigation.Header />

                <div className='panel-content'
                    id='panel-content'>
                    {/* 
                        TODO:
                        /**
                         *  Using REDUX in order to display selected "Explorer" item from the other panel.
                         *  Have the cards also compute for their height size.
                         * */ 
                     }
                    <div className='card'>
                        User Info & Subscription Information Here
                    </div>
                    <div className='card'>
                        Drag and Drop Files Uploads here <br/>
                        Refer to google drive for UI inspiration <br />
                        Check out commented code inside
                    </div>
                </div>
            </div>
        </div>
    );
}