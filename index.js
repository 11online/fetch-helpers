/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author 11 Online - Eric Debelak
*/
exports.handleResponse = function(response) {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    } else {
        throw response;
    }
};