import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import UiPageHeadline from '../../ui.components/ui.page.title/ui.page.headline';
import TrackRecordResult from '../../models/ms/track.records.service/track.record.result';

import './_track.records.details.css';
import UiLoadingSpinner from '../../ui.components/ui.loading.spinner/ui.loading.spinner';

function TrackRecordsDetails() {

    const history = useHistory();
    const trackRecordsState = useSelector((state: any) => state.trackRecords);
    const {trackRecords = [], loadingTrackRecords = false} = trackRecordsState;

    let {trackId} = useParams<any>();
    trackId = parseInt(trackId);
    const track = trackRecords?.results?.find((trackRecord: TrackRecordResult) => trackRecord?.trackId === trackId) || {};

    const goToHomePage = () => {
        history.push('/');
    };

    const notAbleToLoad = !loadingTrackRecords && trackRecords?.results?.length <= 0;
    const errorMessage = 'We couldn\'t load the track record details. Please try again later.';

    return (
        <div className="track-records-details container">
            <UiPageHeadline title={'Track Record Details'}/>

            {notAbleToLoad &&
            <p className={'py-3'}>{errorMessage}</p>
            }

            {loadingTrackRecords &&
            <UiLoadingSpinner title={'Loading Details...'}/>
            }

            {!loadingTrackRecords &&
            trackRecords?.results?.length > 0 &&
            <div className="row">
                <div className={'col-12 my-3'}>
                    <img src={track?.artworkUrl100} className="img-fluid" alt="Responsive image"/>
                </div>
                <div className={'col-12'}>
                    <div className={'d-flex'}>
                        <strong>ArtworkURL: </strong>
                        <span>{track?.artworkUrl100}</span>
                    </div>
                    <div>
                        <strong>Track Name: </strong>
                        <span>{track?.trackName}</span>
                    </div>
                    <div>
                        <strong>Artist: </strong>
                        <span>{track?.artistName}</span>
                    </div>
                    <div>
                        <strong>Price: </strong>
                        <span>${track?.trackPrice}</span>
                    </div>
                    <div>
                        <strong>Duration: </strong>
                        <span>{track?.durationInSecs}</span>
                    </div>
                    <div>
                        <strong>Release Date: </strong>
                        <span>{track?.formattedReleaseDate}</span>
                    </div>
                </div>
            </div>
            }

            <div className="row pt-5">
                <div className="col-12">
                    <button
                        className={'btn btn-primary btn-lg'}
                        onClick={(e) => goToHomePage()}
                    >
                        Go To Home Page
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrackRecordsDetails;
