const API_PROTOCOL = 'http';
const API_DOMAIN = 'localhost';
const API_PORT = 8080;
const VIEW_ID = 'view';
const BUTTON_ID = 'submit';
const TIME_ID = 'time';

const errorBody = '<p>There was an error</p>';

function getQueryString(params) {
    const queryStrings = Object.entries(params).map(p => {
        const [key, value] = p;
        return `${key}=${encodeURIComponent(value)}`;
    });
    return queryStrings.join('&');
}

function throwOnErrorStatusCode(statusCode) {
    if (statusCode >= 400) {
        throw new Error(`API responded with: ${statusCode}`);
    } else if (!statusCode) {
        throw new Error('Woops, there is no status code');
    }
}

async function getHistoryEvents(time) {
    const params = { t: time };
    const endpoint = '/history/events';
    const qs = getQueryString(params);
    const url = qs.length > 0 ? `${endpoint}?${qs}` : endpoint;
    const base = `${API_PROTOCOL}://${API_DOMAIN}:${API_PORT}`;

    const uri = new URL(url, base);
    const response = await fetch(uri);

    throwOnErrorStatusCode(response.status);
    return response.json();
}

async function setView(event) {
    const view = document.getElementById(VIEW_ID);
    const param = document.getElementById(TIME_ID);

    try {
        const content = await getHistoryEvents(param.value);
        view.innerHTML = content.data;
    } catch (err) {
        console.log(err);
        view.innerHTML = errorBody;
    }
    event.preventDefault();
}

document.getElementById(BUTTON_ID).addEventListener('click', setView);
