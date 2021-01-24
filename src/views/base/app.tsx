import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import {ApiMocksService} from '../../services/api.mock.service';
import TrackRecords from '../track.records/track.records';
import TrackRecordsDetails from '../track.record.details/track.records.details';
import {TrackRecordsService} from '../../services/track.records.service';
import {setTrackRecords} from '../../redux.app.state/actions/track.records';
import UiToggleSwitch from '../../ui.components/ui.toggle.switch/ui.toggle.switch';

import './app.css';

function App() {

    const dispatch = useDispatch();
    const [useApiMocks, setUseApiMocks] = useState<boolean>(false);

    useEffect(() => {
        getTrackRecords();
        const isApiMockOn: boolean = !!ApiMocksService.isApiMocksEnabled();
        setUseApiMocks(isApiMockOn);
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

    const handleUseApiMock = (val: boolean) => {
        setUseApiMocks(val);
        if (val) {
            ApiMocksService.enableApiMocks();
        } else {
            ApiMocksService.disableApiMocks();
        }
    };

    return (
        <div className="app">
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">Rock Tracks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                            </div>
                        </div>
                    </nav>

                    <div className={'container pt-2'}>
                        <div className="row">
                            <div className={'col-12 col-md-8'}>
                                <UiToggleSwitch
                                    value={useApiMocks}
                                    onChange={handleUseApiMock}
                                />
                            </div>
                            <div className="col-12 col-md-4 text-right pt-3 pt-md-0">

                                <a
                                    className={'btn btn-outline-dark'}
                                    href="https://github.com/fwhatley/code-challenge-iberdrola-frontend"
                                    target={'_blank'}
                                >
                                    See It In GitHub
                                </a>
                            </div>
                        </div>
                    </div>

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
