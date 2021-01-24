import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import UiPageHeadline from '../../ui.components/ui.page.title/ui.page.headline';
import TrackRecordResult from '../../models/ms/track.records.service/track.record.result';
import UiLoadingSpinner from '../../ui.components/ui.loading.spinner/ui.loading.spinner';

import './_track.records.css';

function TrackRecords() {

    const history = useHistory();
    const trackRecordsState = useSelector((state: any) => state.trackRecords);
    const {trackRecords = {}, loadingTrackRecords = false} = trackRecordsState;

    const notAbleToLoad = !loadingTrackRecords && trackRecords?.results?.length <= 0;
    const errorMessage = 'We couldn\'t load the track record details. Please try again later.';

    const onSeeTrackDetails = (trackId = '') => {
        if (trackId) {
            history.push(`/track-records/${trackId}/track-record-details`);
        }
    }

    return (
        <div className="track-records container">
            <UiPageHeadline title={'Track Records'}/>

            {notAbleToLoad &&
            <p className={'py-3'}>{errorMessage}</p>
            }

            {loadingTrackRecords &&
            <UiLoadingSpinner title={'Loading Track Records...'}/>
            }

            {!loadingTrackRecords &&
            trackRecords?.results?.length > 0 &&
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Icon</th>
                            <th scope="col">Track Name</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Price</th>
                            <th scope="col">Artwork URL</th>
                            <th scope="col">Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trackRecords?.results?.map((track: TrackRecordResult, idx: number) =>
                            <tr key={track?.trackId}>
                                <th scope="row">{idx + 1}</th>
                                <td className={'p-1'}>
                                    <img src={track?.artworkUrl100} className="img-fluid" alt="Responsive image"/>
                                </td>
                                <td>{track?.trackName}</td>
                                <td>{track?.artistName}</td>
                                <td>${track?.trackPrice}</td>
                                <td>{track?.artworkUrl100}</td>
                                <td>
                                    <button className={'btn btn-link'}
                                            onClick={(e) => onSeeTrackDetails(track?.trackId)}>See Details
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>

                </div>
            </div>
            }

        </div>
    );
}

export default TrackRecords;
