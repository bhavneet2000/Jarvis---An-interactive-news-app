import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import useStyles from './styles';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
const App = () => {
    const alanKey = '059531821d8ed63c719275233d5a589b2e956eca572e1d8b807a3e2338fdd0dc/stage';
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(() => { 
        alanBtn({
            key: alanKey,
            
            onCommand: ({ command, articles, number }) =>{
                if(command === 'newHeadlines'){
                    window.scrollTo(0, 0);
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
                }
                else if(command==='open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy:true}):number
                    const article = articles[parsedNumber-1];
                    if(!article){
                        alanBtn().playText('Please try that again');
                    }
                    else{
                        alanBtn().playText('Opening..');
                        window.open(article.url, '_blank');
                    }
                }
            }
        })
    }, [])
    
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://thumbs.gfycat.com/ForsakenImpoliteIaerismetalmark-size_restricted.gif" className={classes.jarvisLogo} alt="jarvis logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App
