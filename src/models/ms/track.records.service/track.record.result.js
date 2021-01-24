export default class TrackRecordResult {
    constructor(values = {}) {
        this.wrapperType = values.wrapperType || '';
        this.kind = values.kind || '';
        this.artistId = values.artistId || 0;
        this.collectionId = values.collectionId || 0;
        this.trackId = values.trackId || 0;
        this.artistName = values.artistName || '';
        this.collectionName = values.collectionName || '';
        this.trackName = values.trackName || '';
        this.collectionCensoredName = values.collectionCensoredName || '';
        this.trackCensoredName = values.trackCensoredName || '';
        this.collectionArtistId = values.collectionArtistId || 0;
        this.collectionArtistName = values.collectionArtistName || '';
        this.collectionArtistViewUrl = values.collectionArtistViewUrl || '';
        this.artistViewUrl = values.artistViewUrl || '';
        this.collectionViewUrl = values.collectionViewUrl || '';
        this.trackViewUrl = values.trackViewUrl || '';
        this.previewUrl = values.previewUrl || '';
        this.artworkUrl30 = values.artworkUrl30 || '';
        this.artworkUrl60 = values.artworkUrl60 || '';
        this.artworkUrl100 = values.artworkUrl100 || '';
        this.collectionPrice = values.collectionPrice || 0;
        this.trackPrice = values.trackPrice || 0;
        this.releaseDate = values.releaseDate ? new Date(values.releaseDate): new Date();
        this.collectionExplicitness = values.collectionExplicitness || '';
        this.trackExplicitness = values.trackExplicitness || '';
        this.discCount = values.discCount || 0;
        this.discNumber = values.discNumber || 0;
        this.trackCount = values.trackCount || 0;
        this.trackNumber = values.trackNumber || 0;
        this.trackTimeMillis = values.trackTimeMillis || 0;
        this.country = values.country || '';
        this.currency = values.currency || '';
        this.primaryGenreName = values.primaryGenreName || '';
        this.isStreamable = values.isStreamable || false;
        this.durationInSecs = this.millisToMinutesAndSeconds(this.trackTimeMillis);
        this.formattedReleaseDate = this.getFormattedReleaseDate();
    }

    millisToMinutesAndSeconds(millis = 0) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    getFormattedReleaseDate = () => {
        const day = ('0' + this.releaseDate.getDate()).slice(-2);
        const month = ('0' + this.releaseDate.getMonth()).slice(-2);

        return `${month}-${day}-${this.releaseDate.getFullYear()}`;
    }
}

