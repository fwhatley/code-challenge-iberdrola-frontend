import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import TrackRecords from '../track.records/track.records';
import TrackRecordsDetails from '../track.record.details/track.records.details';
import {TrackRecordsService} from '../../services/track.records.service';
import {setTrackRecords} from '../../redux.app.state/actions/track.records';

import './app.css';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        getTrackRecords();
    }, []);

    const getTrackRecords = () => {
        dispatch(setTrackRecords({
            trackRecords: [],
            loadingTrackRecords: true,
        }));
        TrackRecordsService.getTrackRecords().then((res) => {
            dispatch(setTrackRecords({
                trackRecords: res,
                loadingTrackRecords: false,
            }));
        }).catch((err) => {
            dispatch(setTrackRecords({
                trackRecords: {
                    results: []
                },
                loadingTrackRecords: false,
            }));
        });
    };

    return (
        <div className="app">
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Rock Tracks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/">Home</Link>
                                <span
                                    className="sr-only">(current)
                                </span>
                            </div>
                        </div>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/track-records/:trackId/track-record-details">
                            <TrackRecordsDetails/>
                        </Route>
                        <Route path="/">
                            <TrackRecords/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
