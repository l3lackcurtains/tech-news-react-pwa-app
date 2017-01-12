import A from './config'
import axios from 'axios'
import C from '../../utils/config'

const reqNews = () => {
	return {	
		type: A.REQ_NEWS
	}
}
	

const recNews = (json) => {
	return {
		type: A.REC_NEWS,
		data: json
	}
}
	

const recErr = (json) => {
	return {
		type: A.REC_ERR,
		data: json
	}
}
	
// Dispatch News Request, Response and Error
const fetchNews = (source) =>
	(dispatch) => {
		dispatch(reqNews())
		const url = "https://newsapi.org/v1/articles?source="+source+"&apiKey="+C.API_KEY
		const res = axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
		.then( (response) => {
			dispatch(recNews(response.data.articles))
		})
		.catch( (response) => {
			dispatch(recErr(response.data))
		} )
		if ('caches' in window) {
			return caches.match(url).then( (response)=> {
				if (response) {
			      response.json().then((data) => {
			        dispatch(recNews(data.articles))
			      }).catch( () => {
			      	return res
			      })
				}
			});
	    }
		
	}
export default fetchNews