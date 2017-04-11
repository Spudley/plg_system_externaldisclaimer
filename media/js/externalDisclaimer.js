/*
 * Popup message if clicking on an external link.
 * Excludes local links within our sub-domains.
 */
var externalDisclaimer = function($, args) {
    var internalHosts = args.internal.split(/[\n\r]+/);
    var externalRedirects = args.external.split(/[\n\r]+/);
    var disclaimer = args.disclaimer;

    $(document).on('click','a', function() {
        if (isLocal(this.hostname) && !hasExternalRedirects($(this).attr('href'))) {
            return true;    //no alert needed for internal links.
        }

        return confirm(disclaimer);
    });

    var isLocal = function(hostname) {
        if (!hostname) {
            return true;
        }
        for (i=0; i<internalHosts.length;i++) {
            if(hostname === internalHosts[i]) {
                return true;
            }
        }
        return false;
    }
    var hasExternalRedirects = function(str) {
        for (i=0; i<externalRedirects.length;i++) {
            if(str.match(RegExp(externalRedirects[i]))) {
                return true;
            }
        }
        return false;
    }
}
