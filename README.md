# fetch-helpers

This is a simple package that checks the response and throws an exception the response is not 200 or 201.

`npm install --save 11online-fetch-helpers`

Import it like so: `import {handleResponse} from '11online-fetch-helpers';`

Use like so:

```
export const getAllActivitiesRequest = (token) => {
    return fetch(
        process.env.REACT_APP_API_ROOT + '/activity',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "api-token": token
            }
        }
    ).then(handleResponse);
};
```