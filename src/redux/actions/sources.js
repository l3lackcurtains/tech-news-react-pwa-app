import A from './config'
import axios from 'axios'

const reqSrc = () => {
	return {	
		type: A.REQ_SRC
	}
}
	

const recSrc = (json) => {
	return {
		type: A.REC_SRC,
		data: json
	}
}
	

const recErr = (json) => {
	return {
		type: A.REC_ERR,
		data: json
	}
}
	
// Dispatch Src Request, Response and Error
const fetchSrc = () =>
	(dispatch) => {
			
		dispatch(reqSrc())
		const url = "https://newsapi.org/v1/sources"
		const res = axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
		.then( (response) => {
			dispatch(recSrc(response.data.sources))
		})
		.catch( (response) => {
			dispatch(recErr(response.data))
		} )
		if ('caches' in window) {
			return caches.match(url).then( (response)=> {
				if (response) {
			      response.json().then((data) => {
			        dispatch(recSrc(data.sources))
			      }).catch( () => {
			      	return res
			      })
				}
			});
	    }
		
	}
export default fetchSrc