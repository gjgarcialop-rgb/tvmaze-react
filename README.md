# TVmaze Show Gallery

A React application for searching TV shows with the [TVmaze API](https://www.tvmaze.com/api). Also displays information about the show and users can view summaries, ratings, genre, and etc of the show.

## Features

Search TVmaze for shows by name.
 Display up to 10 search results.
 Show each result's:
 Poster image
 Title
 Summary with HTML markup removed
 Premiere date
 Last updated date
 Genres
 Average rating
 Main cast members
 Open a dedicated detail page for a show.

 Display additional show information, including status, network or web channel, rating, and up to 15 cast members.
 Link to the show's page on TVmaze.

 Provide loading, empty-result, invalid-search, and API error messages.
 Use React Router for client-side navigation without full-page reloads.

## How to Use the Application

1. Open the home page.
2. Enter a TV show name in the search field.
3. Select **Search**.
4. Select a show title to open its detail page.
5. Use **Back to Home** to return to the search results.
6. Select **View on TVmaze** or **More Info** to open the show's TVmaze page in a new tab.

The search field is initialized with `Friends`, and the first search runs automatically when the gallery loads. Empty searches are rejected with a validation message.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Search form and gallery of TV show results |
| `/show/:id` | Details and cast information for a selected show |

## Project Structure

src/
├── App.jsx                 # Application routes
├── App.css                 # App-level styles
├── index.css               # Global and layout styles
├── main.jsx                # React entry point and BrowserRouter setup
├── script.js               # Shared summary and date formatting helpers
├── components/
│   ├── CastList.jsx        # Cast list shown on a show card
│   ├── SearchForm.jsx      # Search input and submit button
│   ├── ShowCard.jsx        # Individual search result and its cast
│   └── ShowList.jsx        # Collection of show cards
└── routes/
    ├── Gallery.jsx         # Search state, API requests, and results page
    └── ShowDetail.jsx      # Selected show details and expanded cast list


## API Requests

The application uses these public TVmaze endpoints:

Search: `https://api.tvmaze.com/search/shows?q={query}`
Show details: `https://api.tvmaze.com/shows/{id}`
Show cast: `https://api.tvmaze.com/shows/{id}/cast`


## Error and Empty States

A blank search displays `Please enter a TV show name`.
A failed search displays an error message and clears the current results.
HTTP 429 responses explain that too many requests were made.
Other failed search requests display an unavailable-results message.
A show detail request that fails displays an error and a link back to the home page.
Missing summaries, dates, images, ratings, genres, networks, or cast data receive fallback text or are omitted where appropriate.

## Reflection

React made this project easier to organize because i could seperate the application into smaller componenets.

For example, in JavaScript, we would need to update the page manullay using DOM methods when the search results changed. But, with react I can use state to store the results and let React update the page when the state changes.

The UseEffect also allows me to fetch data from the Tvmaze API when a component loads. React Router makes it possible to navigate between the gallery and individual show pages without creating separate HTML pages. 

Finally, React provides an organized way to build an interactive application, although it requires learning concepts such as components, props, states, and hooks.