// we export these functions so other files can use these functions.

// the removeHTML function removes html tags from Tvmaze summaries.
export function removeHTML(html) {
    if (!html) {
        return 'No Summary Available'
    }

    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || 'No Summary Available'
}

// the formatDate function converts a date into a readable format and handles missing or invalid dates. 
export function formatDate(date) {
    if (!date) {
        return 'No Date Available'
    }

    const fromattedDate = new Date(date) 

    if (isNaN(fromattedDate.getTime())) {

    
        return 'Invalid Date'
    }

    return fromattedDate.toLocaleString();

}