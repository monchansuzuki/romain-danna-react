import React, {Component} from 'react';

class Music extends Component {
    render() {
        return (
            <div className='section'>
                <h1>About my music</h1>
                <iframe  className='lecteur' width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62573551&color=%23be9367&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                </iframe>
                <p>With over 24 years of playing experience (academy school, conservatory,band, and concert hall) he’s always kept the relation with the music . He was graduated from the Conservatory Darius Milhaud in Paris, and jazz music school academy EDIM. He started to learn music when he was 5 years old and never stopped. He has been playing the trumpet guitar piano and keyboard for years. He is currently working in collaboration with many singers and musicians, recording in studios, performing on stage, and composing soundtrack (TV,Cinema, PV, CM) with Cubase (orchestral composition). Always listening movie and game soundtracks, he was inspired by some of the greatest names from the movie soundtrack maker: Hans Zimmer, Harry Gregson Williams, John Powell, Alan Silvestri, James Newton Howard ,Trevor Rabin etc.</p>

            </div>
        );
    }
}

export default Music;