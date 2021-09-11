import send from '@polka/send';
import faqs from '../../../../../content/faq/en.json';

let json;

export function get(req, res) {
    if (!json || process.env.NODE_ENV !== 'production') {
        json = JSON.stringify(faqs);
    }

    send(res, 200, json, {
        'Content-Type': 'application/json'
    });
	
}
