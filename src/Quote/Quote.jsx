import React,{ useEffect,useState } from 'react';
import { connect } from 'react-redux';
import {getQuote} from '../redux/quote/thunk';
import './Quote.css';

const Quote = ({ getQuote,quote }) => {
    const [randomColor, setRandomColor] = useState('');
    const handleQuoteButton = () =>{
        var rand = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setRandomColor(rand);
        document.body.style.backgroundColor = rand;
        const key = Math.floor(Math.random() * 999);
        getQuote(key);
    } 

    useEffect(() => {
        handleQuoteButton();
    }, []);

    return (
        <div id="quote-box" className="" style={{ color: randomColor }}>
            <div className="quote-text" >
                <i className="fa fa-quote-left pr-3"> </i><span id="text">{ quote.q }</span>
            </div>
            <div className="quote-author">- <span id="author">{ quote.a }</span></div>
            <div className="mt-2">
                <a className="btn mr-2" style={{ backgroundColor: randomColor,color: 'white' }} id="tweet-quote" title="Tweet this quote!" target="_top" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.q}`}>
                    <i className="fa fa-twitter" ></i>
                </a>
                <a className="btn mr-2" style={{ backgroundColor: randomColor,color: 'white' }} id="tumblr-quote" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Farrah%20Gray&content=${quote.q}`}>
                    <i className="fa fa-tumblr"></i>
                </a>
                <button className="btn btn-default mr-2" id="new-quote" onClick={handleQuoteButton} style={{ backgroundColor: randomColor,color: 'white' }}>New quote</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    quote : state
});


const mapDispatchToProps = dispatch => ({
    getQuote: key => dispatch(getQuote(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
