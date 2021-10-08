/**
 * Wrap everything in an IIFE
 */
(function () {

    // Package data array
    var data = [
        {
            name: 'git-plus',
            description: 'The Git-Plus package provides a bunch of shortcuts to commonly used git actions, without the need to switch to terminal.',
            author: 'akonwi',
            url: 'https://atom.io/packages/git-plus',
            downloads: 2854264,
            stars: 2650,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'highlight selected',
            description: 'The Highlight Selected package is super simple: it highlights the current word selected on double click.',
            author: 'richrace',
            url: 'https://atom.io/packages/highlight-selected',
            downloads: 2681942,
            stars: 3266,
            price: 0.00,
            selector: 'p2'
        }
    ];

    // (Atom) Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    /**
     * Utility functions
     */

    // Return today's date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    // Wrapper function for getElementById
    var getEl = function (id) {
        return document.getElementById(id);
    };

    // Writes the package object's data to the page
    var writePackageInfo = function (package) {
        // Get a reference to the DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        // Write package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var plus = new Package(data[0]);
    writePackageInfo(plus);

    var highlight = new Package(data[1]);
    writePackageInfo(highlight);

}());