# Southbank Centre App: Page

## Installation

### Step 1
Run the following command in your app's root directory.

    $ bower install --save Southbank-Centre/SC-app-page#n.n.n

Replace n.n.n with the version number of this module that you require. See [the list of releases](https://github.com/Southbank-Centre/SC-app-page/releases).

*Please don't install without a release number or your app will be unstable.*

### Step 2

Add **SC-app-page** to the dependency list in **[YourAppName].module.js**

### Step 3
Add the app.page state to your app:

    .state('app.page', {
      url: '/page/:pageAlias',
      views: {
        '@': {
          templateUrl: 'bower_components/SC-app-page/release/pageView.html'
        }
      }
    })

The URL can be changed to whatever is required, although the parameter *:pageAlias* should remain the same for the page to work.